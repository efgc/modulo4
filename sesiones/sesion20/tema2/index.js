
//importamos express
const express = require('express');

//iniciamos express
const app = express();

//request (peticion), response (respuesta)
app.get('/', (req, res) => {
    res.send("Saludos desde Node.js");
});

app.get('/principal', (req, res) => {
    res.send("<h1>Bienvenido a pagina principal!!</h1>");
});

//respondiendo con archivos
//__dirname contiene la ruta absoluta del archivo actual
app.get('/acerca-de', (req, res) => {
    res.sendFile(__dirname + '/misDatos.html');
});

//ruta para mostrar la calculadora
app.get('/calculadora', (req, res) => {
    res.sendFile(__dirname + "/calculadora.html");
});

//req.query permite acceder a los valores recibidos por medio de get
//los nombres de los parametros se definen en el atributo name del html
app.get('/mostrarResultado', (req, res) => {
    let numero1 = Number(req.query.numero1);
    let numero2 = Number(req.query.numero2);
    res.send(`El resultado es: ${numero1 + numero2}`);
});

// atender peticion get en /mostrarResta
app.get('/mostrarResta', (req, res) => {
    let resultado = Number(req.query.numero1) - Number(req.query.numero2);
    res.send(`El resultado de la <b>resta</b> es: ${resultado}`);
});

//multiplicacion
//division
app.listen(5000, console.log("Escuchando en el puerto 5000"));