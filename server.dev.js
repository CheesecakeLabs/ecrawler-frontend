const path = require('path')
const express = require('express')
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack')
const config = require('./webpack.config')

const port = process.env.PORT || 3000

const app = express()
const compiler = webpack(config)

// eslint-disable-next-line import/no-extraneous-dependencies
app.use(require('webpack-hot-middleware')(compiler))
// eslint-disable-next-line import/no-extraneous-dependencies
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
}))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'))
})

app.listen(port, (err) => {
  if (err) {
    console.error(err)
    return
  }

  console.info('[Development] Node app is running on port', port)
})
