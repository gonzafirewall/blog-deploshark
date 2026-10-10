---
title: "Erlang - Sintaxis en funciones"
description: "Que sucede con el if? El condicional if actúa como las guardas y comparte con ellas la sintaxis pero fuera de la clausula cabecera de la funcion. Las..."
pubDate: 2015-12-13
tags: ["erlang", "guardas", "guard pattern", "if", "sintaxis"]
draft: false
legacy: true
---

**Que sucede con el if?**  
El condicional if actúa como las guardas y comparte con ellas la sintaxis pero fuera de la clausula cabecera de la funcion. Las clausulas if son llamada Patrones de Guardas. Los IFs en Erlang son diferentes de los ifs que encuentras en la mayoria de los lenguajes. Cuando entrás al pais de Erlang deberías dejar en la puerta todo lo que sabes acerca de los ifs  
  
Para ver que tan similar a las guardas es la expresión if, mira lo siguiente.  
  
\-module(what\_the\_if).  
\-export(\[heh\_fine/0\]).  
  
heh\_fine()->  
if 1 =:= 1 ->  
works  
end,  
if 1=:= 2; 1 =:= 1->  
works  
end,  
if 1 =:= 2, 1=:= 1 ->  
fails  
end.  
  
  
guarda esto como what\_the\_if.erl y probemos.  
  
1> c(what\_the\_if).  
./what\_the\_if.erl:12: Warning: no clause will ever match  
./what\_the\_if.erl:12: Warning: the guard for this clause evaluates to 'false' {ok,what\_the\_if}  
2> what\_the\_if:heh\_fine().  
\*\* exception error: no true branch found when evaluating an if expression  
in function what\_the\_if:heh\_fine/0  
  
  
Bueno, el compilador nos informa que hay un error en la linea 12 que informa que esa linea siempre se evalua como falso. Recuerda, que en Erlang, todo debe retornar algo y la expresión if no es una excepción a la regla. De esta manera cuando Erlang no puede encontrar una manera de tener una guarda exitosa, este se rompe: no puede no devolver algo. Así que necesitamos agregar una rama que capture todo haciendo que siempre sea exitoso de cualquier manera.  
  
En cualquier lenguaje esto es llamado un "else". En Erlang usamos "true" (esto explica por que la VM lanza el error "no hay rama verdadera")  
  
oh\_god(N) ->  
if N =:= 2 -> might\_succeed;  
true -> always\_does  
end.  
  
Y ahora si nosotros testeamos esta función (la parte anterior seguirá lanzando esos warnings)  
  
3> c(what\_the\_if).  
./what\_the\_if.erl:12: Warning: no clause will ever match  
./what\_the\_if.erl:12: Warning: the guard for this clause evaluates to 'false' {ok,what\_the\_if}  
4> what\_the\_if:oh\_god(2).  
might\_succeed  
5> what\_the\_if:oh\_god(3).  
always\_does   
  
  
Seguramente serás alguno de los programadores que se sorprende por el uso de atomo true en vez de else para el control de flujo, despues de todo es más familiar. Como dice Richard O'Keefe básicamente usar el true es capturar todas las otras posibilidades y estos ejemplos que dá él mismo deberián solucionar nuestra confusión.  
  
```
                          by
 if X > Y -> a()  if X > Y  -> a()
  ; true  -> b()   ; X =< Y -> b()
 end        end

 if X > Y -> a()  if X > Y -> a()
  ; X < Y -> b()   ; X < Y -> b()
  ; true  -> c()   ; X ==Y -> c()
 end   end 
```

```
 
```

  
Las ramas "else" o "true" deberián ser evitadas ambas. Los ifs son usualmente más fácil de leer cuando cubres todas los extremos lógicos que cuando confias eso a una clausula "captura-todo".  
  
**En caso ... de**  
  
Si la expresión if es como una guarda una expresión **case ... of** es como la cabecera de la función completa: puede tener una compleja coincidencia de patrones para cada argumento, y puedes tener guardas encima de él.  
  
Probablemente estás familiarizado con la sintaxis, no necesitaremos demasiados ejemplos. Para esto, escribiremos una función para agregar elementos a un conjunto (una colección de valores únicos) que podremos representar como una lista desordenada. Esta posiblemente sea la peor implementación en términos de eficiencia. Aquí la sintaxis.  
  
insert(X, \[\]) -&gt  
\[X\];  
insert(X,Set) -&gt  
case lists:member(X,Set) of  
true -&gt Set;  
false -&gt \[X|Set\]  
end.  
  
Si enviamos una lista vacia y un término x para ser agregado, entonces nos retornará una lista solo conteniendo el valor x. De otra manera la función lists:member/2 verifica si un elemento es parte de un lista y retorna true si existe o false si no lo está. En caso de que ya exista el elemento en el conjunto entonces no lo modificamos. Sino, agregamos x al conjunto como el primer elemento de la lista.  
  
En este caso la coincidencia de patrones, fue realmente simple. Aquí una más compleja,  
  
beach(Temperature) -&gt  
case Temperature of  
{celsius, N} when &gt= 20, N =&lt 45 -&gt  
'favorable';  
{kelvin, N} when N &gt= 293, N =&lt 318 -&gt  
'scientifically favorable';  
{fahrenheit, N} when N &gt= 68, N =&lt 113 -&gt  
'favorable in the US';  
\_ -&gt  
'avoid beach'  
end.  
  
Aquí la respuesta a "es el momento adecuado para ir a la playa?", dadas 3 temperaturas diferentes: grados Celsius, Kelvin, Fahrenheit. La coincidencia de patrones y guardas son combinadas en orden para devolver una respuesta satisfactoria a todos los usos. Como apuntamos anteriormente, las expresiones "case ... of" son la misma cosa que varias cabeceras de funciones con guardas. De hecho podriamos reescribir nuestro código de la siguiente manera.  
  
beachf({celsius, N}) when N &gt= 20, N =&lt 45 -&gt  
'favorable';  
...  
beachf(\_) -&gt  
'avoid beach'.  

  
Esto genera la siguiente pregunta. Cuando deberiamos usar "if", "case ... of" o funciones para hacer expresiones condicionales.

  
**Que utilizar?**

  
Que utilizar es una pregunta dificil. La diferencia entre llamadas a funciones y 'case ... of' son minimas: de hecho son representadas de la misma manera a bajo nivel. y usar una o la otra tiene el mismo costo en términos de rendimiento. Una diferencia entre ambas es cuando más de un argumento necesita ser evaluado "function(A,B) -&gt ... end." puede tener guardas y valores que coincidan con A y B pero una expresión case necesitaría ser formulada de la siguiente manera:

  
case {A,B} of

Pattern Guards -> ...

end.

  
Esta forma es raramente vista, y puede sorprender un poco al lector. En situaciones similares llamar a una función debería ser más apropiado. De igual manera la función insert/2 previamente escrita, es podría decirse la manera más limpia en lugar de tener una llamada a función para continua con la manejar la simple clausula true o false.

  
La otra pregunta es para que usar if, dado que cases y functions son los suficientemente flexibles para incluso abarcar if a través de guardas? Lo racional detrás del if es simple. Este fue agregado para que tener en el lenguaje una manera corta de tener guardas sin necesidad de escribir toda la coincidencia de patrones cuando no es necesaria.

  
\[0\] http://learnyousomeerlang.com/syntax-in-functions
