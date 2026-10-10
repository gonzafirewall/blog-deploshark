---
title: "Aprendiendo Erlang parte 4 listas"
description: "Listas Las listas son el pan y la manteca de muchos lenguajes funcionales. Estos son usados para resolver todo tipo de problemas y es sin dudas la..."
pubDate: 2014-01-28
tags: ["head", "argentina", "erlar", "tail", "listas", "erlang", "learnyousomeerlang", "cabeza", "gusanos", "cola"]
draft: false
legacy: true
---

Listas  
  
Las listas son el pan y la manteca de muchos lenguajes funcionales. Estos son usados para resolver todo tipo de problemas y es sin dudas la estructura de datos más usada en Erlang. Las listas puede contener cualquier cosa! Números, átomos, tuplas, otras listas; tus sueños más salvajes en un estructura simple. La notación básica de un lista es \[Elemento1, Elemento2, ... ElementoN\] y puedes mezclar más que un tipo de dato en él:  
  
1> \[1,2,3, {numbers, \[4,5,6\]}, 5.34, atom\].  
\[1,2,3,{numbers,\[4,5,6\]},5.34,atom\]  
  
Bastante simple, verdad?  
  
2> \[97,98,99\].  
"abc"  
  
Que pasó acá??? Esta es una de las cosas que menos gustan en Erlang. Cadenas de texto, las cadenas de texto son listas y la notación es absolutamente la misma! Por que a la gente no le gusta? Porque?  
  
3> \[97,98,99,4,5,6\].  
\[97,98,99,4,5,6\]  
4> \[233\].  
"é"  
  
Erlang imprimirá listas de números como números solo cuando al menos uno de ellos no represente una letra! No hay tal cosa como una cadena de texto real en Erlang! Esto va sin dudas a obsersionarte en el futuro y odiarás el lenguaje por esto. No desesperes, por que hay otras maneras de escribir cadenas de texto nosotros lo veremos más tarde en este cápitulo.  
  
Para pegar listas juntas, nosotros usamos el operador ++. Lo contrario de ++ es -- y podremos remover elementos de una lista:  
  
5> \[1,2,3\] ++ \[4,5\].  
\[1,2,3,4,5\]  
6> \[1,2,3,4,5\] -- \[1,2,3\].  
\[4,5\]  
7> \[2,4,2\] -- \[2,4\].  
\[2\]  
8>  
8> \[2,4,2\] -- \[2,4,2\].  
\[\]  

  
Ambos ++ y -- son asociados desde la derecha. Esto significa que los elementos de muchos operaciones -- o ++ deben ser realizados desde la derecha hacia la izquierda, como en los siguientes ejemplos:

  
9> \[1,2,3\] -- \[1,2\] -- \[3\].

\[3\]

10> \[1,2,3\] -- \[1,2\] -- \[2\].

\[2,3\]

  
Vamos a seguir adelante. El primer elemento de una lista es llamado Cabeza(Head), y el resto de la lista es llamado la Cola(Tail). Usaremos dos funciones incorporados (Build-In Functions BIF) para conseguirlos.

  
11> hd(\[1,2,3,4\]).

1

12> tl(\[1,2,3,4\]).

\[2,3,4\]

  
Accesando o agregando la cabeza es rápido y eficiente: virtualmente todas las aplicaciones donde necesites operar con listas siempre operas en la cabeza primero. Como se usa con tanta frecuencia, hay una mejor manera de separar la cabeza de la cola de una lista con la ayuda de la coincidencia de patrones: \[Head, Tail\]. 

Así es como deberías agregar una nueva cabeza a una lista.

  
13> List = \[2,3,4\].

\[2,3,4\]

14> NewList = \[1|List\].

\[1,2,3,4\]

  
Cuando procesamos listas, tu usualmente empiezas con la cabeza, y buscas una manera rápida de guardar la cola para más tarde operar sobre ella. Si recuerdas la manera en que trabajan las tuplas y como nosotros usamos la coincidencia de patrones para desempaquetar valores de un punto ({X,Y}), entonces sabrás que podemos obtener el primer elemento (la cabeza) cortando la lista de una manera similar.

  
15> \[Head|Tail\] = NewList.

\[1,2,3,4\]

16> Head.

1

17> Tail.

\[2,3,4\]

18> \[NewHead|NewTail\] = Tail.

\[2,3,4\]

19> NewHead.

2

  
El | que nosotros usamos es llamado el operador cons (constructor). De hecho, cualquier lista puede ser construida con solo valores y cons.  
  
20> \[1 | \[\]\].  
\[1\]  
21> \[2|\[1 | \[\]\]\].  
\[2,1\]  
22> \[3 | \[2 | \[1 | \[\]\]\]\].  
\[3,2,1\]  
  
Esto quiere decir que cualquier lista puede ser creada siguiendo la formula \[Term1 | \[Term2 | \[... | \[ TermN \] \] \] \] ... Las listas pueden de este modo ser definidas de manera recursivamente como una cabeza precedida de una cola, que en si misma es una cabeza seguida de más cabezas. En este sentido nosotros podriamos imaginar una lista siendo un poco como un gusano tu podrías cortarlo en la mitad y entonces obtendrías dos gusanos.  
  
[![](/images/legacy/aprendiendo-erlang-parte-4-listas/worm.png)](/images/legacy/aprendiendo-erlang-parte-4-listas/worm.png)
