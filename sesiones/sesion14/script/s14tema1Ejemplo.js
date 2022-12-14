

function cambiarColor(){
    let respuesta = prompt("Ingrese 'color' o 'letra'");
    if(respuesta == 'color'){
        cambiarColorFondo();
    }else{
        cambiarColorLetra();
    }
}

function cambiarColorFondo(){
    document.getElementById("contenido").style.backgroundColor = "red";
}

function cambiarColorLetra(){
    document.getElementById("contenido").style.color = "red";
}

function realizarOperacion(){
    let respuesta = prompt("Que operacion realizaras (color, letra)");
    if(respuesta == 'color'){
        operar(cambiarColorFondo);
    }else{
        operar(cambiarColorLetra);
    }
}

function operar(operacion){
    operacion();
}