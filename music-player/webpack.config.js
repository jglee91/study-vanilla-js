const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js'],
  },
  entry: {
    main: path.join(__dirname, 'src/main.js'),
  },
  // module: {},
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/assets', to: '.' }],
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
