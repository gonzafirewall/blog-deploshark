---
title: "Archivo de Configuracion - Python by Gonza"
description: "Haciendo un Script y gracias a mi mentor que me va tirando ideas me pasó la opción de utilizar el siguiente modulo...."
pubDate: 2012-03-23
tags: ["python", "configuracion", "archivo", "configparser"]
draft: false
legacy: true
---

Haciendo un Script y gracias a mi mentor que me va tirando ideas me pasó la opción de utilizar el siguiente modulo. <http://docs.python.org/library/configparser.html> Lo ideal es leer todo el doc referencia y finalmente hacer las prácticas del final y van a ver que sencillo que es de utilizar. Igualmente yo voy a hacer una traducción con mis palabras para ver si se las puedo hacer más fácil aún.  
  
ConfigParser que en la versión de Python 3.0 va a pasar a llamarse configparser (todo en lower case), es un modulo que sirve para interpretar o generar un archivo de configuración similar al .ini en windows. Aún así, no puede generar ni analizar archivos .ini.  
El archivo de configuración consiste de Secciones que tienen este formato **\[seccion1\]** como encabezado seguido de registros con el formato **nombre: valor** con el estilo según RFC822 (ver sección [3.1.1](http://tools.ietf.org/html/rfc822.html#section-3.1.1). LONG HEADER FIELDS)o **nombre=valor**. Además podríamos comentar las lineas que no se necesiten con "#" o con ";" en el inicio de la linea que queramos comentar.  
Un ejemplo sería algo así de example.cfg:  
  
> \[MiSeccion\]  
> foodir: %(dir)s/whatever  
> dir=frob  
> long: this value continues  
> in the next line

La pregunta es como capturar estas variables en python?  
  
  
\>>> import ConfigParser  
\>>> config = ConfigParser.ConfigParser()  
\>>> config.read('example.cfg')  
\['example.cfg'\]  
\>>> variable = config.get('MiSeccion', 'dir')  
\>>> print variable  
frob  
\>>> print foodir  
frob/whatever  
  
En las últimas lineas se demuestra una característica que hace que se puedan definir variables que hacen referencia a otras variables dentro de la misma sección. Para eso se pone a la variable que se va a "importar" con el siguiente formato **%(**var**)s** .  
  
  
También van a poder leer como generar un archivo de configuración directamente desde Python. Eso ya es trabajo de ustedes por ahora.
