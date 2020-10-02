//Crear un boton que al pulsarlo genere una lista de 10 numeros aleatorios en un select vacio. Al pulsar de nuevo, se reseteara la lista.

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function pulsar(){
    let select = document.getElementById("select");

    let opciones;
    for(i=0;i<10;i++){
        opciones += "<option>" + getRandomArbitrary(0,99) + "</option>"
    }
    select.innerHTML = opciones;
}
