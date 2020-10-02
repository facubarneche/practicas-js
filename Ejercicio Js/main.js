//8. Dado un input y un boton, escribir nombres de personas (no controlamos nada de momento) y lo mostramos en una lista desordenada.

function mostrarNombre() {
    let nombres = document.getElementById("inText");
    let parrafo = document.getElementById("parrafo");
console.log(nombres.value)
    for (i = 0; i < 1; i++) {
        parrafo.innerHTML += "<li>" + nombres.value + "</li>";
    }
    
}
