---
title: "Erlang Ejercicios"
description: "Una vez leída gran parte del libro Erlang/OTP [0] de Manuel Rubio y haber hecho una muy pequeña parte de la traducción de \"learn you some erlang\" [1] para..."
pubDate: 2014-01-17
tags: ["ejercicios", "chicagoboss", "github", "bosqueviejo", "aprendiendo", "erlang", "learnyousomeerlang"]
draft: false
legacy: true
---

Una vez leída gran parte del libro Erlang/OTP \[0\] de Manuel Rubio y haber hecho una muy pequeña parte de la traducción de "learn you some erlang" \[1\] para mi Blog que luego voy a poner la parte 3.  
  
Me puse a experimentar un poco e instalar por ejemplo ChicagoBoss \[2\] que es un Framework para hacer aplicaciones Web con Erlang, es muy sencillo, me gustó mucho y luego voy a hacer un post sobre lo que aprendí de su instalación y su funcionamiento,  
  
Bueno finalmente les voy a traducir los ejercicios \[3\] que hice para probar lo poco que fui aprendiendo y si quieren van a poder ver el código fuente en github \[4\]  
  
**Entrando a un programa**  
  
Escribe el ejemplo **demo:double** en un archivo llamado **demo.erl.** Usa tu editor de texto preferido.  
Empezar con Erlang.  
  
Escribe el comando **c:c(demo)** a compilar el archivo.  
  
Intenta correr la consulta:  
  
```erlang
demo:double(12).
```

Esto es solo una prueba si estás empezando con el sistema y usar el editor junto con el sistema Erlang.  
  
**Programas secuenciales simples**  
  
  
1\. Escribe las funciones **temp:f2c(F)** y **temp:c2f(C)** que convierte entre las escalas de Grados Centigrados y Fahrenheit (ayuda 5(F-32) = 9C ).  
  
2\. Escribe una función **temp:convert(Temperatura)** que combine la funcionalidad de **f2c** y **c2f**. Ejemplo.
  
  
```erlang
> temp:convert({c,100}).
=> {f,212}
> temp:convert({f,32}).
=> {c,0}
```

3\. Escribe una función **mathStuff:perimeter(Form)** que nos informe el perimetro de diferentes formas. **Form** puede ser una de las siguientes.  
  
```erlang
{square,Side}
{circle,Radius}
{triangle,A,B,C}
```

En el github está además el ejercicio de programas recursivos que "no me salió y tuve que buscarlo para aprender a hacerlo" pero bueno capaz les sirva.  
  
\[0\] <http://erlang.bosqueviejo.net/>  
\[1\] [http://learnyousomeerlang.com](http://learnyousomeerlang.com/)  
\[2\] <http://www.chicagoboss.org/>  
\[3\] <http://www.erlang.org/course/exercises.html>  
\[4\] <https://github.com/gonzafirewall/ejercicios-erlang>
