const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const postCSSConfig = require('./postcss.config')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        BROWSER: true,
        BACKEND_DOMAIN: JSON.stringify(process.env.BACKEND_DOMAIN),
        DRY_RUN: JSON.stringify(process.env.DRY_RUN),
      },
    }),
    new ExtractTextPlugin('[name].css'),
  ],
  resolve: {
    extensions: ['', '.js'],
  },
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
      loader: ExtractTextPlugin.extract(
        'style-loader',
        'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap!postcss-loader' // eslint-disable-line max-len
      ),
    }, {
      test: /\.(jpe?g|png)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug',
      ],
      options: {
        interlaced: false,
        optimizationLevel: 7,
      },
    }],
  },
  postcss: () => postCSSConfig,
}
