---
title: "Funciones en Python by Gonza"
description: "Las funciones son porciones de código con un nombre que realiza una serie de tareas y devuelve un valor. las funciones se definen de la siguiente manera..."
pubDate: 2012-03-21
updatedDate: 2012-04-17
tags: ["principiante", "python", "funciones"]
draft: false
legacy: true
---

Las funciones son porciones de código con un nombre que realiza una serie de tareas y devuelve un valor.  
  
las funciones se definen de la siguiente manera siempre inicia con  
  
\>>> def nombre():  
  
... print "hello"  
... ejecutado = True  
... return ejecutado  
...  
\>>> nombre()  
hello  
True  
  
La función anterior es una función que como valor de salida tiene la variable "ejecutado" que devuelve un Booleano. (True, False) <http://es.wikipedia.org/wiki/Tipo%5Fde%5Fdato%5Fl%C3%B3gico>.  
En este caso simplemente nos sirve para saber si Python pasó por ahí o no.  
  
Las funciones pueden recibir parámetros para definir los parámetros de entrada simplemente se definen estos junto con el nombre de la función.  
  
  
\>>> def suma(pri, seg):  
... return pri + seg  
...  
\>>>  
\>>> suma(10, 5)  
15  
  
Aquí se envían como parámetros dos números y se los suma. en caso de enviar dos cadenas de texto de las concatena.  
  
  
\>>> suma("hola ", "Como va?")  
'hola Como va?'  
  
también podríamos cambiar el orden si especificamos a que parámetro le vamos a asignar cada valor por ejemplo.  
  
  
\>>> suma(seg="Chau", pri="Hola como va ")  
'Hola como va Chau'  
  
  
Si intentamos poner la funcion en movimiento pero le pasamos menos argumentos de los necesarios la función va a mostrar un error como el siguiente.  
  
  
\>>> suma(10)  
Traceback (most recent call last):  
File "", line 1, in   
TypeError: suma() takes exactly 2 arguments (1 given)  
  
  
Nos va a informar que le están faltando argumentos. También podemos predeterminar algunos argumentos. asignándole un valor directamente en la definición como la siguiente manera.  
  
  
\>>> def suma(pri, seg=20):  
... return pri + seg  
...  
\>>> suma(10)  
30  
  
Observar que en este caso le pasé un solo valor y como el otro está predeterminado la función pudo ejecutarse y devolverme lo necesario. Si se escriben los dos argumentos el que está predeterminado es reemplazado por el que se le pasó a la función al ejecutarse.  
  
  
\>>> suma(10, 30)  
40  
  
Espero que sirva este fue mi aprendizaje del día.  
  
  
Fuentes:  
<http://mundogeek.net/archivos/2008/03/03/python-funciones/>  
Mentor: marianoguerra.blogspot.com.ar
