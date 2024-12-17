export default function validacionRegistro() {
  const name = document.getElementById("name");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const formularioBtn = document.getElementById("formularioBtn");

  formularioBtn.addEventListener("click", (event) => {
    let errores = [];

    // Validar nombre
    if (!name.value.trim()) {
      errores.push('El campo "Nombre" es obligatorio.');
    }

    // Validar apellido
    if (!lastname.value.trim()) {
      errores.push('El campo "Apellido" es obligatorio.');
    }

    // Validar email
    if (!email.value.trim()) {
      errores.push('El campo "Correo" es obligatorio.');
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
      errores.push("El correo no es válido.");
    }

    // Validar contraseña
    if (!password.value.trim()) {
      errores.push('El campo "Contraseña" es obligatorio.');
    } else if (password.value.length < 8) {
      errores.push("La contraseña debe tener al menos 8 caracteres.");
    }

    // Mostrar errores si existen
    if (errores.length > 0) {
      event.preventDefault(); // Previene el envío solo si hay errores
      alert(errores.join("\n"));
    }
  });
}
