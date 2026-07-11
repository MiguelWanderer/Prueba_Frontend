let mascotas = [];

function obtenerDatosMascota() {

    let nombre = document.getElementById("nombre").value.trim();
    let especie = document.getElementById("especieAnimal").value.trim();
    let propietario = document.getElementById("nombreDueno").value.trim();
    let edad = Number(document.getElementById("edadAnimal").value);
    return {
        nombre: nombre,
        especie: especie,
        propietario: propietario,
        edad: edad,
        atendido: false,
    };
     if (!nombre || !edadAnimal || !estadoAnimal || !nombreDueno || !especieAnimal) {
        return("Por favor, complete todos los campos del formulario.");
    }
    return "Formulario válido.";
}

function validarFormulario(nombre, edadAnimal, estadoAnimal, nombreDueno, especieAnimal) {


    const nombre = document.getElementById("nombre").value.trim();
    const edadAnimal = document.getElementById("edadAnimal").value.trim();
    const estadoAnimal = document.getElementById("estadoAnimal").value.trim();
    const nombreDueno = document.getElementById("nombreDueno").value.trim();
    const especieAnimal = document.getElementById("especieAnimal").value.trim();

    if (nombre.length < 2 || edadAnimal.length < 2 || estadoAnimal.length < 2 || nombreDueno.length < 2 || especieAnimal.length < 2) {
        return { 
            esValido: false, 
            mensaje: "Error: Asegúrate de que todos los campos tengan al menos 2 caracteres y la edad sea un número positivo." 
        };
    }

    return { esValido: true, mensaje: "Formulario válido." };
}


function mostrarMascota() {
    let lista = document.getElementById("listaMascotas");
    lista.innerHTML = "";

    mascotas.forEach((mascota) => {
        let fila = document.createElement("tr");

        let celdaNombre = document.createElement("td");
        celdaNombre.textContent = mascota.nombre;

        let celdaEspecie = document.createElement("td");
        celdaEspecie.textContent = mascota.especie;

        let celdaPropietario = document.createElement("td");
        celdaPropietario.textContent = mascota.propietario;

        let celdaEdad = document.createElement("td");
        celdaEdad.textContent = mascota.edad;

        let celdaEstado = document.createElement("td");
        celdaEstado.textContent = mascota.atendido ? "Atendido" : "Pendiente";

        let celdaAccion = document.createElement("td");
        let botonAtender = document.createElement("button");
        botonAtender.textContent = "Atender";

        botonAtender.addEventListener("click", function() {
            cambiarEstado(mascota.id);
        });

        celdaAccion.appendChild(botonAtender);

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaEspecie);
        fila.appendChild(celdaPropietario);
        fila.appendChild(celdaEdad);
        fila.appendChild(celdaEstado);
        fila.appendChild(celdaAccion);

        lista.appendChild(fila);
    });
}

function registrarMascota() {
    const nombre = document.getElementById("nombre").value;
    const especie = document.getElementById("especieAnimal").value;
    const propietario = document.getElementById("nombreDueno").value;
    const edad = document.getElementById("edadAnimal").value;

    const resultado = validarFormulario(nombre, edad, estadoAnimal, nombreDueno, especie);
    if (resultado.esValido) {
        const nuevaMascota = {
            id: Date.now(),
            nombre: nombre.trim(),
            especie: especie.trim(),
            propietario: propietario.trim(),
            edad: parseInt(edad),
            atendido: false
        };
        mascotas.push(nuevaMascota);
        mostrarMascota();
        actualizarEstadisticas();
    }
}

function cambiarEstado(id) {
    mascotas.forEach(m => {
        if (m.id === id) m.atendido = true;
    });
    mostrarMascota();
    actualizarEstadisticas();
}

function actualizarEstadisticas() {
    document.getElementById("total").textContent = mascotas.length;
    document.getElementById("pendientes").textContent = mascotas.filter(m => !m.atendido).length;
    document.getElementById("atendidas").textContent = mascotas.filter(m => m.atendido).length;
}
