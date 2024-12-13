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
        layout: 'base'
    })
})

router.post('/register', (req, res) => {

})



module.exports = router
