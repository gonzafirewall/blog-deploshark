---
title: "Ejercitando Python!!! Parte 1"
description: "Hay que mantenerse activo! En algunos enunciados dice hacer un programa pero como me dá fiaca hacer todo un .py y ejecutarlo hice una función para cada..."
pubDate: 2012-06-19
tags: ["ejercicios", "principiante", "python", "programación"]
draft: false
legacy: true
---

Hay que mantenerse activo!  

[![](http://www.medicinapreventiva.com.ve/imagenes/ejercicio/trotadora_humorT.gif)](http://www.medicinapreventiva.com.ve/imagenes/ejercicio/trotadora%5FhumorT.gif)
  
  
En algunos enunciados dice hacer un programa pero como me dá fiaca hacer todo un .py y ejecutarlo hice una función para cada ejercicio.  
  
  
**_1\. Intro_**   
**_1.01\. Hacer un programa que muestre "Hola mundo", y ejecutarlo para ver el mensaje en la pantalla. ¿Cómo lo ejecutó? ¿Qué otras maneras había de ejecutarlo?_**   
  
def holamundo():  
print "hola mundo"  
  
holamundo()  
  
**_1.05\. Hacer un programa que muestre "Esto es un caño". Ejecútelo. ¿Qué sucede? ¿Cómo lo solucionó?_**  
  
def canio():  
print "Esto es un caño"  
  
canio()  
  
**_2\. Tipos de Datos_**   
**_2.01\. Escriba un programa que muestre la siguiente figura:_**  
\\ | /  
@ @  
\*  
\\"""/  
  
def figura():  
print ''' \\ | /  
@ @  
\*  
\\"""/'''  
  
figura()  
  
**_2.02\. Siendo a="Hola", b="mundo", c=87 y d=2.33145, armar y mostrar las siguientes cadenas:_**  
 **_"Hola mundo" (usando a y b)_**  
 **_"-Hola-mundo-" (usando a y b)_**  
 **_"El resultado es: 87" (usando c)_**  
 **_"El resultado es: 87min (5220seg)" (usando c ambas veces)_**  
 **_"La temperatura es: 2.3"_**  
  
a="Hola  
b="mundo"  
c=87  
d=2.33145  
def vars():  
print a+' '+b  
print '-'+a+'-'+b+'-'  
print "El resultado es: %s" % c  
print "El resultado es: %s min (%s seg)" % (c, c\*60)  
print "La temperatura es: %.1f" %d  
  
vars()  
  
**_2.03\. Hacer un programa que le pida una cadena al usuario (usando la función "raw\_input") y la imprima a pantalla al revés. Por ejemplo, para el texto "Esto es asi", debería mostrar:_**  
 **_"isa se otsE"_**  
  
def alrevez():  
a = raw\_input("Escribite algo: ")  
print a\[::-1\]  
  
alrevez()  
  
**_2.04\. Hacer un programa que le pida un número al usuario (usando la función "raw\_input") y muestre ese número menos dos, más dos, multiplicado por dos, dividido por dos de forma entera, dividido por dos de forma decimal, y elevado a la potencia de dos. Por ejemplo, para el número 7, debería mostrar:_**  
 **_5_**  
 **_9_**  
 **_14_**  
 **_3_**  
 **_3.5_**  
 **_49_**  
  
def operaciones():  
a = int(raw\_input("Escribite un nro: "))  
print a - 2  
print a + 2  
print a \* 2  
print int(a/2)  
print a/2.0  
print a\*\*2  
  
operaciones()  
  
  
Seguiré pronto con otros ejemplos!!!  
  
Gracias a Taniquetil de PyAr  
<http://www.taniquetil.com.ar/py/ejercicios/enunciados.html>
