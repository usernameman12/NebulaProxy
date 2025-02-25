const fetch = require('node-fetch');

module.exports = async function(req, res) {
  const url = req.query.url;
  if (!url) {
    return res.status(400).json({ error: 'No URL provided' });
  }
  try {
    const response = await fetch(url);
    const contentType = response.headers.get('content-type');
    const data = await response.text();
    res.set('Content-Type', contentType);
    res.send(data);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};
