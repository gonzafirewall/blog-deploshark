---
title: "Aprendiendo Erlang parte 2"
description: "Las variables invariables Algo que no dije en el post anterior pero lo habrán visto es que las \"variables invariables\" tienen que ser escritas con su primer..."
pubDate: 2014-01-09
tags: ["comparadores", "operadores", "mayor", "menor", "parte 2", "comparación", "igualdad", "erlang", "algebra de boole", "desiguldad", "átomos"]
draft: false
legacy: true
---

**Las variables invariables**

Algo que no dije en el post anterior pero lo habrán visto es que las "variables invariables" tienen que ser escritas con su primer letra en mayúscula. Sino me creén intentenlo

```erlang
admin@kaizen:~$ erl
Erlang R16B01 (erts-5.10.2) [source] [64-bit] [async-threads:10] [kernel-poll:false]
Eshell V5.10.2 (abort with ^G)
1> Var = 'Este es un texto loco'.
'Este es un texto loco'
2> Var.
'Este es un texto loco'
3> var = 'Esta se va a romper'.
** exception error: no match of right hand side value 'Esta se va a romper'
```

**Átomos - la razón de la primer letra en mayúscula**

Los atomos son literales \[0\] con su propio nombre como valor. Como dice en la parte del libro que ya esta traducida \[1\] el átomo perro significa 'perro' y nada más que eso. No lo podeś cambiar, no lo podés cortar en pedazos. Los átomos son comparables a las constantes. Pero en este caso es útil por que no son definidas en si misma por consiguiente nunca te va a pasar que una constante no esté definida.

**Worry you or won't be happy (Preocúpate o no serás feliz)**

No bebas demasiado Kool-Aid3 Los átomos son realmente buenos para enviar mensajes o representar constantes. Sin embargo, te encontraras con problemas al utilizar los átomos: Un átomo es referenciado4 en una "tabla de atomos" la que consume memoría (4 bytes por átomo en un sistema de 32-bits y 8 bytes por átomo en un sistema de 64 bits). Sobre la tabla de átomos no actúa el recolector de basura (garbage collector) y por lo tanto los átomos se acumularan hasta que el sistema se caiga por uso de memoria o porque 1048577 átomos fueron declarados.

> Nota: algunos átomos son palabras reservadas y no puede ser usadas excepto para lo que diseñadores del lenguajes querrían que fueran: nombres de funciones, operadores, expresiones: etc. Estos son: **after and andalso band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse query receive rem try when xor**

**Álgebra de Boole y Operadores de comparación**

En erlang la algebra booleana funciona como es de esperar pero tiene algunas cosas puntuales a las que hay que prestar atención.

```erlang
1> true and false.
false
2> false or true.
true
3> true xor false.
true
4> not false.
true
5> not(true and true).
false
```

Hasta acá creo que todo bonito bueno acá vamos de acá en adelante vamos a encontrar una primera diferencia en cuanto a comparaciones que estamos acostumbrados.

```erlang
6> 5 =:= 5.
true
7> 1 =:= 0.
false
8> 1 =/= 0.
true
9> 5 =:= 5.0.
false
10> 5 == 5.0.
true
11> 5 /= 5.0.
false
```

La igualdad total incluso de tipo es "=:=" como vemos en "5 =:= 5.0" nos informa "false" y la desigualdad sería "=/=" también existe una comparación un poco más permisiva que es la que sería "==" o la desigualdad "/="

Luego tenemos los comparadores de mayor o menor etc.

```erlang
12> 1 < 2.
true
13> 1 < 1.
false
14> 1 >= 1.
true
15> 1 =< 1.
true
```

Según la traducción y yo concuerdo la última linea parece estar al revés pero bueno alguno diría "no es un bug es una feature" (traducible aprox a. "no es un problema es una característica")

Otra cuestión a tener en cuenta es. Que debería devolver esta comparación 0 =:= false?
.....
....
...

Creo que muchos diriamos que true bueno al menos Python dice eso

```python
>>> 0 == False
True
```

pero erlang dice que

```erlang
22> 0 =:= false.
false
```

No y esto es así por que en erlang no existe el concepto de tipo booleano para true o false sino que son atomos. Pero se integran muy bien en el lenguaje y generalmente nos vas a tener problemas.

> \[3\]Nota: El orden correcto de cada elemento de la comparación es la siguiente:
> **number** < **atom** < **reference** < **fun** < **port** < **pid** < **tuple** < **list** < **bit string**

**En Resumen**

\=:= flotantes y enteros no son iguales 5 =:= 5.0 false
\=/= flotantes y enteros son definitivamente diferentes 5 =/= 5.0 true
\== flotantes y enteros son lo mismo 5 == 5.0 true
/= flotantes y enteros no son diferentes 5 /= 5.0 false
\> mayor 10 > 5 true
< menor 10 < 5 false
\>= mayor o igual 5 >= 5 true
\=< menor o igual 4 =< 5 true

Vamos a dejar por aquí en la próx vamos a ver otros tipos de datos. Que no están traducidos en la Web de Erlang ARG así que posiblemente aproveche para dar un primer aporte en ese sentido.

\[0\] <http://en.wikipedia.org/wiki/Literal%5F%28computer%5Fscience%29>
\[1\] <http://erlang.org.ar/AEComenzandoRealmente>
\[2\] <http://es.wikipedia.org/wiki/Recolector%5Fde%5Fbasura>
\[3\] <http://erlang.org.ar/AEComenzandoRealmente> \- Algebra de Boole Nota nro 2
