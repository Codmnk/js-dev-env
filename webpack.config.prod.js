import path from path
import webpack from 'webpack'

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugin: [
    //eliminate duplicate packages when generationg bundle
    newwebpack.optimize.DedugePlugin(),

    // Minify Js
    newwebpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclud: /node_modules/, loaders: ['bable']},
      {test: /\.css$/, loaders: ['style', 'css']}
    ]
  }
}
