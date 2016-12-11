const path = require('path')
const express = require('express')
const port = process.env.PORT || 3000

const app = express()

app.use('/static', express.static('dist'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'))
})

app.listen(port, (err) => {
  if (err) {
    console.error(err)
    return
  }

  console.info('[Production] Node app is running on port', port)
})
