/**
 
- Condicional
- Ciclo
- Interacción: prompt, alert y console
- Funciones
Cálculos de entrada, cálculos de salida

 */

// EN ESTA PRE-ENTREGA SE "COMPARARAN" MÁXIMO 2 NOTICIAS

let noticiasParaComparar = [];
let nNoticias = 0;
const menuVerNoticias = `
Visualice la noticia ingresada:
(1) Ver noticia 1
(2) Ver noticia 2
(99) Salir
`;
const menuEvaluacion = `
(1) Mirada crítica
(2) Mirada condescendiente
(3) Mirada neutra
(99) Salir 
`;

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

// Invoco a las funciones

ingresarNoticia();
verNoticiasIngresadas();

//   if (elegir == "1") {
//     console.log(`- Título: ${noticiasParaComparar[0][1]}
// - Extensión del título: ${noticiasParaComparar[0][1].length} caracteres.
// - Resumen de cuerpo: ${noticiasParaComparar[0][2].substring(0, 100)}
// - Extensión total del cuerpo noticioso: ${noticiasParaComparar[0][2].length}`);
//   } else if (elegir == "2") {
//     console.log(`- Título: ${noticiasParaComparar[1][1]}
// - Extensión del título: ${noticiasParaComparar[1][1].length} caracteres.
// - Resumen de cuerpo: ${noticiasParaComparar[1][2].substring(0, 100)}
// - Extensión total del cuerpo noticioso: ${noticiasParaComparar[1][2].length}`);
//   } else if (elegir == "99") {
//     alert("Decidió salir. Adiós.");
//   } else {
//     alert("Número inválido. Intente otra vez");
//     elegir = prompt(menuVerNoticias);
//   }

//     let extractoNoticia = cuerpoNoticia.substring(0, 100); // substring perite una suerte de recorte de un texto largo....

//     let extensionTitulo = tituloNoticia.length;
//     let extensionCuerpoNoticia = cuerpoNoticia.length;

//     alert(`Medio a Analizar: ${nombreMedio}

//   Título de noticia: ${tituloNoticia}
//   Extensión del título: ${extensionTitulo} caracteres.

//   Extracto de cuerpo noticioso: ${extractoNoticia}...
//   Extensión del cuerpo noticioso: ${extensionCuerpoNoticia} caracteres.

//     `);

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

const compararNoticias = () => {};

// while (nNoticias < 2) {
//     alert("Ingrese noticia número: " + (nNoticias + 1));
//     ingresarNoticia();
//     console.log("Se chequea la vuelta nº" + i);
//     i++;
//   }
//   console.log(noticiasParaComparar);
