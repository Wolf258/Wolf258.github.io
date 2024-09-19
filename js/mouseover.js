// Esperar a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    let pStatus = document.querySelector(".p-index-fix1");

    // Si no se encuentra p-index-fix1, buscar p-status
    if (!pStatus) {
        pStatus = document.querySelector(".p-index");
    }

    // Verificar si se encontró algún elemento
    if (pStatus) {
        // Cambiar el color y el estilo de fuente al pasar el mouse
        pStatus.addEventListener("mouseover", function() {
            pStatus.style.color = "red"; // Cambia a cualquier color que desees
            pStatus.style.fontStyle = "italic"; // Aplica el estilo en cursiva
            pStatus.style.fontFamily = "Protest Guerrilla"; // Cambia a la fuente deseada
        });

        // Restablecer el color y el estilo de fuente al salir el mouse
        pStatus.addEventListener("mouseout", function() {
            pStatus.style.color = ""; // Vuelve al color original
            pStatus.style.fontStyle = ""; // Vuelve al estilo original
            pStatus.style.fontFamily = ""; // Vuelve a la fuente original
        });
    }
});
