let mascotas = [];

function obtenerDatosMascota() {

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
        EstadoAtencion: "Pendiente",
}
}
function validarFormulario(nombre, edadAnimal, estadoAnimal, nombreDueno, especieAnimal) {
    if (!nombre || !edadAnimal || !estadoAnimal || !nombreDueno || !especieAnimal) {
        return("Por favor, complete todos los campos del formulario.");
    }
    return "Formulario válido.";
}


function mostrarMascota() {
    let lista = document.getElementById("listaMascotas");
    lista.innerHTML = "";

    mascotas.forEach((mascota, index) => {
        let item = document.createElement("li");

        item.textContent = mascota.nombre + 
            " | Edad: " + mascota.edadAnimal + 
            " | Estado: " + mascota.estadoAnimal +
            " | Dueño: " + mascota.nombreDueno +
            " | Especie: " + mascota.especieAnimal + 
            " | Estado de Atención: " + mascota.EstadoAtencion;

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";

        let botonAtender = document.createElement("button");
        botonAtender.textContent = "Atender";

        botonAtender.addEventListener("click", function() {
            atenderMascota(index);
        });

        item.appendChild(botonAtender);
        item.appendChild(botonEliminar);
        lista.appendChild(item);
    });
}

function registrarMascota() {
    const nombre = document.getElementById("nombre").value;
    const especie = document.getElementById("especie").value;
    const propietario = document.getElementById("propietario").value;
    const edad = document.getElementById("edad").value;

    const resultado = validarFormulario(nombre, especie, propietario, edad);
    if (resultado === "Formulario válido.") {
        const nuevaMascota = {
            id: Date.now(),
            nombre: nombre.trim(),
            especie: especie.trim(),
            propietario: propietario.trim(),
            edad: parseInt(edad),
            atendido: false
        };
        mascotas.push(nuevaMascota);
        mostrarMascotas();
        actualizarEstadisticas();
    }
}

function cambiarEstado(id) {
    mascotas.forEach(m => {
        if (m.id === id) m.atendido = true;
    });
    mostrarMascotas();
    actualizarEstadisticas();
}

function actualizarEstadisticas() {
    document.getElementById("total").textContent = mascotas.length;
    document.getElementById("pendientes").textContent = mascotas.filter(m => !m.atendido).length;
    document.getElementById("atendidas").textContent = mascotas.filter(m => m.atendido).length;
}


