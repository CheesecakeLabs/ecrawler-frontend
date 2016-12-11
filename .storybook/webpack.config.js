const path = require('path')
const webpack = require('webpack')

const postCSSConfig = require('../postcss.config')

module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      include: /node_modules/,
      loader: 'style!css!postcss',
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'style-loader!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap!postcss-loader',
    }, {
      test: /\.(jpe?g|png)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
      ],
    }],
  },
  postcss: () => postCSSConfig,
}
