// Confirmación del formulario
document.getElementById("formContacto")?.addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("confirmacion").style.display = "block";
});

// Mostrar/ocultar texto adicional en inicio
function mostrarTexto() {
  const texto = document.getElementById("extraTexto");
  texto.style.display = texto.style.display === "none" ? "block" : "none";
}

// Mostrar información en servicios
function toggleInfo(id) {
  const info = document.getElementById("info-" + id);
  info.style.display = info.style.display === "none" ? "block" : "none";
}
