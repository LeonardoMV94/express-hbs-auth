const express = require('express')
const routes = require('./routers/router')
const middlewaresGlobales = require('./middlewares/index')
const configuracionExpress = require('./lib/config.express')
const variablesEntorno = require('./config')

const app = express()
const port = variablesEntorno.port

configuracionExpress(app)
middlewaresGlobales(app)
routes(app)

app.listen(port, () => {
  console.log(`Server in http://localhost:${port}/`)
  console.log(`Documentation in http://localhost:${port}/docs`)
})
