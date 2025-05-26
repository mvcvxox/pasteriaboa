document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  let valido = true;

  console.log("Validando formulario...");
  
  // Campos
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const TipoProducto = document.getElementById("tipoProducto");
  const fecha = document.getElementById("fechaEntrega");
  const cantidad = document.getElementById("cantidad");
  const descripcion = document.getElementById("descripcion");
  const terminos = document.getElementById("terminos");

  // Validaciones por campo
  if (nombre.value.trim() === "") {
    marcarInvalido(nombre);
    valido = false;
  } else {
    limpiarInvalido(nombre);
  }

  if (email.value.trim() === "") {
    marcarInvalido(email);
    valido = false;
  } else {
    limpiarInvalido(email);
  }

  if (telefono.value.trim() === "") {
    marcarInvalido(telefono);
    valido = false;
  } else {
    limpiarInvalido(telefono);
  }

  if (!fecha.value || fecha.value <= new Date().toISOString().split("T")[0]) {
    marcarInvalido(fecha);
    valido = false;
  } else {
    limpiarInvalido(fecha);
  }

  if (cantidad.value.trim() === "" || parseInt(cantidad.value) <= 0) {
    marcarInvalido(cantidad);
    valido = false;
  } else {
    limpiarInvalido(cantidad);
  }

  if (descripcion.value.trim().length < 20) {
    marcarInvalido(descripcion);
    valido = false;
  } else {
    limpiarInvalido(descripcion);
  }

  if (!terminos.checked) {
    marcarInvalido(terminos);
    valido = false;
  } else {
    limpiarInvalido(terminos);
  }

  if (valido) {
    alert("Formulario enviado correctamente.");
    this.reset();
    document.querySelectorAll(".is-invalid").forEach(el => el.classList.remove("is-invalid"));
  }
});

// Funciones utilitarias
function marcarInvalido(elemento) {
  elemento.classList.add("is-invalid");
}
function limpiarInvalido(elemento) {
  elemento.classList.remove("is-invalid");
}