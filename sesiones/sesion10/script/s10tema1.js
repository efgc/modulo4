let suma = 0;
function calcularSuma() {
    let numero = 0;
    numero = parseInt(document.getElementById("numero").value);
    console.log(numero);
    if (!Number.isNaN(numero)) {
        suma += numero;
    } else {
        console.log("no ingreso un numero");
    }
    //limpiamos la cajita de texto
    document.getElementById("numero").value = "";
    //damos el enfoque a la caja de texto
    document.getElementById("numero").focus();
    if (numero == 0) {
        document.getElementById("resultado").innerHTML = `La suma es: ${suma}`;
        console.log("fin del programa");
    }
}