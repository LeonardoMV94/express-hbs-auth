
import validacionRegistro from './validacionRegistro.js'
import validacionLogin from './validacionLogin.js';
import validacionRegistro from "./validacionRegistro.js";
import validacionConfirmar from "./validacionConfirmar.js";

document.addEventListener("DOMContentLoaded", () => {
  
  if (window.location.pathname === "/auth/register") {
    validacionRegistro();
  }
  
  if (window.location.pathname === '/auth/login') {
        validacionLogin();
  }

  if (window.location.pathname === "/auth/confirmar-cuenta") {
    validacionConfirmar();
  }
});
