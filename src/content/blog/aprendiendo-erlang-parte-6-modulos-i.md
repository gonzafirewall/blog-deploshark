---
title: "Aprendiendo Erlang parte 6 Modulos I"
description: "Los módulos son un grupo de funciones reagrupadas en un solo archivo, bajo un nombre. Adicionalmente todas las funciones en erlang deben ser definidas en..."
pubDate: 2014-03-04
updatedDate: 2014-04-08
tags: ["aridad", "modulos", "parte 6", "aprendiendo", "module", "erlang", "export"]
draft: false
legacy: true
---

Los módulos son un grupo de funciones reagrupadas en un solo archivo, bajo un nombre. Adicionalmente todas las funciones en erlang deben ser definidas en módulos. Ya has usado modulas tal vez sin darte cuenta. Las BIFs (Built-In Functions) mencionadas en el capitulo anterior **hd** o **tl**, en realidad pertenecen al módulo erlang, así como toda la aritmética. lógica u operadores booleanos. Los BIFs del módulo erlang difieren de otros módulos en que son automaticamente importados cuando usas Erlang. Cada una de las otras funciones definidas en un modulo que uses debe ser llamada con la forma **Modulo:Funcion(Argumentos)**.

Lo podés ver por vos mismo:

```erlang
1> erlang:element(2, {a,b,c}).
b
2> element(2,{a,b,c}).
b
3> lists:seq(1,4).
[1,2,3,4]
4> seq(1,4).
** exception error: undefined shell command seq/2
```

Aquí la función **seq** del modulo **lists** no fue automáticamente importada mientras que **element** si lo fue. El error 'undefined shell command' viene desde la shell buscando por un comando shell como **f()** y no es capaz de encontrarlo. Hay algunas funciones del modulo erlang que no se importan automáticamente, pero tampoco son muy usadas.

Lógicamente, deberías ponet funciones similares dentro de un mismo modulo. Las operaciones comunes sobre listas son mantenidas dentro del modulo **lists**, mientras que las funciones de entrada y salida (como escribir en una terminal o en un archivo) son agrupadas en el modulo **io**. Uno de los únicos módulos que no respeta ese patrón es el antes mencionado modulo **erlang** que tiene funciones de matemática, conversiones, trabajar con multiprocesamiento, o jugar con la configuración de la máquina virtual, etc. Ellos no tienen ningún punto en común solo que son funciones previamente construidas (BIFs). Tu deberías evitar crear módulos como **erlang** y en su lugar enfocarse en separaciones lógicas limpias.

**Declaraciones de Módulos**

Cuando escribimos módulos, tu puedes declarar dos tipos de cosas: funciones y atributos. Los atributos son metadatos que describen el módulo en si mismo como es su nombre, las funciones que deberían ser visibles a el mundo exterior, el autor del código y así sucesivamente. Este tipo de metadatos es útil porque le dá indicaciones al compilador sobre como debe hacer su trabajo y también por que este permite a la gente obtener información útil sobre el código compilado sin tener que consultar las fuentes.

Hay una gran variedad de atributos de módulos actualmente usados en el código de Erlang a través del mundo, de hecho, podes incluso declarar tus propios atributos para lo que quieras. Hay algunos atributos predefinidos que aparecerán más frecuentemente que otros en tu código. Todos los atributos de módulo siguen la forma de **\-Nombre(Atributo).**. Solo uno de ellos es necesario para que tu módulo sea compilable.

> \-module(Nombre).
> Este es siempre el primer atributo (y declaración) de un archivo y por una buena razón: este es el nombre del módulo actual, donde el nombre es un atomo. Este es el nombre que usarás para llamar a funciones de otros módulos. Las llamadas son hechas con la forma **M:F(A)** donde **M** es el nombre del módulo, **F** la función, y **A** los argumentos.

Es hora de escribir código! Nuestro primer módulo será muy simple y poco útil. Abrí tu editor de texto y escribe lo siguiente, y guárdalo baje el nombre **userless.erl**

```erlang
-module(useless).
```

Esta linea de texto es un módulo válido. Realmente! Por supuesto que esto es muy poco útil. Primero vamos a decidir que funciones vamos a exportar de nuestro módulo 'useless'. Para hacer esto, usaremos otro atributo.

> **\-export(\[Funcion1/Aridad, Funcion2/Aridad, ..., FuncionN/Aridad\]).** Este es usado para definir que funciones de un módulo puede ser llamadas desde el mundo exterior. Este toma una lista de funciones con su respectiva aridad. La aridad de una función es un entero que representa cuantos argumentos pueden ser pasados a la función. Esta es una información critica, por que diferentes funciones definidas dentro de un módulo pueden compartir el mismo nombre si y solo sí ellas tienen aridad diferente. Las funciones **add(X,Y)** y **add(X,Y,Z)**, por lo tanto deberían ser consideradas diferentes y escritas en la forma **add/2** y **add/3** respectivamente.

Nuestro modulo useless exportará una función útil llamada 'add' que tomará dos argumentos. El siguiente atributo **\-export** puede ser agregado después de la declaración del módulo.

```erlang
-export([add/2]).
```

y ahora escribir la función

```erlang
add(A,B) ->
    A + B.
```

La sintaxis de una función sigue la forma **Nombre(Argumentos) -> Cuerpo.** donde el **Nombre** tiene que ser un átomo y el **Cuerpo** puede ser uno o más Expresiones Erlang separada por comas.La función finaliza con un punto. Nota que erlang no utiliza la palabra clave 'return' . 'Return' es inutil. En su lugar, la última expresión lógica de una función a ejecutar tendrá su valor retornado al llamador automaticamente sin tener que mencionarlo.

Agrega la siguiente función (por que sí, todo tutorial necesita su ejemplo "Hola Mundo" Incluso en su cuarto cápitulo!) sin olvidar agregar el atributo **\-export**

```erlang
%% Mostrar Saludo.
%% io:format/1 es una función estándar para salida de texto.
hello() ->
    io:format("Hola Mundo!~n").
```

Lo que se observa en esta función es que los comentarios son de una sola línea y comienzan con un signo % (se utiliza %% simplemente como una cuestión de estilo). La función **hello/0** demuestra como llamar funciones de otros módulos dentro de tu módulo. En este caso **io:format/1** es la función estándar para escribir texto en pantalla como es escrito en el comentario.

\[0\] http://es.wikipedia.org/wiki/Aridad
