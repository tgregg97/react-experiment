var webpack = require('webpack');
var path = require('path');

var config = {
  entry: './App.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
	      test: /\.jsx?/,
	      exclude: /node_modules/,
	      loader: 'babel-loader',
        query: {
          presets: ['es2015','react']
        }
      },
      { test: /\.less/, loader: 'style!css!less' },
      { test: /\.css/, loader: 'style!css' },
      { test: /\.(woff2|woff|ttf|svg|eot)$/, loader: 'file' }
    ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

module.exports = config;
