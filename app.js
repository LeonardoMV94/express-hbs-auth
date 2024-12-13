const express = require('express')
const routes = require('./routers/router')
const middlewares = require('./middlewares/index')
const config = require('./config')

const bodyParser = require('body-parser');//agregado por jose

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));  //agregado por jose // Para formularios con datos tipo x-www-form-urlencoded

const port = config.port

middlewares(app)
routes(app)

app.listen(port, () => {
  console.log(`Server in http://localhost:${port}`)
  console.log(`Documentation in http://localhost:${port}/docs`)
})
