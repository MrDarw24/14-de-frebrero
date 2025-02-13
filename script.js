// Respuesta cuando se hace clic en "Sí"
document.getElementById("si").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("respuesta").textContent = "¡Qué emocionante! ¡Nos vemos el 14 de febrero!";
    document.getElementById("respuesta").style.color = "green";
});

// Respuesta cuando se hace clic en "No"
document.getElementById("no").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("respuesta").textContent = "Estas segura que no quieres aceptar??";
    document.getElementById("respuesta").style.color = "green";

    moveButtonToRandomPosition();
});

// Función para mover el botón "No" a una posición aleatoria en la pantalla
function moveButtonToRandomPosition() {
    var botonNo = document.getElementById("no");

    var maxWidth = window.innerWidth;
    var maxHeight = window.innerHeight;

    var randomX = Math.floor(Math.random() * (maxWidth - botonNo.offsetWidth));
    var randomY = Math.floor(Math.random() * (maxHeight - botonNo.offsetHeight));

    // Mover el botón a la posición aleatoria
    botonNo.style.position = "absolute";
    botonNo.style.left = randomX + "px";
    botonNo.style.top = randomY + "px";
}