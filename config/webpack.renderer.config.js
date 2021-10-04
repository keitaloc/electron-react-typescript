const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const path = require('path');

module.exports = {
  module: {
    rules: rules.concat([
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ]),
  },
  plugins,
  resolve: {
    alias: {
      renderer: path.resolve(__dirname, '../src/renderer/'),
      main: path.resolve(__dirname, '../src/main/'),
      assets: path.resolve(__dirname, '../src/assets/'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
};
