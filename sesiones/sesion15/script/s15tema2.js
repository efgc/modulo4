
//Trabajando con metodos de arreglos
//forEach
//nos permite ejecutar una funcion para cada elemento de un arreglo
let estudiantes = ["Luis", "Alex", "Astrid"];
estudiantes.forEach(miFuncion);

function miFuncion(elemento){
    console.log(elemento);
}

let estudiantes = ["Luis", "Alex", "Astrid"];
estudiantes.forEach(miFuncion);

function miFuncion(elemento, indice){
    console.log(elemento, indice);
}

let productos = [{codigo:1,nombre:'Queso procesado'},
    {codigo:2,nombre:'Atun lata'}];

productos.forEach(agregarPrecio);

function agregarPrecio(objeto){
    //agrega la propiedad si no existe en el objeto
    objeto.precio = 15;
}

//con funciones de flecha

let estudiantes = ["Luis", "Alex", "Astrid"];
estudiantes.forEach(elemento => {console.log(elemento)});

