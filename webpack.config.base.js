const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

//css rules
// const cssRules = {
//   test: /\.styl$/i,
//   use: ['style-loader', 'css-loader', 'stylus-loader'],
//   exclude: /node_modules/,
// };

//images rules
// const imgRules = {
//   test: /\.(jpg|png|svg)$/,
//   use: {
//     loader: 'url-loader',
//     options: {
//       limit: 90000,
//     }
//   }
// }

//babel rules
const babelRules = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
};

//export config
module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.[contentHash].js',
  },
  module: {
    rules: [babelRules],
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Hand Written',
      template: './public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
