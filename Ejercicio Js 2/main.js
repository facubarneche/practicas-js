/*
Confeccionar una clase persona que permita almacenar el nombre y la edad. Luego definir un vector de 4 componentes de tipo persona. Imprimir el nombre de la persona de mayor edad; decir también si hay más de una persona con la edad mayor.
*/

class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

let vector = [];

vector [0] = new Persona('Facundo', 29);
vector [1] = new Persona('Lourdes',27);
vector [2] = new Persona('La abuela', 73);
vector [3] = new Persona('Nazareno',33);
vector [4] = new Persona('El abuelo',73);

let mayor = 0;
let nombres = "";
let cant = 0;

for(i=1;i<vector.length;i++){
    if(vector[i].edad>mayor){
        mayor=vector[i].edad;
    }else if(vector[i].edad == mayor){
        cant++;
    }
}
for(i=0;i<vector.length;i++){
    if(vector[i].edad==mayor){
        nombres += vector[i].nombre + " | ";
    }
}

document.write(`La persona mas grande es/son: ${nombres} con ${mayor} años y se repite ${cant} veces.`);

