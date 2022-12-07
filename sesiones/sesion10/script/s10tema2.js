
function mostrarTabla(){
    let personas = [
        {'codigo':1, 'apellido':"Ruiz"},
        {'codigo':2, 'apellido':"Gandara"},
        {'codigo':3, 'apellido':"Garcia"},
        {'codigo':4, 'apellido':"Guerra"},
        {'codigo':5, 'apellido':"Mendez"},
        {'codigo':6, 'apellido':"Alegria"},
    ];

    let valores = "";
    for(let i = 0; i < personas.length; i++){
        valores += `<tr>
                        <td>${personas[i].codigo}</td>
                        <td>${personas[i].apellido}</td>
                    </tr>`;
    }
    document.getElementById("contenido").innerHTML = valores;
}