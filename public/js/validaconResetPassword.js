export default function validacionResetPassword(){
    const email = document.getElementById("email");
    const formularioBtn = document.getElementById("btn");


    formularioBtn.addEventListener("click", (event) => {
        let errores = [];

        // Validar email
        if (!email.value.trim()) {
            errores.push('El campo "Correo" es obligatorio.');
        } else if (!/\S+@\S+\.\S+/.test(email.value)) {
            errores.push("El correo no es válido.");
        }

        // Mostrar errores si existen
        if (errores.length > 0) {
            event.preventDefault(); // Previene el envío solo si hay errores
            alert(errores.join("\n"));
        }
    });


}