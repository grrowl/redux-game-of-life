const path = require('path')
const express = require('express')
const http = require('http')
const webpack = require('webpack')
const config = require('./webpack.config.dev')

const dispatcher = require('redux-scuttlebutt/lib/server').default

const app = express()
const server = http.Server(app)
const compiler = webpack(config)

const PORT = process.env['PORT'] || 3000

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

dispatcher(server)

server.listen(PORT, 'localhost', (err) => {
  if (err) {
    return console.log(err)
  }

  console.log(`Listening at http://localhost:${PORT}`)
})
