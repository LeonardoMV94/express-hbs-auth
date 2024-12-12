const express = require('express')
const accountController = require('../controllers/accounts.controller')
const transferController = require('../controllers/transfer.controller')
const userController = require('../controllers/users.controller')

const routes = (app) => {
  const router = express.Router()

  // rutas hbs

  router.use('/api', router)
  app.use(router)

  // rutas api
  router.use('/accounts', accountController)
  router.use('/transfers', transferController)
  router.use('/users', userController)
}

module.exports = routes
