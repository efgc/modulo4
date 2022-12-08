//origen datos
let lista_estudiantes = [
    {
        nombre: 'Luisa Garcia',
        edad: 25,
        notas: [80, 85, 90]
    },
    {
        nombre: 'Eugenia Solorzano',
        edad: 23,
        notas: [90, 80, 75]
    },
    {
        nombre: 'Luis Gomez',
        edad: 22,
        notas: [75, 75, 80]
    }
];

let contenido_tabulado = "";

//referencia de la estructura de filas y celdas
//for agrega filas
for (let estudiante of lista_estudiantes) {
    console.log("<tr>")
    //for agrega celdas
    for (let propiedad in estudiante) {
        console.log(`   <td>${estudiante[propiedad]}</td>`)
    }
    console.log("</tr>")
}

//contenido_tabulado = contenido_tabulado + "cadena";
for (let estudiante of lista_estudiantes) {
    //
    contenido_tabulado += "\n<tr>"
    for (let propiedad in estudiante) {
        contenido_tabulado+= "\n   <td>"+estudiante[propiedad]+"</td>"
    }
    contenido_tabulado +="\n</tr>";
}
console.log("**********************");
console.log(contenido_tabulado);

//enviar el contenido_tabulado al cuerpo de la tabla
document.getElementById("contenido-body").innerHTML = contenido_tabulado;



