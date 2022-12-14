
//metodo map
//crea un nuevo arreglo
//a partir de aplicar la funcion callback a cada
//elemento del arreglo original

let edades = [50, 20, 25, 30, 18, 22];

let nuevasEdades = edades.map(
    function (valor) { return valor += 1 }
);

console.log(edades);
console.log(nuevasEdades);

///////////////////////
let productos = [{ nombre: "Arroz Blanco", precio: 16 },
{ nombre: "Arroz Integral", precio: 20 },
{ nombre: "Frijol Colorado", precio: 18 }];

//map que aplicara un 5% de descuento a los productos
//que tengan un precio mayor a 17
let nuevosProductos = productos.map(actualizarPrecios);

//prod recibira cada uno de los objetos del arreglo
//map envia el valor a prod de manera automatica
function actualizarPrecios(prod){
    if(prod.precio > 17){
        //prod.precio = prod.precio * 0.95
        prod.precio *= 0.95;
    }
    return prod;
}

console.log(nuevosProductos);


//con funciones de flecha
let productos = [{ nombre: "Arroz Blanco", precio: 16 },
{ nombre: "Arroz Integral", precio: 20 },
{ nombre: "Frijol Colorado", precio: 18 }];
//map que aplicara un 5% de descuento a los productos
//que tengan un precio mayor a 17

let actualizados = productos.map(
    (producto) =>{
        if(producto.precio > 17){
            producto.precio *= 0.95;
        }
        return producto;
    });

