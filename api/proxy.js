const fetch = require('node-fetch');
const { sanitizeUrl } = require('./utils');
const config = require('./config');

module.exports = async (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ error: 'No URL provided' });
  }
  try {
    // Basic sanitization (throws an error if invalid)
    const safeUrl = sanitizeUrl(url);
    const response = await fetch(safeUrl, {
      headers: { "User-Agent": config.userAgent }
    });
    const contentType = response.headers.get('content-type');
    const data = await response.text();
    res.setHeader('content-type', contentType);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};
