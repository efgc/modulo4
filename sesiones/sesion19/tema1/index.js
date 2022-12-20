
//importamos el paquete de supervillanos
const moduloVillanos = require('supervillains');

//importamos el paquete de superheroes
const moduloHeroes = require('superheroes');

//visualizando el listado de villanos
let villanos = moduloVillanos.all;
let villanosFiltrados = villanos.filter(filtrarVillanos);
console.log(villanosFiltrados);


//console.log(villanos);

//obteniendo un solo villano
let villano = moduloVillanos.random();

//console.log(villano);
//

//filter, toma un callback (una funcion) que se aplicara
//a cada elemento del arreglo
//filter devuele un arreglo que contiene los elementos 
//del arreglo original que pasen la prueba de la funcion enviada
function filtrarVillanos(nombreVillano){
    return nombreVillano.startsWith('Ar');
}

//resolviendo para superheroes
let listaHeroes = moduloHeroes.all;
listaHeroes.push("Chapulin Colorado");
let heroesFiltrados = listaHeroes.filter(filtarHeroes);
console.log(heroesFiltrados, listaHeroes.length);

//(a) => a.startsWith('Dea')
function filtarHeroes(a){
    return a.startsWith('Ch');
    /*
    if((a == 'Batman') || (a == 'Deadpool')){
        return true;
    } 


    //return a.startsWith('Dea');*/
}