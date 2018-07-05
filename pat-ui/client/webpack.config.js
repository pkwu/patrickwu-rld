const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve('./src/index.js'),
  output: {
    path: path.resolve('./public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'stage-0']
        }
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  mode: 'development'
}