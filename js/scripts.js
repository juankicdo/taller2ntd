function mostrarDetalle(producto) {
    console.log("JS cargado correctamente");

    let imagen = document.getElementById("detalleImagen");
    let descripcion = document.getElementById("detalleDescripcion");
    let detalle = document.getElementById("detalle");

    // Asignar imagen y descripción con la ruta correcta
    if (producto === "electro1") {
        imagen.src = "assets/img/portafolio/Lavadora.jpg";  
        descripcion.textContent = "Refrigeradora moderna con sistema inverter.";
    } else if (producto === "electro2") {
        imagen.src = "assets/img/licuadora.jpg";  
        descripcion.textContent = "Licuadora potente con múltiples velocidades.";
    } else if (producto === "electro3") {
        imagen.src = "assets/img/microondas.jpg";  
        descripcion.textContent = "Microondas digital con funciones avanzadas.";
    } else if (producto === "electro4") {
        imagen.src = "assets/img/Nevera.jpg";
        descripcion.textContent = "Nevera con gran capacidad y sistema de enfriamiento eficiente.";
    } else if (producto === "electro5") {
        imagen.src = "assets/img/Plancha.jpg";  
        descripcion.textContent = "Plancha a vapor con tecnología antiadherente.";
    } else if (producto === "electro6") {
        imagen.src = "assets/img/Ventilador.jpg";  
        descripcion.textContent = "Ventilador de torre con control remoto.";
    }
<script>
    window.onload = function() {
        alert('Bienvenido a nuestro sitio web. Explora el contenido actualizado.')
    }
</script>
   

}