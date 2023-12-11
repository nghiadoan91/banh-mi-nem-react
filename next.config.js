// next.config.js
const withImages = require("next-images");
module.exports = withImages();
const path = require("path");

module.exports = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  output: 'export',
  webpack: (config) => {
       config.resolve.alias.canvas = false;
    
       return config;
     },
};