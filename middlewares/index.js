const path = require("node:path");
const express = require("express");
const cors = require("cors");
const { loggerRequest } = require("./logger.mid");
const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("../lib/swagger.config");
const hbs = require("../lib/hbs");

const middlewares = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  // public
  app.use(express.static(path.join(__dirname, "..", "public")));
  // logger
  app.use(loggerRequest);
  // documentacion
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
  // handlebars
  app.engine("hbs", hbs.engine);
  app.set("view engine", "hbs");
};

module.exports = middlewares;
