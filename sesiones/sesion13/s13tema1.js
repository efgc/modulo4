//Usando return para salir de una funcion
function otorgarAcceso(esMayor){
    if(!esMayor){
        console.log("Debe ser mayor de edad");
        return;
    }
    console.log("Bienvenido, ud es mayor de edad");
}

otorgarAcceso(false);
console.log("----------------");
otorgarAcceso(true);

//Usando return para devolver valores
function devuelveSuma(){
    return 5 + 3;
}
devuelveSuma();

//podemos devolver objetos
function devolverObjeto(){
    let objeto = {nombre: "Erick", apellido: "Guerra"};
    return objeto;
}
console.log(devolverObjeto());

//funcion que captura los datos del usuario

function capturarDatos(){
    let nombre = prompt("Ingrese su nombre");
    let edad = prompt("Ingrese edad"); 
    //devolvemos un arreglo de manera anonima
    return [nombre, edad];
}

//funcion que devuelve objeto
function capturarDatos(){
    let nombre = prompt("Ingrese su nombre");
    let edad = prompt("Ingrese edad"); 
    //devolvemos un objeto de manera anonima
    return {'nombre': nombre, 'edad': edad};
}