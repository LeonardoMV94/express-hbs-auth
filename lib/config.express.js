const express = require('express')
const path = require("node:path");
const cors = require("cors");

const configuracionExpress = (app) => {
    // configuracion de express para parsear respuestas | JSON.stringlify automatico en  res.json
    app.use(express.json());

    // parseo de FormData a objetos de javascript
    app.use(express.urlencoded({ extended: true }));

    // habilitar la conexion desde otras ips
    app.use(cors());
    
    // configuracion para servir archivos estaticas de la carpeta public
    app.use(express.static(path.join(__dirname, "..", "public")));
}

module.exports = configuracionExpress