function mostrarDetalle(producto) {
    let imagen = document.getElementById("detalleImagen");
    let descripcion = document.getElementById("detalleDescripcion");

    // Asignar imagen y descripción según el producto
    
    if (producto === "electro1") {
        imagen.src = "assets/img/electro1.jpg";
        descripcion.textContent = "Refrigeradora moderna con sistema inverter.";
    } else if (producto === "electro2") {
        imagen.src = "assets/img/electro2.jpg";
        descripcion.textContent = "Lavadora de alta eficiencia con carga frontal.";
    } else if (producto === "electro3") {
        imagen.src = "assets/img/electro3.jpg";
        descripcion.textContent = "Microondas digital con funciones avanzadas.";
    }

    // Mostrar el cuadro de detalle
    document.getElementById("detalle").classList.remove("oculto");
}

function cerrarDetalle() {
    document.getElementById("detalle").classList.add("oculto");
}