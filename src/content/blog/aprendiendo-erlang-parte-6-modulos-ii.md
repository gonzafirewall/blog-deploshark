---
title: "Aprendiendo Erlang parte 6 Modulos II"
description: "Una última función agregada al modulo, usando ambas funciones anteriores greet_and_add_two(X) -&gt; hello(), add(X,2). No olvides agregar..."
pubDate: 2014-04-09
tags: ["macro", "erlang", "learnyousomeerlang", "modulos", "module"]
draft: false
legacy: true
---

Una última función agregada al modulo, usando ambas funciones anteriores  
  
greet\_and\_add\_two(X) ->  
hello(),  
add(X,2).  
  
No olvides agregar **greet\_and\_add\_two/1** a la lista de funciones exportadas. En las llamadas a **hello/0** y **add/2** no necesitas escribir el nombre del modulo delante de ellos por que son declaradas en el módulo mismo.  
  
Si hubieras querido ser capaz de llamar a io:format/1 en la misma manera que add/2 o cualquier otra función definida en el módulo, deberías agregar el siguiente atributo de modulo al comienzo del archivo **\-import(io, \[format/1\]).** Entonces podrías llamar a **format('Hola Mundo!\~n').** directamente. De manera más general puede seguir esta receta.  
  
**\-import(Module, \[Funcion1/Aridad, ..., FuncionN/Aridad\]).**  
Importar una función no es más que un atajo para los programadores cuando escriben su código. Los programadores Erlang a menudo desalientan el uso del atributo -import ya que algunas personas encuentran que reduce la legibilidad del código. En el caso de io:format/2 la función io\_lib:format/2 también existe. En caso de que se use una de estas el programador tendría que ir al comienzo del archivo para saber de cual de las dos se trata. Consecuentemente, dejar el nombre de módulo es considerada una buena práctica. Usualmente, las únicas funciones que verás importadas vienen del módulo de listas: estas funciones son usadas con mucha frecuencia que las otros módulos.  
  
Tu módulo useless debería ahora verse algo así  
  
\-module(useless).  
\-export(\[add/2, hello/0, greet\_and\_add\_two/1\]).  
  
add(A,B) ->  
A + B.  
  
%%  
%%  
hello() ->  
io:format("Hola mundo!\~n").  
  
greet\_and\_add\_two(X) ->  
hello(),  
add(X,2).  
  
Hemos terminado con el módulo 'useless'. Puedes guardar el archivo bajo el nombre userless.erl . El nombres del archivo deberá el nombre del módulo como fue definido en el atributo **\-module**, seguido de '.erl' que es el tipo de extensión standard para Erlang.  
  
Anteriormente vimos como compilar el módulo y finalmente intentar todas sus funciones, veremos como definir y usar macros. Las macros de Erlang son realmente similares a las declaraciones '#define' de C, principalmente usado para definir funciones cortas y constantes. Ellas son expresiones simples representadas por texto que será reemplazado antes de que el código sea compilado por la VM. Tales macros son útiles principalmente para evitar valores mágicos flotando alrededor de tus módulos. Una macro es definida como un atribudo módulo de la forma **\-define(MACRO, some\_value).** y es usada como **?MACRO** dentro de cualquier función definida en el módulo. Una 'función' macro debería escribirse como **\-define(sub(X,Y), X-Y).** y usada como **?sub(23,47)** luego reemplazado por **23-47** por el compilador. Algunas personas usarán macros más complejas, pero la sintaxis básica se mantiene igual.  
  
**Compilando el código**  
El código Erlang es compilado a bytecode para ser usado por la máquina virtual. Puedes llamar al compilador desde distintos lugares **$ erlc flags file.erl** en la linea de comandos, **compile:file(FileName)** en la shell o en un módulo **c()** en la shell, etc.  
  
Es tiempo de compilar nuestro módulo useless. Abrir la Shell de Erlang y escribir lo siguiente.  
  
**1> cd("/path/to/where/you/saved/the-module").**  
**"Path name to the directory you are in"**  
**ok**  
  
