
//importar el modulo
const express = require("express");

//funcion que representa a express, lo asignamos a una variable
const app = express();

//responderemos en la ruta /
app.get("/",function(request, response){
    response.send("Hola mundo desde el servidor");
});

app.get("/contacto", (req, resp) => resp.send("<h1>Contactame en: efgc@github.com</h1>"));


// /acerca-de (pequeña descripcion personal)
// parrafo color de fondo cadeteblue
let cadena = "<p style='background-color:cadetblue'>Erick Guerra, programador FullStack, saludos desde express</p>"
app.get("/acerca-de", (req, resp) => resp.send(cadena));

//arrancamos el servidor en el puerto 
app.listen(3000, () => console.log("Servidor inicialido en el puerto 3000"));