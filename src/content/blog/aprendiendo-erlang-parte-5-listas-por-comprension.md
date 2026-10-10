---
title: "Aprendiendo Erlang parte 5 Listas por comprensión"
description: "Las listas por comprensión son maneras para construir y modificar listas. Ellos hacen que los programas sean cortos y fáciles de entender comparada a otras..."
pubDate: 2014-02-07
tags: ["erlar", "aprendiendo", "listas", "erlang", "parte 5", "comprensión"]
draft: false
legacy: true
---

Las listas por comprensión son maneras para construir y modificar listas. Ellos hacen que los programas sean cortos y fáciles de entender comparada a otras maneras de manipular listas. Que está basado en la idea de notación de conjuntos; Si alguna vez has tomado clases de matemáticas con la teoría de conjuntos o si alguna vez has mirado la notación matemática, tal vez conozcas como funciona esto. La notación de conjuntos básicamente te dice cómo construir un conjunto especificando las propiedades que sus miembros deben satisfacer. Las listas por comprensión son difíciles de entender en principio, pero vale la pena el esfuerzo. Ellas hacen el código limpio y corto, así que no dudes en intentarlo y escribir ejemplos hasta lo que entiendas.  
  
Un ejemplo de notacion de conjuntos sería [![](/images/legacy/aprendiendo-erlang-parte-5-listas-por-comprension/set-comprehension.png)](/images/legacy/aprendiendo-erlang-parte-5-listas-por-comprension/set-comprehension.png). Esa notación de conjuntos te dice que el resultado que buscas debería ser todos los números reales los cuales son igual a su propio cuadrado.El resultado de aquel conjunto debería ser {0,1}. Otra ejemplo de notación de conjuntos, más simple y abreviado sería {x : x > 0}. Aquí, buscaremos todos los números donde x > 0.  
  
**1> \[2\*N || N <- \[1,2,3,4\]\]**   
**\[2,4,6,8\]**  
  
Comparando con la notación mátematica a la de Erlang no hay tantos cambios. las llaves ({}) se convierten en corchetes (\[\]), los dos puntos (:) se convierten en dos pipes (||) y la palabra "en" se convierte en una flecha (<-) solamente cambiamos signos y mantenemos la misma lógica. En el ejemplo anterior, cada valor de \[1,2,3,4\] secuencialmente coincide con el patrón N. La flecha actua exactamente como operador el "=", con la excepción que no lo hace lanzar excepciones.  
  
También puede agregarle restricciones a la lista de comprensión usando operaciones que retornen valores booleanos. Si nosotros buscamos que todos los numeros seán pares sobre 10 de ellos, podríamos escribir algo como esto.  
  
**2> || X <- \[1,2,3,4,5,6,7,8,9,10\], X rem 2 =:= 0\].**  
**\[2,4,6,8,10\]**  
  
Donde X rem 2 =:= 0 chequea si un número es par. Las aplicaciones prácticas vienen cuando decidimos aplicar una función a cada elemento de una lista, forzando a respetar restricciones, etc. Como un ejemplo, digamos que tenemos un restaurante. Un cliente entra, ve nuestro menú y pregunta si el podría obtener los precios de todos los items que cuestan entre $3 a $10 con impuestos (digamos 7%).  
  
**3> RestaurantMenu = \[{steak, 5.99}, {beer, 3.99}, {poutine, 3.50}, {kitten, 20.99}, {water, 0.00}\].**  
**\[{steak,5.99},**  
 **{beer,3.99},**  
 **{poutine,3.5},**  
 **{kitten,20.99},**  
 **{water,0.0}\]**  
**4> \[{Item, Price\*1.07} || {Item, Price} <- RestaurantMenu, Price >= 3, Price =< 10\].**  
**\[{steak,6.409300000000001},{beer,4.2693},{poutine,3.745}\]**  
  
Por supuesto, los decimales no están redondeados en una manera legible, pero creo que lo entiendes. La receta para las listas de comprensión en Erlang es por lo tanto NuevaLista = \[Expresion || Patron <- Lista, Condicion1, Condicion2, ... CondicionN\]. La parte Patron <- Lista es llamada expresión Generador. Puedes tener más de uno.  
  
**5> \[X+Y || X <- \[1,2\], Y <- \[2,3\]\].**  
**\[3,4,4,5\]**  
  
Esto corre las operaciones 1+2, 1+3, 2+2, 2+3\. Asi que si quieres hacer la receta de las listas por comprensión más generica podrías obtener: NuevaLista = \[Expresion || GeneradorExp1, GeneradorExp2, ..., GeneradorExpN, Condicion1, Condicion2, ..., CondicionM\] . Nota que las expresiones generador son emparejadas con la coincidencia de patrones que funciona como filtro.  
  
**6> Clima = \[{la\_pampa, lluvioso}, {buenos\_aires, tormenta}, {cordoba, niebla}, {tucuman, soleado}, {entre\_rios, niebla}, {santa\_cruz, nevado}\].**   
**\[{la\_pampa,lluvioso},**  
 **{buenos\_aires,tormenta},**  
 **{cordoba,niebla},**  
 **{tucuman,soleado},**  
 **{entre\_rios,niebla},**  
 **{santa\_cruz,nevado}\]**  
**7> LugaresConNiebla = \[X || {X, niebla} <- Clima\].**  
**\[cordoba,entre\_rios\]**  
  
Si un elemento en la lista Clima no coincide con el patrón {X, niebla}, este es simplemente ignorado en la lista de comprensión donde en una igualdad lanzaría una excepción.  
  
Hay otro tipos de datos básicos que nos queda por ver, por ahora. Esta es una carácteristica sorprendente que hace fácil interpretar datos binarios.
