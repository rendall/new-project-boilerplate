const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: { main: './src-compiled/index.js' },
  mode: 'development',
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'public'),
    },
    plugins: [
      new CopyPlugin([
        { from: '**/*', to: '', context: 'static' },
      ]),
    ],
};