const express = require('express')
const path = require("node:path");
const cors = require("cors");
const session = require('express-session')
const flash = require('connect-flash')
const variablesEntorno = require('../config')

const configuracionExpress = (app) => {
    // configuracion de express para parsear respuestas | JSON.stringlify automatico en  res.json
    app.use(express.json());

    // parseo de FormData a objetos de javascript
    app.use(express.urlencoded({ extended: true }));

    // habilitar la conexion desde otras ips
    app.use(cors());

    // sesiones
    app.use(session({
        secret: variablesEntorno.sessionSecret,
        resave: false,
        saveUninitialized: false
    }))

    // flash | utiliza las coockies para almacenar mensajes flash
    app.use(flash())

    // se agregan variables globales de hbs para obtener y responder los mensajes flash
    app.use((req, res, next)=> {
        res.locals.success_msg = req.flash('success_msg')
        res.locals.error_msg = req.flash('error_msg')
        res.locals.errors = req.flash('errors')
        next()
    })
    
    // configuracion para servir archivos estaticas de la carpeta public
    app.use(express.static(path.join(__dirname, "..", "public")));
}

module.exports = configuracionExpress