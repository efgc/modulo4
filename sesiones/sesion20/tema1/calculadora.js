
//definos nuestras funciones
const PI = 3.141516;
function sumar(num1, num2){
    return Number(num1) + Number(num2);
}
function restar(num1, num2){
    return Number(num1) - Number(num2);
}
function multiplicar(num1, num2){
    return Number(num1) * Number(num2);
}
function dividir(num1, num2){
    return Number(num1) / Number(num2);
}

//exportamos las funcionalidades
module.exports.sumar = sumar;
module.exports.dividir = dividir;
module.exports.restar = restar;
module.exports.multiplicar = multiplicar;
module.exports.PI = PI;