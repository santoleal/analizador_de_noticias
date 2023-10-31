/*
LO QUE SE SOLICITABA EN LA PRE-ENTREGA 2

- Condicional
- Ciclo
- Interacción: prompt, alert y console
- Funciones
- Cálculos de entrada, cálculos de salida

LO QUE SE SOLICITA EN LA PRE-ENTREGA 2:

- 1. Estructura HTML del proyecto.
- 2. Variables de JS necesarias. 
- 3. Funciones esenciales del proceso a simular.
- 4. Objetos de JS.
- 5. Arrays.
- 6. Métodos de búsqueda y filtrado sobre el Array.

*/

// 1. ESTRUCTURA HTML --> En archivo Index.html

// 2. VARIABLES JS

let nombre_usuario = "";

let noticiasParaComparar = [];
let nNoticias = 0;

let seccionDeLaNoticia = [
  "Política", "Internacional", "Economia", "Ciencia", "Tecnología", "Cultura", "Medioambiente", "Entretenimiento", "Otra" ];

// 2. FUNCIONES ESCENCIALES

/* 
Hasta el moemnto planteo estas funciones:

    -   Función: ingresar nombre de usuario
    -   Función evaluar noticia ingresada
    -   Función ingresar noticia
    -   Función ver noticia ingresada


*/


let nombreUsuario = document.getElementById("nombre").value;
alert(nombreUsuario);


// Función: ingresar nombre de usuario
let ingresarNombreUsuario = () => {
    let nombre = document.getElementById("nombre");

    if (nombre === null) {
      return "visitante";
    }  else {
      return nombre;
    }
    // si no ha ingresado nombre_usuario, mostrar "visitante"
    // Else, mostrar nombre_usuario

    //return "Has ingresado el nombre de usuario ${nombre}"
}







// Función ingresar noticia

const ingresarNoticia = () => {
    while (nNoticias < 2) {
      alert("Ingrese noticia número: " + (nNoticias + 1));
      const nombreMedio = prompt(
        "¿De qué medio de comunicación es esta noticia?"
      );
      const tituloNoticia = prompt("Copia aquí el título de la noticia");
      const cuerpoNoticia = prompt("Copia aquí el cuerpo de la noticia");
  
      noticiasParaComparar.push([nombreMedio, tituloNoticia, cuerpoNoticia]);
      console.log("Se chequea la vuelta nº" + (nNoticias + 1));
      nNoticias++;
    }
    console.log(noticiasParaComparar);
  };
  





  // Función ver noticia ingresada
  const verNoticiasIngresadas = () => {
    let elegir;
    do {
      elegir = parseInt(prompt(menuVerNoticias));
  
      while (isNaN(elegir) || (elegir !== 1 && elegir !== 2 && elegir !== 99)) {
        elegir = parseInt(
          prompt("Tiene que elegir un número válido: " + menuVerNoticias)
        );
      }
  
      switch (elegir) {
        case 1:
        case 2:
          alert(`- Título: ${noticiasParaComparar[parseInt(elegir - 1)][1]}
          - Extensión del título: ${
            noticiasParaComparar[elegir - 1][1].length
          } caracteres.
          - Resumen de cuerpo: ${noticiasParaComparar[elegir - 1][2].substring(
            0,
            100
          )}
          - Extensión total del cuerpo noticioso: ${
            noticiasParaComparar[elegir - 1][2].length
          }`);
          break;
        case 99:
          alert("Decidió salir. Adiós.");
          break;
        default:
          alert("Algo falla...");
      }
    } while (elegir !== 99);
  };
  
  
  /*
  ingresarNoticia();
  verNoticiasIngresadas();
  */
  




  
  // Función evaluar noticia ingresada
  const evaluarNoticia = () => {
    const evaluar = parseInt(
      prompt(
        "Según tú, ¿con qué tipo de mirada aborda este medio el tema en cuestión?\n" +
          menuEvaluacion
      )
    );
  
    while (isNaN(evaluar)) {
      alert("Error. Debe ser un número");
    }
    switch (evaluar) {
      case 1:
        alert(" Su nota sobre el tipo de mirada es (" + (evaluar - 1) + ")");
        return evaluar - 1;
      case 2:
        alert(" Su nota es negativa (" + (evaluar - 3) + ")");
        return evaluar - 3; // se transforma a un valor negativo, para posicionarlo negativamente en una matriz de -1 a +1
      case 3:
        alert(" Su nota es positiva (+" + (evaluar - 2) + ")");
        return evaluar - 2;
      case 99:
        return "Ha decidido salir";
  
      default:
        alert("Número fuera de rango, intenta otra vez");
    }
    evaluar = parseInt(
      prompt(
        "Según tú, ¿esta nota tiene un enfoque tendencioso?\n" + menuEvaluacion
      )
    );
  };
  



  
  



  
