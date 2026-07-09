///Conectar Scripts.js en Index.html.
///Capturar submit con preventDefault.
///Leer valores del formulario.
///Crear un elemento por mascota y agregarlo al DOM.
///Añadir botón Editar y Eliminar por cada mascota.
///Implementar edición cargando valores al formulario.




form.addEventListener("submit", (e) => {
e.preventDefault();
});





const form = document.querySelector("form");
if (!form) {
console.error("No se encontró el formulario");
return;
}