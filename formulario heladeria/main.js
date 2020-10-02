const form = document.forms['form'];


const info = () => {
    const name = form.name.value;
    const lastName = form.lastName.value;
    const locatio = form.location.value;
    const adress = form.adress.value;
    const height = form.height.value;
    const floor = form.floor.value;
    const email = form.email.value;
    pass = form.pass.value;
    passR = form.passR.value;
    const paragraph = document.getElementById('paragraph');

    if (pass == passR && pass.length != 0 && passR.length != 0 && name.length != 0 && lastName.length != 0 && locatio.length != 0 && adress.length != 0 && height.length != 0 && floor.length != 0 && email.length != 0) {
        return paragraph.innerHTML = `Nombre: ${name}<br>Apellido: ${lastName}<br>Localidad: ${locatio}<br>Dirección: ${adress}<br>Altura: ${height}<br>Dpto/Piso: ${floor}<br>Correo Electrónico: ${email}<br>Contraseña: ${pass}`
         
    }
}


const password = () => {
    let pass = form.pass.value;
    let span1 = document.getElementById('span1');

    pass.length > 0 && pass.length < 7 || pass.length > 15 ? span1.innerHTML = `Contraseña invalida, debe contener de 8 a 14 caracteres inclusive.` : span1.innerHTML = "";
}
const repeatPass = () => {
    let passR = form.passR.value;
    let pass = form.pass.value;
    let span2 = document.getElementById('span2');
    
    passR != pass ? span2.innerHTML = `Las contraseñas no coinciden` : span2.innerHTML = "";
}
document.getElementById('boton').addEventListener("click", info);

document.getElementById('pass').addEventListener("blur", password);
document.getElementById('passR').addEventListener("blur", repeatPass);

let pass = form.pass.value;
let passR = form.pass.value;
let span1 = document.getElementById('span1');

