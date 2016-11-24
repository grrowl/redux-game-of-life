const path = require('path')
const express = require('express')
const http = require('http')
const webpack = require('webpack')
const config = (
  process.env['NODE_ENV'] === 'development'
  ? require('./webpack.config.dev')
  : require('./webpack.config.prod')
)


const dispatcher = require('redux-scuttlebutt/lib/server').default
const getFilterHistory = require('./src/store/getFilterHistory.es5')

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

dispatcher(server, {
  filterHistory: getFilterHistory()
})

server.listen(PORT, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log(`Listening at http://localhost:${PORT}`)
})
