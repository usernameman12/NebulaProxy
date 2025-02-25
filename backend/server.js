const express = require('express');
const proxyHandler = require('./proxyHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public folder
app.use(express.static('public'));

// Proxy endpoint for local testing
app.get('/api/proxy', proxyHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
