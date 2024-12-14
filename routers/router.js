const express = require('express')
const accountController = require('../controllers/accounts.controller')
const transferController = require('../controllers/transfer.controller')
const userController = require('../controllers/users.controller')
const authController = require('../controllers/auth.controller')
const homeController = require('../controllers/auth.controller')

const routes = (app) => {
  const router = express.Router()

  // rutas hbs
  
  router.get('/', homeController)
  // localhost:port/auth/login
  router.use('/auth', authController)

  // rutas api
  router.use('/api', router)
  app.use(router)
  
  // localhost:port/api/
  router.use('/accounts', accountController)
  router.use('/transfers', transferController)
  router.use('/users', userController)
}

module.exports = routes
