
const { loggerRequest } = require("./logger.mid");
const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("../lib/swagger.config");
const hbs = require("../lib/hbs");

const middlewaresGlobales = (app) => {  
  
  // registro de peticiones | logger
  app.use(loggerRequest);

  // documentacion | swagger
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

  // template engine | handlebars
  app.engine("hbs", hbs.engine);
  app.set("view engine", "hbs");
};

module.exports = middlewaresGlobales;
