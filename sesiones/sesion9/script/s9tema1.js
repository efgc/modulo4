
//Permite mostrar la tabla del 5
function mostrarTabla() {
    let parrafo = document.getElementById("resultado");
    let tabla = 5;
    let numero = 1
    let texto = "";
    while (numero <= 10) {
        
        texto += `${tabla} x ${numero} = ${tabla * numero} <br>`;
        parrafo.innerHTML = texto + "\n";
        console.log(texto);
        numero++;
        
    }

    /*
    let rutaBase = "imagen"
    let n = 1;
    while(n <= 5){
        console.log(`${rutaBase}${n}`);
        n++;
    }
    */
}

//Funcion que permite mostrar la tabla de multiplicar de cualquier numero
function mostrarCualquierTabla(){
    let tabla = document.getElementById("numero").value;
    console.log(typeof tabla);
    let numero = 1;
    let texto = "";
    while(numero <= 10){
        texto += `${tabla} x ${numero} = ${tabla * numero} <br>`;
        numero++;
    }
    document.getElementById("tablaVariable").innerHTML = texto;
}