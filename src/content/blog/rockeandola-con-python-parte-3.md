---
title: "Rockeandola con Python Parte 3"
description: "Esta seguidilla de Posts sobre algunas cuestiones mas o menos avanzadas de Python tuvieron muchas visitas y eso me gusta no por que me sienta importante ni..."
pubDate: 2014-03-03
tags: ["zip", "rockeandola", "with", "python", "fabric", "parte 3", "tim peters", "zen of python"]
draft: false
legacy: true
---

Esta seguidilla de Posts sobre algunas cuestiones mas o menos avanzadas de Python tuvieron muchas visitas y eso me gusta no por que me sienta importante ni nada de eso sino por que alimenta mi idea de que compartir mi aprendizaje es útil para mí y para quienes leen cada tanto mi blog.  
  
Hoy terminaré de contarles las cosas que se hacen con With, Partials, una particularidad sobre la relación entre los Zips y Python y algunas rarezas que se encuentran instaladas en nuestra libreria.  
  
**With**  
  
Este es un elemento copado bien utilizado se ve muy estetico para la lectura del código. Básicamente esta declaración ejecuta sobre el objeto que se le pasa los métodos mágicos \_\_enter\_\_ y \_\_exit\_\_  
El ejemplo básico de este método es el de cerrar automáticamente el archivo cuando se sale de su alcance (scope).  
  
with open('archivo.txt') as f:  
print(f.read())  
  
Para la libreria de ejecución de comandos remotos llamada Fabric\[2\] es muy usada y yo diría tan bien usada que hace como dije al principio una mejor lectura del código un ejemplo es el de ejecutar comandos bajo un mismo directorio.  
  
with cd('/path/to/app'):  
run('.mkdir una\_carpeta')  
run('.wget http://unawebcopada.com.ar/el\_archivo.tar.gz')  
  
**Partial**  
Parece ser común (todavia no me pasó) escribir el mismo método varias veces cambiando únicamente un parámetro.  
Con partial se puede escribir un método como una plantilla y usarlo con diferentes argumentos fijos para generar un metodo que tenga una funcionalidad especifica algunos ejemplos que encontré por internet que me gustaron son los siguientes.  
  
In \[1\]: from functools import partial  
In \[2\]: base\_dos = partial(int, base=2)  
In \[3\]: base\_dos.\_\_doc\_\_ = "Convierte texto de base 2 a un entero"  
In \[4\]: base\_dos('10010')  
Out\[4\]: 18  

  
Este \[3\] primer ejemplo es de crear una función especifica usando como template la función int que transforma un string en enteros para transformarla en una función que pasa strings en base 2 a entero.

  
In \[1\]: from functools import partial

In \[2\]: def plantilla\_log(nivel, mensaje):

...: print("{}: {}".format(nivel, mensaje))

...: 

In \[3\]: log\_info = partial(plantilla\_log, "info")

In \[4\]: log\_cuidado = partial(plantilla\_log, "cuidado")

In \[5\]: log\_error = partial(plantilla\_log, "error")

In \[6\]: log\_info('Este es un log informativo')

info: Este es un log informativo

  
En este \[4\] se trata de una función que es un template sobre como hacer un log via pantalla y luego se generan las funciones especificas donde se fija el primer parámetro que es el nivel.

  
**El amor entre Zip y Python** 

Usted se preguntará si en la vida de la ejecución de código en python es todo .py? Esta es una pregunta muy razonable. pero veremos una respuesta un poco extraña

  
admin@quicuo-kaizen:/tmp$ cat \_\_main\_\_.py 

print "Estoy dentro de un ZIP"

admin@quicuo-kaizen:/tmp$ zip ejemplo \_\_main\_\_.py 

updating: \_\_main\_\_.py (stored 0%)

admin@quicuo-kaizen:/tmp$ python ejemplo.zip 

Estoy dentro de un ZIP

  
Y finalmente un poco de Diversión para cerrar estas **3 Partes de Rockeandola con Python**  
  
Parece que alguien alguna vez estaba hecho un poeta escribió una poesia sobre python y sus bases estéticas o de ideales. Esto pareció gustar tanto que fue incluida en el código fuente y al hacer lo siguiente se puede leer.  
  
In \[1\]: import this  
The Zen of Python, by Tim Peters  
  
Beautiful is better than ugly.  
Explicit is better than implicit.  
Simple is better than complex.  
Complex is better than complicated.  
Flat is better than nested.  
Sparse is better than dense.  
Readability counts.  
Special cases aren't special enough to break the rules.  
Although practicality beats purity.  
Errors should never pass silently.  
Unless explicitly silenced.  
In the face of ambiguity, refuse the temptation to guess.  
There should be one-- and preferably only one --obvious way to do it.  
Although that way may not be obvious at first unless you're Dutch.  
Now is better than never.  
Although never is often better than \*right\* now.  
If the implementation is hard to explain, it's a bad idea.  
If the implementation is easy to explain, it may be a good idea.  
Namespaces are one honking great idea -- let's do more of those!  

  
Otra cosa muy interesante es, que es lo que pasa, cuando escribís en la consola interactiva de python "import antigravity". Yo diría que eso, es lo que siente uno cuando escribe en Python, que puede hacer un import y empezar a programar la Matrix misma.  
  
\[0\] http://magmax.org/2013/09/30/python-avanzado.html  
\[1\] http://effbot.org/zone/python-with-statement.htm  
\[2\] http://docs.fabfile.org/en/1.6/api/core/context\_managers.html  
\[3\] http://docs.python.org/3/library/functools.html#functools.partial  
\[4\] http://tech.pro/tutorial/1520/partial-function-application-in-python
