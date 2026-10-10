---
title: "Extracción de Datos del HCD SM? Parte 1"
description: "Lo primero que tienen que saber es que así como las páginas se descargan a su navegador y ustedes las usan, lo mismo se puede hacer con diferentes programas..."
pubDate: 2014-01-25
tags: ["formularios", "input", "curl", "chromium", "post", "chrome", "sanmartinabierto", "ubuntu", "linux", "debian", "hcd"]
draft: false
legacy: true
---

Lo primero que tienen que saber es que así como las páginas se descargan a su navegador y ustedes las usan, lo mismo se puede hacer con diferentes programas para descargar las páginas a su PC y tenerlas guardadas por siempre (también existe la opción de Guardar Como... en lo mismos navegadores). Pero en este caso lo interesante es poder hacerlo de una manera dinámica. Aún así esta parte la de la descarga por el momento no la hice (por que me pareció sencillo de hacer).  
  
Entonces la Web de HCD de San Martin tiene entre otras muchas cosas interesantes, un sector que es la búsqueda de expedientes \[0\] que tiene unos INPUTs\[1\] de Texto que por el momento no vamos a usar por que busca por palabras clave como lo haría un Buscador cualquiera. Hoy nos interesa un poco más la "búsqueda avanzada" por que somos re Hackers.  
Con el casillero de búsqueda avanzada tildado podemos observar una forma de búsqueda más copada.  
  
[![](http://4.bp.blogspot.com/-kIlyeeuPRJc/UuMaJn0SOwI/AAAAAAAACcI/H7wge_b0Z3Y/s1600/Selecci%C3%B3n_027.png)](http://4.bp.blogspot.com/-kIlyeeuPRJc/UuMaJn0SOwI/AAAAAAAACcI/H7wge%5Fb0Z3Y/s1600/Selecci%C3%B3n%5F027.png)

Yo hice el analisis de los expedientes en los ingresados por AÑO entonces lo que hice fue hacer una búsqueda donde el expediente haya ingresado en el transcurso de los diferentes años. En este caso vamos a poner Ingreso Desde 01/01/2013 al 31/12/2013 pero antes de hacer click en buscar vamos a levantar el Inspector de elementos de Chrome (Chromium en mi caso). Esto se hace haciendo click con el botón derecho sobre cualquier parte de la web y eligiendo del menú la opción inspeccionar elemento.  
Una ventana como la siguiente nos deberia aparecer :  
  
[![](http://3.bp.blogspot.com/-R2YVrCf5N_4/UuMbFhOf_NI/AAAAAAAACcQ/2XPm_qBxVjk/s1600/Selecci%C3%B3n_030.png)](http://3.bp.blogspot.com/-R2YVrCf5N%5F4/UuMbFhOf%5FNI/AAAAAAAACcQ/2XPm%5FqBxVjk/s1600/Selecci%C3%B3n%5F030.png)

  
Ahora hacemos click en **Network** para ver cual es la consulta que sale de nuestra PC cuando hacemos click en el botón de búsqueda. Son varias pero a nosotros nos interesa especialmente la primera. Que dice ser una petición POST \[2\] a la web http://www.hcdsanmartin.gov.ar/RPV\_WEB\_NEW/Expedientes/BuscarExpediente.asp?Estado=1  
entonces lo que hacemos es hacer click con el botón derecho y decirle que nos copie esa petición como se haría en cURL\[3\] "Copy as cURL" y lo pegamos en una términal \[4\]  
  
Entre todo el palabrerio sobre el final vamos a encontrar lo siguiente.  
  
\--data 'Criterio1=&Criterio2=&Criterio3=&chkAvanzada=1&Numero=&Letra=&Anio=&cboProyectos=0&**FechaDesde=01%2F01%2F2013&FechaHasta=31%2F12%2F2013**&cboEstados=0&Buscar=Buscar' --compressed  
  
Resaltado están los datos que nosotros ingresamos como criterio de búsqueda. Por el momento solo recordemos que existen.   
  
Con curl instalado y si no lo tienen en un Debian o Ubuntu se instala con **apt-get install curl**, tienen que hacer la consulta que copiaron del Chrome y agregarle "**\> exp\_2013.html"** lo que están haciendo de esta manera es decirle que cuando se ejecute el CURL lo que traiga lo guarde en un archivo con ese nombre **exp\_2013.html**.  
  
Bueno hasta acá la extracción de los datos de la web a nuestra PC en una próximo POST describiré como hacer par analizar ese archivo HTML con Python y algunas librerias.  
  
\[0\] [www.hcdsanmartin.gov.ar/RPV\_WEB\_NEW/Expedientes/BuscarExpediente.asp](http://www.hcdsanmartin.gov.ar/RPV%5FWEB%5FNEW/Expedientes/BuscarExpediente.asp)  
\[1\] <http://www.w3schools.com/tags/tag%5Finput.asp>  
\[2\] <http://en.wikipedia.org/wiki/POST%5F%28HTTP%29>  
\[3\] <http://es.wikipedia.org/wiki/CURL>  
\[4\] <http://es.wikipedia.org/wiki/Interfaz%5Fde%5Fl%C3%ADnea%5Fde%5Fcomandos>
