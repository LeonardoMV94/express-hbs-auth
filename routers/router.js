const express = require('express')
const authController = require('../controllers/auth.controller')
const homeController = require('../controllers/auth.controller')

const routes = (app) => {
  const router = express.Router()

  // rutas de handlebars
  router.get('/', homeController)     // localhost:port/
  router.use('/auth', authController) // localhost:port/auth/

  app.use(router) // <- configuracion de rutas en express
}

module.exports = routes
