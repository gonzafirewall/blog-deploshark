---
title: "Aprendiendo Erlang parte 6 Modulos III"
description: "Más acerca de mó dulos Antes de movernos a profundizar nuestro conocimiento en relación a como escribir funciones y algunos fragmentos de código, pero antes..."
pubDate: 2014-09-14
tags: ["guardas", "funciones", "modulos", "programación", "erlang", "funcional", "clausulas", "if"]
draft: false
legacy: true
---

**Más acerca de mó** **dulos**  
  
Antes de movernos a profundizar nuestro conocimiento en relación a como escribir funciones y algunos fragmentos de código, pero antes tenemos un poco más de información que te será útil en el futuro.  
  
Una de las primeras son los metadatos de los módulos. Los atributos de los módulos son metadatos que describen el módulo en si mismo. Donde podemos encontrar estos metadatos cuando no tenemos acceso al código fuente? Bueno, el compilador nos ayuda con esto: cuando compilamos un módulo, este toma la mayoría de los atributos y los almacena en una función llamada **module\_info/0 .** Así pueden ver los metadatos de un módulo.  
  
```
9> useless:module_info().
[{exports,[{add,2},
           {hello,0},
           {greet_and_add_two,1},
           {module_info,0},
           {module_info,1}]},
 {imports,[]},
 {attributes,[{vsn,[174839656007867314473085021121413256129]}]},
 {compile,[{options,[]},
           {version,"4.6.2"},
           {time,{2009,9,9,22,15,50}},
           {source,"/home/ferd/learn-you-some-erlang/useless.erl"}]}]
10> useless:module_info(attributes).
[{vsn,[174839656007867314473085021121413256129]}]
```

```

```

El snippet anterior además muestra la función **module\_info/1** que permite solicitar una pieza especifica de información.  

  
**Sintaxis en funciones**

  
Coincidencia de patrones

  
Ahora tenemos la habilidad de almacenar y compilar código, podemos empezar a escribir funciones más avanzadas. La primera función que vamos a escribir necesita saludar de manera diferente según el genero. En la mayoría de los lenguajes podrías escribir algo así.

  
function saludar(Genero, Nombre)

if Genero == masculino then

printf("Hola, Sr. %s!", Nombre)

else if Genero == femenino then

printf("Hola Sra. %s!", Nombre)

else

printf("Hola, %s!", Nombre)

  
Con coincidencia de patrones (pattern matching), erlang te ayuda a no escribir tanto código similar. La misma función en erlang se vería como esto.

  
saludar(masculino, Nombre) ->

io:format("Hola, Sr. \~s!", \[Nombre\]);

saludar(femenino, Nombre) ->

io:format("Hola, Sra. \~s!", \[Nombre\]);

saludar(\_, Nombre) ->

io:format("Hola, \~s!", \[Nombre\]).

  
Hay que adminit que la función de impresión por pantalla es un poco más fea en erlang que entro lenguaje pero ese no es el punto. La diferencia principal aquí es que nosotros usamos la coincidencia de patrones para definir las dos partes de una función se debe utilizar y ligas los valores al mismo tiempo. Aquí no se necesita primero ligar los valores y entonces compararlos.  
En lugar de:  
  
function(Args)   
if X then  
Expression  
else if Y then  
Expression  
else  
Expression  
  
Nosotros escribimos:  
  
function(X) ->  
Expression;  
function(Y) ->  
Expression;  
function(\_) ->  
Expression.  
  
De esta manera se obtiene los mismo resultados pero con un estilo más declarativo. Cada una de estas declaraciones de funciones es llamada clausula de función. Las clausulas de función deben ser separadas con punto y coma ";"  
  
La coincidencia de patrones en las funciones puede ser más complejo y poderoso que eso. Tal vez recuerdas de capitulos anteriores donde usabamos coincidencia de patrones patrones para encontrar la cabeza y cola de una lista. Vamos a hacer esto. Creamos un modulo llamado funciones.  
  
\-module(functions).  
\-compile(export\_all).  
  
La primera función que vamos a escribir es head/1, que actua exactamente como erlang:hd/1 que toma una lista como argumento y retorna su primer elemento. Los haremos con la ayuda del signo "|".  
  
head(\[H|\_\]) -> H.  
  
Si vos escribis functions:head(\[1,2,3,4\]) en la terminal (una vez que el modulo sea compilado), puedes esperar que te retorne el valor 1\. Consecuentemente para obtener el segundo elemento de la lista, puedes crear la siguiente función.  
  
second(\[\_,X|\_\]) -> X.  
  
La lista será deconstruida por erlang en orden a hacer coincidir los patrones. Intentalo en la terminal.  
  
1> c(functions).  
{ok, functions}   
2> functions.head(\[1,2,3,4\]).  
1  
3> functions.second(\[1,2,3,4\]).  
2  
  
esto podría ser repetido en la lista tanto como quitas, pero es impráctico para cientos de valores. Esto se puede resolver escribiendo funciones recursivas, aunque veremos como más adelante. Por ahora concentremonos más en la coincidencia de patrones. El concepto de variables libres y llenas nosotros los discutimos anteriormente, esto es así también para las funciones, podemos entonces comparar y conocer si dos parametros pasados a una función son lo mismo o no. Para esto, crearemos una función llamada same/2 que toma dos argumentos y dice si son identicos.  
  
same(X,X) ->  
true;  
save(\_,\_) ->  
false.  
  
Y es así de simple.   
  
**Guardas, guardas.**  
  
Las guardas son clausulas adicionales que pueden ir en la cabecera de una función para hacer la coincidencia de patrones más expresiva. Como mencionamos antes la coincidencia de patrones está de alguna manera limitada ya que no puede expresar cosas como rangos de valores o cierto tipo de datos. Unos conceptos que no podemos representar serían los siguientes. Es este jugador de 12 años demasiado petizo para jugar con los profesionales? Es esta distincia demasiado larga para caminar sobre tus manos? Eres demasiado viejo o demasiado joven para manejar un auto?. No puedes responder esto simplemente con coincidencia de patrones. Se puede representar la pregunta sobre el manejo de un auto de la siguiente manera.  
  
old\_enough(0) -> false;  
old\_enough(1) -> false;  
old\_enough(2) -> false;  
...   
old\_enough(14) -> false;  
old\_enough(15) -> false;  
old\_enough(\_) -> true.  
  
Pero esto es increiblemente impráctico. Puedes hacerlo si lo quieres, pero trabajarás solo en tu código por siempre. Si quieres eventualmente hacer amigos, entonces debes usar el modulo de guardas así podremos escribir la pregunta sobre el manejo de la siguiente manera.  
  
old\_enough(X) when X >= 16 -> true;  
old\_enough(\_) -> false.  
  
y listo. Como puedes ver es mucho más limpio y corto. Notarás que la regla básica de una guarda es que debe retornar true cuando es correcta, la guarda puede fallar si retorna false o si lanza una excepción. Supongamos ahora que no queremos tener en cuenta a las personas que son mayores de 104 años. Entonces deberiamos cuidarnos de eso, pero como?, simplemente agregando una segunda guarda.  
  
right\_age(X) when X >= 16, X <= 104 ->  
true;  
right\_age(\_) ->  
false.  
  
La "," funciona como un "y tambien", y el punto y coma ";" funciona como un "o sino"   
  
  
http://learnyousomeerlang.com/modules#mode-about-modules
