const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/chat',
    createProxyMiddleware({
      target: 'http://100.80.227.42:5000/chat',
      changeOrigin: true,
    })
  );
};