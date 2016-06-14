module.exports = {
  entry: './src/js/index',
  output: {
    filename: 'browser-bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: './node_modules'
      },
    ]
  }
};
