

//agregar evento al div
//querySelector devolvera el primer elemento que haga
//match con el selector que enviamos como argumento
let miDiv = document.querySelector('#pruebaEventos');
console.log(miDiv);

//cuando el usuario de clic al div
function cambiarColor() {
    miDiv.style.backgroundColor = "blue";
}

function cambiarColorLetra() {
    miDiv.style.color = "red";
}

//agregamos el evento
miDiv.addEventListener("click", cambiarColor);

//agregamos un segundo monitor
miDiv.addEventListener("mouseenter", cambiarColorLetra);

//agregamos tercer listener
miDiv.addEventListener("mouseleave",
    function () { miDiv.style.fontSize = "50px"; });

miDiv.addEventListener("dblclick",
    function () {
        miDiv.innerHTML = "Doble clic!!!";
        miDiv.style.border = "3px solid chocolate";
        alert("Saludos desde JS");
        //redireccionar
        window.location.href = "https://www.google.com";
    });

//trabajando con el boton
let miBoton = document.querySelector("#miBoton");
miBoton.addEventListener("click",
    function () {
        window.location.replace("http://www.wikipedia.org");
    });

//al boton 2 agregamos evento que permita abrir google en una
//nueva pestaña
let miBoton2 = document.querySelector("#miBoton2");
miBoton2.addEventListener("click",
    function () { window.open("https://www.google.com") });




