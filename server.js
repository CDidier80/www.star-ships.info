const path = require('path')
const express = require('express')
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const bodyParser = require('body-parser')
const { createProxyMiddleware } = require('http-proxy-middleware');
const apiProxy = createProxyMiddleware({
  target: 'https://swapi.dev/api/starships',
  changeOrigin: true, // for vhosted sites, changes host header to match to target's host
  logLevel: 'debug',
});
const PORT = process.env.PORT || 3000
const app = express()

app.use(logger('dev'))
app.use(helmet({ contentSecurityPolicy: false }))
// app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.disable('X-Powered-By') 
app.use(express.static(path.join(__dirname, 'client', 'build'))) 



app.use('/', apiProxy)
app.use('/?page=2', apiProxy)
app.use('/?page=3', apiProxy)
app.use('/?page=4', apiProxy)

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
)

app.listen(PORT, () => {
  if (process.env.NODE_ENV === 'production') {
    console.log(`Server.js listening on port ${PORT}`)
  } 
})

  


