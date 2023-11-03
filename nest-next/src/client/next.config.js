const path = require('path');

module.exports = {
  images: {
    formats: ["image/webp"]
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // 使用 imports-loader 来修改 @antv/g-base 中的代码
    // config.module.rules.push({
    //   test: /@antv\/g-base\/lib\/animate\/timeline\.js/,
    //   use: 'imports-loader?d3Interpolate=@d3-interpolate'
    // });
  
    return config;
  },
};
