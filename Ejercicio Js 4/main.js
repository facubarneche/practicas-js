/*
Confeccionar un programa que defina dos array, en uno almacenar los días de la semana y en otro los nombres de los meses. Emplear dos sintaxis diferentes para crear e inicializar sus componentes.
*/

const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
const meses = new Array(11);
meses[0] = 'Enero';
meses[1] = 'Febrero';
meses[2] = 'Marzo';
meses[3] = 'Abril';
meses[4] = 'Mayo';
meses[5] = 'Junio';
meses[6] = 'Julio';
meses[7] = 'Agosto';
meses[8] = 'Septiembre';
meses[9] = 'Octubre';
meses[10] = 'Noviembre';
meses[11] = 'Diciembre';

document.write(`Yo naci un ${dias[4]} de ${meses[11]}`);