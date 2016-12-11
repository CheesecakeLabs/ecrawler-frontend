const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const postCSSConfig = require('./postcss.config')

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        BACKEND_DOMAIN: JSON.stringify(process.env.BACKEND_DOMAIN),
        DRY_RUN: JSON.stringify(process.env.DRY_RUN),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false,
      },
    }),
    new ExtractTextPlugin('main.css'),
    new webpack.optimize.DedupePlugin(),
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
      test: /\.json$/,
      loaders: ['json'],
      include: /src/,
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'), // eslint-disable-line
      include: /src/,
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css'),
      include: /node_modules/,
    }, {
      test: /\.svg$/,
      loader: `svg-sprite?${JSON.stringify({
        name: '[name]_[hash]',
        prefixize: true,
      })}`,
    }, {
      test: /\.(jpe?g|png)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
      ],
      include: /src/,
    }],
  },
  postcss: () => postCSSConfig,
}
