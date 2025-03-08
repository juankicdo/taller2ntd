function mostrarDetalle(producto) {
    console.log("JS cargado correctamente");

    let imagen = document.getElementById("detalleImagen");
    let descripcion = document.getElementById("detalleDescripcion");
    let detalle = document.getElementById("detalle");

    // Asignar imagen y descripción según el producto
    if (producto === "electro1") {
        imagen.src = "Lavadora.jpg";
        descripcion.textContent = "Refrigeradora moderna con sistema inverter.";
    } else if (producto === "electro2") {
        imagen.src = "licuadora.jpg";
        descripcion.textContent = "Licuadora potente con múltiples velocidades.";
    } else if (producto === "electro3") {
        imagen.src = "microondas.jpg";
        descripcion.textContent = "Microondas digital con funciones avanzadas.";
    } else if (producto === "electro4") {
        imagen.src = "Nevera.jpg";
        descripcion.textContent = "Nevera con gran capacidad y sistema de enfriamiento eficiente.";
    } else if (producto === "electro5") {
        imagen.src = "Plancha.jpg";
        descripcion.textContent = "Plancha a vapor con tecnología antiadherente.";
    } else if (producto === "electro6") {
        imagen.src = "Ventilador.jpg";
        descripcion.textContent = "Ventilador de torre con control remoto.";
    }

    // Mostrar el cuadro emergente
    detalle.classList.remove("oculto");
}

function cerrarDetalle() {
    document.getElementById("detalle").classList.add("oculto");
}