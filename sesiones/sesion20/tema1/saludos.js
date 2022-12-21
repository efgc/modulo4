//archivo que contiene distintas funciones para saludar

function saludar(nombre){
    return `Hola, ${nombre}`;
}

function mostrarHolaMundo(){
    return `Hola mundo`;
}


//exportamos la funcion saludar
//module.exports, es un objeto que permite exportar propiedades o funciones hacia otros modulos
//verificamos el contenido de module.exports
//console.log(module.exports);

//agregar una propiedad a module.exports
//nombre propiedad = referencia
module.exports.__saludar = saludar;
module.exports.mostrarHolaMundo = mostrarHolaMundo;

//verificamos el contenido de module.exports
//console.log(module.exports);
//console.log(saludar("Javier"));