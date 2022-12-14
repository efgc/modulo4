
//funciones como miembros de primera clase
//funciones ciudadanos de primera clase

//EN JS las funciones pueden:
//almacenarse como variables
//enviarse como argumentos
//Pueden ser un valor de retorno

let miFuncion = function saludar() { console.log("saludos") };

////////////////////////////

function operar(numeroA, numeroB, operacion) {
    operacion(numeroA, numeroB);
}
function sumar(a, b) {
    console.log(a + b);
}

function restar(a, b) {
    console.log(a - b);
}

operar(10, 5, sumar);
operar(10, 5, restar);


// con funciones asignadas a un identificador
function calcularIVA(valor) {
    console.log("calculando IVA " + valor);
}

function calcularISR(valor) {
    console.log("calculando ISR " + valor);
}

let criterio = 'iva';
let impuesto;
if (criterio == 'iva') {
    impuesto = calcularIVA();
} else {
    impuesto = calcularISR();
}

let criterio2 = 0.12;
let argumento;
if (criterio2 > 0.11) {
    argumento = 'primera opcion';
} else {
    argumento = 'segunda opcion';
}

impuesto(argumento);

/////////////////
//Almacenando las funciones en una variable, nos permite ahorrarnos implementaciones complejas
function calcularIVA(valor) {
    console.log("calculando IVA " + valor);
}

function calcularISR(valor) {
    console.log("calculando ISR " + valor);
}

let criterio = 'iva';
let criterio2 = 0.12;
if (criterio == 'iva') {
    if (criterio2 > 0.11) {
        calcularIVA('primera opcion');
    } else {
        calcularIVA('segunda opcion');
    }
} else {
    if (criterio2 > 0.11) {
        calcularISR('primera opcion');
    } else {
        calcularISR('segunda opcion');
    }
}

///////////////////////
//Debemos estar seguros si guardaremos el resultado de la funcion
//o bien la funcion como tal
function devolverNumero() {
    return 3.14;
}

//a guarda el resultado
let a = devolverNumero();
//b guarda la funcion
let b = devolverNumero;

///////////////
let miSuma = function sumar(a, b) {
    return a + b;
}
console.log(miSuma(10, 20));
console.log(sumar(10, 20));
///////////
//funciones anonimas
let miSuma = function (a, b) {
    return a + b;
}

miSuma(10, 20);

///////////

function preguntar(pregunta, si, no) {
    if (confirm(pregunta)) {
        si();
    } else {
        no();
    }
}

preguntar("¿Estas de acuerdo con las reglas del sitio?",
    function () { alert("Aceptaste la pregunta"); },
    function () { alert("NO has aceptado la pregunta"); });



/////////////////////////////

let numeros = [1, 2, 3, 4, 50, 47, 100];

function esPar(numero) {
    return numero % 2 == 0;
}

function esImpar(numero) {
    return numero % 2 != 0;
}

//funcion para filtrar
function filtrar(numeros, funcion) {
    // arreglo con numeros pares o impares
    let resultados = [];
    for (let numero of numeros) {
        if (funcion(numero)) {
            resultados.push(numero);
        }
    }
    return resultados;
}

console.log(filtrar(numeros, esPar));
console.log(filtrar(numeros, esImpar));

////////////////////
let numeros = [1, 2, 3, 5, 8, 7, 99, 75];
function filtrarForma2(numeros, callback) {
    let resultados = [];
    for (let elemento of numeros) {
        if (callback(elemento)) {
            resultados.push(elemento);
        }
    }
    return resultados;
}

let impares = filtrarForma2(numeros,
    function (numero) { return numero % 2 != 0 });

let pares = filtrarForma2(numeros,
    function (numero) { return numero % 2 == 0 });

console.log(pares);
console.log(impares);

///ejemplo anterior sin callbacks
let numeros = [1, 2, 3, 5, 8, 7, 99, 75];
function filtrarSinCallback(numeros) {
    let resultados = [];
    for (let elemento of numeros) {
        if(verificarNumero(elemento)){
            resultados.push(elemento);
        }
    }
    return resultados;
}

function verificarNumero(numero){
    //si es par, devuelve verdadero
    //caso contrario falso
    if(numero % 2 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(filtrarSinCallback(numeros));









