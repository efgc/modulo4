//Funciones y parametros

function saludar(nombre){
    console.log("Bienvenido, " + nombre);
}

saludar("Raul");

//function mostrarNotas(nota1, nota2, nota3, nota4, notaN);

function mostrarNotas(listaNotas){
    for(let nota of listaNotas){
        console.log(nota);
    }
}

function sumar(numero1, numero2){
    return numero1 + numero2;
}

sumar(20, 10);

//funcion que valida que los parametros sean del tipo numerico
function sumarValidando(numero1, numero2){
    if( !(typeof numero1 == "number" && typeof numero2 == "number")){
        console.log("Valores incorrectos");
        return;
    }
    return numero1 + numero2;
}

sumarValidando(10, 20);
sumarValidando();

function saludar(nombre){ //nombre es un parametro
    console.log(nombre);
}

saludar("Raul"); //enviamos un argumento
