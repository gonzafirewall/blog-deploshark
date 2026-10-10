---
title: "Aprendiendo Erlang parte 3 (tuplas)"
description: "Tuplas Una tupla es una manera de organizar los datos. Esta es una manera de agrupar juntos muchos términos cuando se sabe cuantos hay. En Erlang, una tupla..."
pubDate: 2014-01-24
tags: ["tuplas", "erlang", "tipos", "aprendiendo"]
draft: false
legacy: true
---

## **_Tuplas_**

Una tupla es una manera de organizar los datos. Esta es una manera de agrupar juntos muchos términos cuando se sabe cuantos hay. En Erlang, una tupla es escrita de la siguiente forma {Element1, Element2, ..., ElementN}. Como un ejemplo, obtenemos las coordenadas (x,y) si buscas la posición de un punto Catersiano en un gráfico. Nosotros podemos representar este punto como una tupla de dos términos:  
  
1> X = 10, Y=4.  
4  
2> Point = {X,Y}.  
{10,4}  
  
En este caso, un punto será siempre de dos términos. En lugar de llevar las variables X e Y a todos lados, tu solo debes llevar una en su lugar. Sin embargo, que puedes hacer tu si recibes un punto y solo buscas la coordenada X? No es difícil extraer esa información. Recuerda que cuando nosotros asignemos valores, Erlang nunca se quejaría si ellos fueran los mismos. Vamos a explotar esto. Necesitarías limpiar las variables que nosotros habíamos asignado.  
  
3> Point = {4,5}.  
{4,5}  
4> {X,Y} = Point.  
{4,5}  
5> X.  
4  
6> {X,\_} = Point.  
{4,5}  
  
A partir de ahora podemos usar X para obtener el primer valor de la tupla! Como sucedió esto? Primero, X e Y no tenía ningún valor y por lo tanto se considerarán las variables no ligadas. Cuando les propusimos en la tupla {X,Y} a la izquierda del operador =, el operador = comparó ambos valores {X,Y} vs {4,5}. Erlang es lo suficientemente inteligente para desempaquetar los valores de una tupla y distribuirlos en las variables vacias en el costado izquierdo. Entonces la comparación es solo {4,5} = {4,5}, que obviamente es lo que sucede. Esta es una de las muchas formas de la coincidencia de patrones.  
  
Nota que en la expresión 6, yo usé la variable anónima \_. As es exactamente como debería ser usada: para descartar un valor que usualmente está en un lugar pero que no vamos a usar. La variable \_ es siempre observada como vacia y actua como comodín para la coincidencia de patrones. La coincidencia de patrones para desempaquetar tuplas solo funciona si el número de elementos (longitud de la tupla) es el mismo.  
  
7> {\_,\_} = {4,5}.  
{4,5}  
8> {\_,\_} = {4,5,6}  
\*\* exception error: no match of right hand side value {4,5,6}  
  
Las tuplas son útiles cuando trabajamos con valores simples. Como es eso? El ejemplo más simple es la temperatura.  
  
9> Temperatura = 23.213.  
23.123  
  
Bueno, esto suena bien para un buen dia en la playa... espera, esta temperatura es en Kelvin, Celcius o Fahrenheit?  
  
10> TemperaturaPrecisa = {celsius, Temperatura}.  
{celsius, 23.213}  
11> {kelvin, T} = TemperaturaPrecisa  
\*\* exception error: no match of right hand side value {celsius, 23.123}  
  
Esto lanza un error, pero esto es exactamente lo que buscamos. Esto es de vuelta la coincidencia de patrones trabajando. El operador = termina comparando **_{kelvin, T}_** and **_{celsius, 23.213}_**: incluso si la variable T está vacía, Erlang no observa que el átomo _celsius_ sea identico al átomo _kelvin_ cuando se comparan. Una excepción es lanzada que para la ejecución del código. Al hacerlo, la parte de nuestro programa que espera una temperatura en Kelvin no será capaz de procesar la temperatura enviada en Celsius. Esto hace fácil para el programador que está siendo enviado y también trabaja como una ayuda para el debugging. Una tupla que contiene un atomo con un elemento es llamada una "tupla etiquetada". Cualquier elemento de una tupla puede ser cualquier elemento incluso una tupla.  
  
12> {point, {X,Y}.  
{point, {4,5}}  
  
Que pasaría si quisieras contener más de un punto?  
  
Se vienen las listas!
