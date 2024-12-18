
export default function validacionLogin() {
    const correo = document.getElementById ('correo')
    const clave = document.getElementById ('clave')
    const iniciosesionbtn = document.getElementById ('iniciosesionbtn')
    iniciosesionbtn.addEventListener('click', (event) => {        
        let errores = [];
    
        // Validar email
        if (!correo.value.trim()) {
            errores.push('El campo "Correo" es obligatorio.');
        } else if (!/\S+@\S+\.\S+/.test(correo.value)) {
            errores.push('El correo no es válido.');
        }
    
        if (!clave.value.trim()) {
            errores.push('El campo "Contraseña" es obligatorio.');
        } else if (clave.value.length < 8) {
            errores.push('La contraseña debe tener al menos 8 caracteres.');
        }
    
          // Mostrar errores si existen
          if (errores.length > 0) {
            event.preventDefault(); // Previene el envío solo si hay errores
            alert(errores.join('\n'));
        }
        
    })
    
}

