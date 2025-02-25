module.exports = {
    sanitizeUrl: function(url) {
      // Allow only HTTP/HTTPS URLs
      if (/^(http|https):\/\//.test(url)) {
        return url;
      }
      throw new Error('Invalid URL. Only HTTP and HTTPS protocols are allowed.');
    }
  };
//fuck skids, i hate wss fuckers.  