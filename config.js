// config.js - Load token from environment
(function() {
  const token = process.env.VITE_MAPBOX_TOKEN || process.env.MAPBOX_TOKEN;
  if (token) {
    window.MAPBOX_TOKEN = token;
  }
})();
