const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const imgRules = {
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: 'file-loader',
    },
  ],
};

const babelRules = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
};

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.[contentHash].js',
  },
  module: {
    rules: [babelRules, imgRules],
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Hand Written',
      template: './public/index.html',
      favicon: './src/assets/Favicon/HW.png',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
