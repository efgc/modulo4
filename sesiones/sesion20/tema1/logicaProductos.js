
const IVA = 0.10;

function calcularIVA(precioProducto){
    return (precioProducto * IVA);
}

function calcularPrecioFinal(precioProducto){
    return precioProducto + calcularIVA(precioProducto);
}

//sintaxis adicional para exportar funcionalidades
module.exports = {
    calcularIVA: calcularIVA,
    calcularPrecioFinal: calcularPrecioFinal
};