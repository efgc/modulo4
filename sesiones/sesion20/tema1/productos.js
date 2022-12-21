//importar de manera selectiva
//usando destructuracion
const { calcularPrecioFinal, calcularIVA } = require("./logicaProductos.js");

console.log(calcularPrecioFinal(100));
console.log(calcularIVA(100));

let estudiante = {nombre: 'Raul', edad: 40, curso: 'Desarrollador Web'};

//usando destructuracion
let {nombre, edad, curso, apellido = 'Solorzano'} = estudiante;

console.log(nombre);
console.log(edad);
console.log(curso);
console.log(apellido);




