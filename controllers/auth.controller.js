const express = require('express')
const router = express.Router()

// localhost:port/auth/login get
router.get('/login', (req, res) => {
    res.render('auth/login', {
        layout: 'base',
        estilo: "/css/login.css"
    })
})
// <form action="/auth/login" method="post">
router.post('/login', (req, res) => {
    const {username, email , password} = req.body

    // proceso de inicio de sesion

    // localhost:port/
    res.render('home', {
        layout: 'base'
    })
})

// <form action="/auth/login">
router.get('/register', (req, res) => {

    res.render('auth/registro',{
        layout: 'base',
        estilo: "/css/registro.css",
        titulo: "Registro"
    });
})

router.post('/register', (req, res) => {
    const { nombre, apellido, email, password } = req.body;
    console.log(`Registro recibido: Nombre=${nombre}, Apellido=${apellido}, Email=${email}, Contraseña=${password}`);
    res.render('auth/confirmar-cuenta',{
    layout: 'base',
    estilo: "/css/confirmar.css",
    titulo: "Confirmar Cuenta"
    });
})


router.get('/olvide-password', (req, res) => {
    res.render('auth/olvide-password',{
        layout: 'base',
        estilo: "/css/olvide-pass.css",
        titulo: "Recuperar Contraseña"
    });
})

router.post('/olvide-password', (req, res) => {
    const { email } = req.body;
    //Aqui deberia partir la parte de codigo que corresponde a Esteban, el email del usuario ya esta en la variable email
    res.send(`Proceso de reinicio de contraseña para: ${email}`);
})


module.exports = router
