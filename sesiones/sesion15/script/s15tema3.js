//Trabajando con filter
//filter creara un nuevo arreglo que contiene
//los elementos que cumplan con el criterio
//dentro del callback
let precios = [10.50, 50.75, 10, 21.50];

let resultado = precios.filter(
    function (valor) {
        console.log(valor, (valor > 20));
        return valor > 20
    }
);

console.log(resultado);

///con funciones de flecha
let precios = [10.50, 50.75, 10, 21.50];
let nuevosPrecios = precios.filter(valor => valor > 20);

let nuevosPrecios2 = precios.filter(
    valor => { console.log(valor, (valor > 20));
    return valor > 20; });