/*
Crear una clase que represente los datos de un participante de un juego. Definir las propiedades
 nombre
 puntos
y las funciones:
imprimir (mostrar el nombre de jugador y los puntos actuales)
aumentarpuntos (permite incrementar la cantidad de puntos actuales del jugador)
verificarsigano (mostrar un mensaje si los puntos superan a 1000)
*/


class Jugadores {
    constructor(nombres, puntos) {
        this.nombre = nombres;
        this.puntos = puntos;
    }
    imprimir() {
        return document.write(`${this.nombre} tiene un total de ${this.puntos} puntos. <br>`);
    };
 
    verificarGano() {
        if (this.puntos > 1000) {
            return document.write(`Felicidades ${this.nombre} ganaste!!!! con un total de ${this.puntos} puntos.<br>`);
        }
    }
    funciones(sumarPts){
        this.imprimir();
        this.puntos += sumarPts;
        this.verificarGano();
    }
};

const jugador1 = new Jugadores('Facundo', 0);
const jugador2 = new Jugadores('Lourdes', 0);
const jugador3 = new Jugadores('El beto alonso', 0);
const jugador4 = new Jugadores('Pekerman', 0);



jugador1.funciones(300);
jugador2.funciones(500);
jugador3.funciones(10);
jugador4.funciones(75);
document.write("------------------------------------------ <br>");
jugador1.funciones(200);
jugador2.funciones(50);
jugador3.funciones(190);
jugador4.funciones(375);
document.write("------------------------------------------ <br>");
jugador1.funciones(300);
jugador2.funciones(500);
jugador3.funciones(10);
jugador4.funciones(75);





