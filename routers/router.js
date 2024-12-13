const express = require('express')
const accountController = require('../controllers/accounts.controller')
const transferController = require('../controllers/transfer.controller')
const userController = require('../controllers/users.controller')
const authController = require('../controllers/auth.controller')

const routes = (app) => {
  const router = express.Router()

  // rutas hbs
  // localhost:port/auth/login
  router.use('/auth', authController)

  router.use('/api', router)
  app.use(router)

  // rutas api
  router.use('/accounts', accountController)
  router.use('/transfers', transferController)
  router.use('/users', userController)
}

module.exports = routes
