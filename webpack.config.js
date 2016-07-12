module.exports = {
  entry: "./main.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/i, 
        loader: 'babel',
        exclude: /(node_modules|bower_components|dist)/,
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  }
}