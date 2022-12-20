
let arreglo = [
    {
        nombre: "Andrea Guzman",
        edad: 25,
        clases: ["Matematicas", "Ingles", "Programacion"]
    },
    {
        nombre: "Angel Ruiz",
        edad: 22,
        clases: ["Base de datos", "Programacion"]
    },
    {
        nombre: "Felipe Cifuentes",
        edad: 28,
        clases: ["Diseño grafico", "Artes visuales"]
    },
];

//mostrando el contenido del arreglo

for (let estudiante of arreglo) {
    let contenido = `nombre: ${estudiante.nombre}\nedad: ${estudiante.edad}\nclases:`;
    /*
    for(let i = 0; i < estudiante.clases.length; i++){
        contenido += `\n\tclase ${i+1}: ${estudiante.clases[i]}`;
    }
    */
    let numero = 1;
    for (let clase of estudiante.clases) {
        contenido += `\n\tclase ${numero}: ${clase}`
        numero++;
    }

    console.log(contenido);
}