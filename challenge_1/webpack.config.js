const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const regeneratorRuntime = require("regenerator-runtime");

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  }
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'Historical Events Finder',
  //   }),
  // ]
};
