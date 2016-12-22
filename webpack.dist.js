var webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: "./dist",
    publicPath: "/dist/",
    filename: "vue-bs-toast.js",
    library: ["vueBsToast"],
    libraryTarget: "umd"
  },
  resolve: {
    extensions: ['', '.js', '.vue']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
}

// if (process.env.NODE_ENV === 'production') {
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.optimize.OccurenceOrderPlugin()
//   ])
// }
if (process.env.NODE_ENV === 'production') {
  module.exports.output.filename = "vue-bs-toast.min.js",
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    })
  ];
} else {
  module.exports.devtool = '#source-map'
}
