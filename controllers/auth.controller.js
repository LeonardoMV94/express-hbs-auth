const express = require("express");
const model = require("../models/usuario.model");

const router = express.Router();

// get http://localhost:port/auth/login
router.get("/login", (req, res) => {
  res.render("auth/login", {
    layout: "base",
    estilo: "/css/login.css",
  });
});

// <form action="/auth/login" method="post">
// post http://localhost:port/auth/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  // proceso de inicio de sesion

  // localhost:port/
  res.render("home", {
    layout: "base",
  });
});

// get http://localhost:port/auth/register
router.get("/register", (req, res) => {
  res.render("auth/registro", {
    layout: "base",
    estilo: "/css/registro.css",
    titulo: "Registro",
  });
});

// <form action="/auth/register" method="post">
// post http://localhost:port/auth/register
router.post("/register", async (req, res) => {
  const { nombre, apellido, email, password } = req.body;


  try {
    const user = await model.Usuario.create({ nombre, apellido, email, password })
    console.log(user);
    
    res.render("auth/confirmar-cuenta", {
      layout: "base",
      estilo: "/css/confirmar.css",
      titulo: "Confirmar Cuenta",
    });
  } catch (error) {
    console.log(error);
  }
});

// get http://localhost:port/auth/reset-password
router.get("/reset-password", (req, res) => {
  res.render("auth/reset-password", {
    layout: "base",
    estilo: "/css/reset-password.css",
    titulo: "email",
  });
});

// post http://localhost:port/auth/reset-password
router.post("/reset-password", (req, res) => {
  const { password, confirmarPassword } = req.body;
  //Aqui deberia partir la parte de codigo que corresponde a Esteban, el password y confirmar password ya estan en las variables password y confirmarPassword
  res.send(`Contraseña cambiada exitosamente`);
});

// get http://localhost:port/auth/olvide-password
router.get("/olvide-password", (req, res) => {
  res.render("auth/olvide-password", {
    layout: "base",
    estilo: "/css/olvide-pass.css",
    titulo: "Recuperar Contraseña",
  });
});

// post http://localhost:port/auth/olvide-password
router.post("/olvide-password", (req, res) => {
  const { email } = req.body;
  //Aqui deberia partir la parte de codigo que corresponde a Esteban, el email del usuario ya esta en la variable email
  res.send(`Proceso de reinicio de contraseña para: ${email}`);
});

// get http://localhost:port/auth/confirmar-cuenta
router.get("/confirmar-cuenta", (req, res) => {
  res.render("auth/confirmar-cuenta", {
    layout: "base",
    titulo: "confirmar cuenta",
  });
});

// post http://localhost:port/auth/confirmar-cuenta
router.post("/confirmar-cuenta", (req, res) => {
  const { codigo } = req.body;
  console.log("codigo de formulario: ", codigo);
  res.render("home", {
    layout: "base",
    titulo: "Inicio",
  });
});

module.exports = router;
