import validacionRegistro from './validacionRegistro.js'

document.addEventListener('DOMContentLoaded', () => {
   
    if (window.location.pathname === '/auth/register') {
        validacionRegistro();
    }

    

})