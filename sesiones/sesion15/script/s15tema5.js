//funciones de flecha
//nos permiten definir funciones con una
//notacion corta

//funciones que no toman parametros
let saludar = function () { return "hola" };
let saludarFlecha = () => { return "hola" };
//la funcion tenga solamente una instruccion
// y la instruccion sea un return
let saludarFlecha2 = () => "hola";

//funciones que toman parametro
let sumar = function (numero) {return numero + 10};
let sumarFlecha = (numero) => {return numero + 10};
let sumarFlecha2 = (numero) => numero + 10;
//si mi funcion toma solomante un parametro
//me puedo ahorrar los parentesis
let sumarFlecha3 = numero => numero + 10;

let funcion = (a,b) => a + b;

