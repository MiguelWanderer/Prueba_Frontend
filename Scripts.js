///Conectar Scripts.js en Index.html.
///Capturar submit con preventDefault.
///Leer valores del formulario.
///Crear un elemento por mascota y agregarlo al DOM.
///Añadir botón Editar y Eliminar por cada mascota.
///Implementar edición cargando valores al formulario.



///Formas Logicas Utiles para mas tarde.
///form.addEventListener("submit", (e) => {
///    e.preventDefault();
///});
///const form = document.querySelector("form");
///if (!form) {
///    console.error("No se encontró el formulario");
///    return;
///}
let mascotas = [];

function obtenerDatosMascota(evento) {
    evento.preventDefault();

    let nombre = document.getElementById("nombreAnimal").value.trim();
    let edadAnimal = Number(document.getElementById("edadAnimal").value);
    let estadoAnimal = document.getElementById("estadoAnimal").value;
    let nombreDueno = document.getElementById("nombreDueno").value.trim();
    let especieAnimal = document.getElementById("especieAnimal").value.trim();
    return {
        nombre: nombre,
        edadAnimal: edadAnimal,
        estadoAnimal: estadoAnimal,
        nombreDueno: nombreDueno,
        especieAnimal: especieAnimal,
    };


}

function validarFormulario(nombre, edadAnimal, estadoAnimal, nombreDueno) {
   if (nombre === "" || isNaN(edadAnimal) || estadoAnimal === "" || nombreDueno === "") {
        return "Por favor, complete todos los campos correctamente.";
    }
    return "";
}


