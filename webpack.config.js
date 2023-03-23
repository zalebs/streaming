// webpack.config.js

module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
          options: {
            throwIfNamespace: false, // Add this option
          },
        },
      ],
    },
  };
  