De manera predeterminada, la shell solo busca archivos en el mismo directorio que esté fue lanzado y en la libreria estandar: cd/1 es una función definida exclusivamente para la Shell de Erlang, diciendole que cambie el directorio uno nuevo por lo que es menos molesto navegar por nuestros archivos. Los usuarios de Windows deberían recordar de usar la barra invertida. Cuando esto se realice haz lo siguiente.  
  
**2> c(useless).**  
**{ok, useless}**  
  
Si obtienes otro mensaje, asegurate que el nombre del archivo es correcto, que estás en el directorio correcto, y que no tienes errores en tu módulo. Una vez que compiles el código exitosamente, te darás cuenta que un archivo **useless.beam** fue agregado en el mismo directorio que tu **useless.erl**. Este es el módulo compilado. Probemos nuestras funciones.  
  
**3> useless:add(7,2).**  
**9**  
**4> useless:hello().**  
**Hello, World!**  
**ok**  
**5> useless:greet\_and\_add\_two(-3).**  
**Hello, World!**  
**\-1**  
**6> useless:not\_a\_real\_function().**  
**\*\* exception error: undefined function useless:not\_a\_real\_function/0**  
  
Las funciones funcionando como esperamos **add/2** agrega números, **hello/0** muestra por pantalla "Hello World!", y **greet\_and\_add\_two/1** hace ambas cosas. Por supuesto, te preguntarás por que **hello/0** retorna el atomo ok luego del texto saliente. Esto es por que las funciones Erlang y expresiones deben **siempre** returnar algo, incluso si ellas no son necesarias en otros lenguajes. Así como, **io:format/1** retorna 'ok' para denotar una condición normal, la ausencia de errores.  
  
La expresión 6 muestra un error siendo lanzado por que una función no existe. Si te olvidás de expotar una función, este es el tipo de mensaje de error que obtendrás cuando lo ejecutes.  
  
Hay un montón de banderas de compilación existentes para tenes más control sobre como es compilado el módulo. Puedes obtener una lista de todos ellos en la documentación de Erlang \[0\] . Los más comunes son.  
  
\-debug\_info  
Las herramientas de Erlang como debuggers, cobertura de código, y herramientas de analisis estático se usan para la información de depuración de un módulo con el fin de realizar su trabajo.  
  
\-{outdir, Dir}  
Por default, el compilador de Erlang creará los archivos 'beam' en el directorio actual. Este te permitirá elegir donde poner el archivo compilado.  
  
\-export\_all  
Ignorará el atributo -export del módulo y en su lugar exportará todas las funciones definidas. Este es principalmente útil cuando estás probando o desarrollando código nuevo, pero no debería ser usado en producción.  
  
\-{d, Macro} or {d,Macro,Value}  
Define una macro a ser usada en el módulo, donde Macro es un atomo. Este es usado más frecuentemente cuando se trata de pruebas unitarias, lo que garantiza que un módulo solo tendrá sus funciones de prueba creadas y exportadas cuando se quieren explicitamente. Por default, Value es 'true' si esta no es definida en el tercer lugar de la tupla.  
  
Para compilar nuestro módulo useless con algunas banderas, deberíamos hacer lo siguiente:  
  
**7> compile:file(useless, \[debug\_info, export\_all\]).**  
**{ok, useless}**  
**8> c(useless, \[debug\_info, export\_all\]).**  
**{ok, useless}**  
  
Puedes tambien ser astuto y definir opciones del compilador dentro de un módulo con un atributo de módulo:  
  
**\-compile(\[debug\_info, export\_all\]).**  
Entonces solo compilará y obtendrás los mismos resultados que si pasaras las banderas manualmente. Ahora estamos listos para escribir funciones, compilarlas, y ejecutarlas. Es el momento de ver hasta donde podemos llevarlo.  
  
Tarde y de a poco sigo traduciendo, como salga, pero aprendiendo algo cada día. \[1\]  
\[0\] http://erlang.org/doc/man/compile.html  
\[1\] http://learnyousomeerlang.com/modules
