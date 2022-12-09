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
        //sin for para el arreglo
        if (propiedad == 'notas') {
            console.log(`   <td>${estudiante[propiedad][0]}</td>`);
            console.log(`   <td>${estudiante[propiedad][1]}</td>`);
            console.log(`   <td>${estudiante[propiedad][2]}</td>`);
        }
        else {
            console.log(`   <td>${estudiante[propiedad]}</td>`);
        }

    }
    console.log("</tr>")
}

//contenido_tabulado = contenido_tabulado + "cadena";
for (let estudiante of lista_estudiantes) {
    //
    contenido_tabulado += "\n<tr>"
    for (let propiedad in estudiante) {
        if (propiedad == "notas") {
            //nota toma los valores 0 1 2, que son los indices del arreglo
            for (let nota in estudiante[propiedad]) {
                //estudiante[propiedad] -> estudiante.notas
                //estudiante[propiedad][nota] -> estudiante.notas[0]
                contenido_tabulado += "\n   <td>" + estudiante[propiedad][nota] + "</td>"
            }
        } else {
            contenido_tabulado += "\n   <td>" + estudiante[propiedad] + "</td>"
        }
    }
    contenido_tabulado += "\n</tr>";
}
console.log("**********************");
console.log(contenido_tabulado);

//enviar el contenido_tabulado al cuerpo de la tabla
document.getElementById("contenido-body").innerHTML = contenido_tabulado;



