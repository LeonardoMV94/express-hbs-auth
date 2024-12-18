import validacionRegistro from './validacionRegistro.js'
import validacionOlvidePassword from './validacionOlvidePassword.js';

// import validacionLogin from './validacionLogin.js'

document.addEventListener('DOMContentLoaded', () => {
   
    if (window.location.pathname === '/auth/register') {
        validacionRegistro();
    }

    if (window.location.pathname === '/auth/login') {
        // validacionLogin();
    }

    if (window.location.pathname === '/auth/olvide-password'){
        validacionOlvidePassword();
    }
})