export default function validacionConfirmar() {
  const codigo = document.getElementById("codigo-confirmacion");
  const botonid = document.getElementById("botonid");

  botonid.addEventListener("click", (event) => {
    let errores = [];

    if (!codigo.value.trim()) {
      errores.push('El campo "Nombre" es obligatorio.');
    }

    // Validar apellido
    if (!botonid.value.trim()) {
      errores.push('El campo "Es obligatorio" .');
    }
    // Mostrar errores si existen
    if (errores.length > 0) {
      event.preventDefault(); // Previene el envío solo si hay errores
      alert(errores.join("\n"));
    }
  });
}
