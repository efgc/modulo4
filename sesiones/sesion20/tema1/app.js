//pequeña app que usa las funciones definidas en otro módulo
//importamos el modulo
const saludo = require("./saludos.js");
//importamos el modulo calculadora
const calculadora = require("./calculadora.js");

//Saludar a Belter
console.log(saludo.__saludar("Belter"));

//Mostrar hola mundo
console.log(saludo.mostrarHolaMundo());

//Usando la calculadora
console.log(calculadora.sumar(10, 5));
console.log(calculadora.restar(10, 5));
console.log(calculadora.multiplicar(10, 5));
console.log(calculadora.dividir(10, 5));
console.log(calculadora.PI);