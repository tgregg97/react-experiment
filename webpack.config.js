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
      }
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
