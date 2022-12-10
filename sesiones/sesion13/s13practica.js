
//definimos funcion
function ejercicio(arreglo){
    //validamos que sea un arreglo
    if(!(arreglo instanceof Array)){
        console.log("No es un arreglo");
        return;
    }
    //validar que tenga 3 elementos exactamente
    if(arreglo.length != 3){
        console.log("Solamente funciona para 3 elementos");
        return;
    }
    //validar que los elementos sean numericos
    //variable que sirve como indicador de que algun valor no es numerico
    let sonNumericos = true;
    //recorremos el arreglo
    for(let numero of arreglo){
        //verificamos el tipo de cada elemento
        if(typeof numero != 'number'){
            sonNumericos = false;
        }
    }
    //si es falso, algun elemento no es numerico
    if(!sonNumericos){
        console.log("Los valores deben de ser numericos");
        return;
    }

    //sumamos dos unidades a cada elemento
    let nuevoArreglo = [];
    //agregamos los valores modificados al nuevo arreglo
    for(let numero of arreglo){
        nuevoArreglo.push(numero + 2);
    }

    //devolvemos el nuevo arreglo
    return nuevoArreglo;
}

console.log(ejercicio(10));
console.log(ejercicio([10,20]));
console.log(ejercicio([10,"20",30]));
console.log(ejercicio([10,20,30]));
