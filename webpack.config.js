'use strict';

const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/vendors/bootstrap.js',
  output: {
    filename: 'bootstrap-min.js',
    path: path.resolve(__dirname, './src/js/'),
  },
  devServer: {
    static: path.resolve(__dirname, './src/js/'),
    port: 8080,
    hot: true,
  },
};
