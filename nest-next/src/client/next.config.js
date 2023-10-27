const path = require('path')

module.exports = {
  images: {
    formats: ["image/webp"]
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // config.resolve.alias = {
    //   "@components": path.resolve(__dirname, "components"),
    // };

    return config;
  },
}
