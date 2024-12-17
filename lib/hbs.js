const path = require('node:path')
const expbs = require('express-handlebars')

const hbs = expbs.create({
  defaultLayout: 'base', // base.hbs como leyout base
  layoutsDir: path.join(__dirname, '..', '/views/layouts'), // capeta de layout
  partialsDir: path.join(__dirname, '..', '/views/partials'), // carpeta de partials
  extname: '.hbs',
  // helpers
  helpers: {
    isActive: (currentPath, linkPath) => currentPath === linkPath ? 'active' : '' // bootstrap class active segun req.url
  }
})

module.exports = hbs