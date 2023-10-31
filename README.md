# ANALIZADOR DE NOTICIAS

## PROYECTO JAVASCRIPT
### Web de recopilación y análisis de noticias.

Objetivo: Realizar análisis de contenidos en noticias.

- Que usuario pueda colocar noticias (2), para comparar.

* Medio
* Fecha
* Título
* Contenido
* Autor

- Que se apliquen funciones:

  - Resumen de noticias.
  - Ver nubes de palabras.
  - Árbol semántico.
  - Palabras que no se repiten en otro texto (únicas)
  - Buscar palabras en contexto

- Que el usuario pueda responder preguntas sobre el texto (se asigna un puntaje al texto para graficar en una matriz) - Gráfico con notas (matriz)

- Que los resultados se puedan compartir en reders sociales en algún formato permanente (¿tipo print de pantalla?).

Librerías:

- Bibliotecas como requests o puppeteer (web scraping)
- Bibliotecas de NLP como spaCy o NLTK en JavaScript (a través de bibliotecas como natural o compromise)
- Bibliotecas de visualización de datos como D3.js, Chart.js o Plotly.js para crear gráficos interactivos que muestren tendencias en las noticias.


Preguntas al usuario sobre la noticia:
- ¿Qué tan creíble es la noticia? Evalúa:
- Te parecen bien las palabras empleadas? 
- ¿Cuál es la emoción principal expresada en la noticia (por ejemplo, positiva, negativa, neutral)?
- ¿Cuáles son las palabras clave o frases que sugieren esa emoción en el texto?
- ¿Qué tipo de lenguaje se utiliza para describir los eventos o personas en la noticia?
- ¿Cuál es la intención o el mensaje general de la noticia? ¿Se intenta inspirar, informar, advertir o persuadir?
- ¿Cómo cree que los lectores o audiencia objetivo pueden reaccionar emocionalmente a esta noticia?



DATOS DE ENTRADA:

- Nombre de usuario (opcional)
- Título de la noticia:
- Fecha de publicación:
- Medio de comunicación:
- Cuerpo de la noticia:
- Nota de evaliación (variable 1)
- Nota de evaluación (variable 2)
- Nota de evaluación (variable 3)
- Info de la fuente
- Stop Words

PROCESO
- Función: Extensión de texto
- Función: Promedio de evaluaciones
- Función: Resumen (librería)
- Nube de palabras (librería)
- Palabras coectadas (librería)
- Recopilar info de la fuente (manual, API de Medios)


DATOS SALIDA
- Texto reestructurado
- Gráficos
- Tabla con info del medio



PREGUNTAS DE EVALUACIÓN: 

Credibilidad:
1- ¿Crees que es confiable la información de esta noticia?
Nota de 1 (muy poco) a 5 (muy confiable)

Pertinencia:
2- ¿Crees que son adecuadas te parecen las palabras empleadas? 
Nota de 1 (muy poco) a 5 (mucho)


Influencia:
3- ¿Se intenta influir emocionalmente en los lectores de esta noticia?

Emoción provocada:
Positiva /  negativa / neutral
