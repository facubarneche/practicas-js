//indicar las 20 llaves posibles con sus imagenes y que puedan seleccionar que llave usar.
//Una vez seleccionada enviar los datos al servidor y que otro programador se encargue xD.

class Keys {
    constructor(image, title, model) {
        this.image = image;
        this.title = title;
        this.model = model;
        this.price = this.createPrice();
    }

    showInfo() {
        return `
        ${this.image}
        <h2>${this.title}</h2>
        ${this.model}
        <h3>${this.price}</h3>`
    }
    createPrice() {
        return `$${Math.floor(Math.random() * 100 + 20)}`;
    }
    
}

const key1 = new Keys('<img class = "keys" src ="images/key1.png">', 'Key 1', 'Model: 1100');
const key2 = new Keys('<img class = "keys" src ="images/key1.png">', 'Key 2', 'Model: 1101');
const key3 = new Keys('<img class = "keys" src ="images/key1.png">', 'Key 3', 'Model: 1102');
const key4 = new Keys('<img class = "keys" src ="images/key1.png">', 'Key 4', 'Model: 1103');
const key5 = new Keys('<img class = "keys" src ="images/key2.png">', 'Key 5', 'Model: 1200');
const key6 = new Keys('<img class = "keys" src ="images/key2.png">', 'Key 6', 'Model: 1201');
const key7 = new Keys('<img class = "keys" src ="images/key2.png">', 'Key 7', 'Model: 1202');
const key8 = new Keys('<img class = "keys" src ="images/key2.png">', 'Key 8', 'Model: 1203');
const key9 = new Keys('<img class = "keys" src ="images/key2.png">', 'Key 9', 'Model: 1204');
const key10 = new Keys('<img class = "keys" src ="images/key3.png">', 'Key 10', 'Model: 1300');
const key11 = new Keys('<img class = "keys" src ="images/key3.png">', 'Key 11', 'Model: 1301');
const key12 = new Keys('<img class = "keys" src ="images/key3.png">', 'Key 12', 'Model: 1302');
const key13 = new Keys('<img class = "keys" src ="images/key3.png">', 'Key 13', 'Model: 1304');
const key14 = new Keys('<img class = "keys" src ="images/key4.png">', 'Key 14', 'Model: 1400');
const key15 = new Keys('<img class = "keys" src ="images/key4.png">', 'Key 15', 'Model: 1401');
const key16 = new Keys('<img class = "keys" src ="images/key4.png">', 'Key 16', 'Model: 1402');
const key17 = new Keys('<img class = "keys" src ="images/key4.png">', 'Key 17', 'Model: 1403');
const key18 = new Keys('<img class = "keys" src ="images/key5.png">', 'Key 18', 'Model: 1500');
const key19 = new Keys('<img class = "keys" src ="images/key5.png">', 'Key 19', 'Model: 1501');
const key20 = new Keys('<img class = "keys" src ="images/key5.png">', 'Key 20', 'Model: 1502');


let allKeys = [];
allKeys.push(key1, key2, key3, key4, key5, key6, key7, key8, key9, key10, key11, key12, key13, key14, key15, key16, key17, key18, key19, key20);
let conteiner = document.getElementById('conteiner');

//crea un div por elemento, le agrego el metodo y se le agrega al contenedor
const addConteiner = () => {
    let li = document.createElement("li");
    li.innerHTML = allKeys[i].showInfo();
    li.classList.add('flex')
    ol.appendChild(li)
}

//se crea un div por objeto
for (i = 0; i < allKeys.length; i++) {
    addConteiner()
}


conteiner.appendChild(ol) //le agrego la lista ordenada al div padre

