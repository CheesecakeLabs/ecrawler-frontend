// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack')
// eslint-disable-next-line import/no-extraneous-dependencies
const autoprefixer = require('autoprefixer')
// eslint-disable-next-line import/no-extraneous-dependencies
const postCSSImport = require('postcss-import')
// eslint-disable-next-line import/no-extraneous-dependencies
const postCSSNested = require('postcss-nested')
// eslint-disable-next-line import/no-extraneous-dependencies
const postCssCssVariables = require('postcss-css-variables')()

const postCSSAutoprefixer = autoprefixer({ browsers: ['IE 9', 'iOS 7'] })

const postCssImport = postCSSImport({
  addDependencyTo: webpack,
})

module.exports = {
  plugins: [
    postCssImport,
    postCSSAutoprefixer,
    postCSSNested,
    postCssCssVariables,
  ],
}
