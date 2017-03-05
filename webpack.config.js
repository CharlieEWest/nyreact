var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  // code will be compiled
  entry: "./app/App.js",

  // output into this file
  output: {
    filename: "public/bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          // specific transformations
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
        // loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  }
  // plugins: [
  //   new ExtractTextPlugin('public/style.css', {
  //     allChunks: true
  //   })
  // ]

}
