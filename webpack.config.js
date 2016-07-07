var config = {
  entry: './js/script.js',
  output: {
    path: './js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query:{
          presets: ['react']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
  ]
  }
}

module.exports = config
