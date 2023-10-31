// VARIABLES
// let nombre_usuario = "";
// let tematica = "";
let nombre_medio = "";
let fecha_noticia = "";
let titulo_noticia = "";
let cuerpo_noticia = "";


// ARRAYS

const seccionDeLaNoticia = [
    "Política", "Internacional", "Economia", "Ciencia", "Tecnología", "Cultura", "Medioambiente", "Entretenimiento"
]



// FUNCIONES



const agregarNoticias = () => { 

    let preguntaAgregar = prompt("¿Desea agregar una noticia? ");

    
};




const revisarNoticias = () => { };

const analizarNoticias = () => { };


// OBJETO NOTICIAS DE EJEMPLO


class MediosComunicacion {
    constructor(id, nombreMedio, urlMedio, anioFundacionMedio, fundadoresMedio, logoMedio) {
        this.id = id;
        this.nombreMedio = nombreMedio;
        this.urlMedio = urlMedio; 
        this.anioFundacionMedio = anioFundacionMedio;
        this.fundadoresMedio = fundadoresMedio;
        this.logoMedio = logoMedio;
        this.noticiasAnalizadas
    }

}


let noticiaPrueba1 = "";


// OBJETO NOTICIAS CREADO




// Obtener nombre de usuario OK
let nombreUsuario = document.getElementById("nombre");
let insertarNombre = document.getElementsByClassName("nombre_dinamico");
// nombreUsuario.onchange = () => console.log(nombreUsuario.value);
// console.log(insertarNombre[0].innerText)
// nombreUsuario.onchange = () => {
//     insertarNombre[0].innerText = `${nombreUsuario.value}`;
//     console.log(insertarNombre[0].innerText)
// };

nombreUsuario.addEventListener ('input',() => {
    if (nombreUsuario.value.length < 3 ) {
        insertarNombre[0].innerText = `visitante`;
        console.log(insertarNombre[0].innerText);
    } else {
        insertarNombre[0].innerText = `${nombreUsuario.value}`;
        console.log(insertarNombre[0].innerText);
    }
});

// Obtener temática de noticias
 

// let seleccionarTematica = document.getElementById("tematica").value;
// console.log(seleccionarTematica);
// seleccionarTematica.addEventListener = ("submit", validarForm);  

// function validarForm(e) { 
//     e.preventDefault();
//     seleccionarTematica = document.getElementById("tematica").value;
// console.log(seleccionarTematica)
// }



//----
// let enviar_seleccion = document.getElementById('enviar_seleccion');
// enviar_seleccion.addEventListener( "submit", validarForm)

// function validarForm(e) { 
//     e.preventDefault();
//     let seleccionarTematica = e.target.children;
// console.log(seleccionarTematica)
// }


// let seleccionarTematica = document.getElementById("tematica").value;
// seleccionarTematica.onchange = () => {
//     console.log(seleccionarTematica);

//     };

tematica.onchange = () => {
    frase.innerText = tematica.value;
}




//