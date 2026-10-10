---
title: "Aprendiendo Erlang"
description: "Con mis ansias de aprender un lenguaje de programación bastante diferente a Python o que haga pie en un paradigma diferente es que siguiendo la..."
pubDate: 2014-01-03
updatedDate: 2014-01-04
tags: ["single assignment", "asignación única", "actor model", "aprendiendo", "erlang", "modelo de actores", "introducción", "trasparencia referencial", "comienzos"]
draft: false
legacy: true
---

[![](http://www.erlang.org/images/erlang.png)](http://www.erlang.org/images/erlang.png)
  
  
Con mis ansias de aprender un lenguaje de programación bastante diferente a Python o que haga pie en un paradigma diferente es que siguiendo la recomendación de marianoguerra \[0\] que alguna vez \[1\] me comentó y me recomendó la comunidad de Erlang Argentina \[2\], es que ahora estoy aprendiendo Erlang. Acá va la definición de Wikipedia!  

> Erlang es un [lenguaje](http://es.wikipedia.org/wiki/Lenguaje%5Fde%5Fprogramaci%C3%B3n) de [programación concurrente](http://es.wikipedia.org/wiki/Programaci%C3%B3n%5Fconcurrente) y un sistema de ejecución que incluye una máquina virtual y biblioteca.  
>  
> El subconjunto de programación secuencial de Erlang es un [lenguaje funcional](http://es.wikipedia.org/wiki/Programaci%C3%B3n%5Ffuncional), con [evaluación estricta](http://es.wikipedia.org/w/index.php?title=Evaluaci%C3%B3n%5Festricta&action=edit&redlink=1), [asignación única](http://es.wikipedia.org/w/index.php?title=Asignaci%C3%B3n%5F%C3%BAnica&action=edit&redlink=1), y [tipado dinámico](http://es.wikipedia.org/wiki/Tipado%5Fdin%C3%A1mico). Fue diseñado en la compañía [Ericsson](http://es.wikipedia.org/wiki/Ericsson) para realizar aplicaciones distribuidas, tolerantes a fallos, soft-[real-time](http://es.wikipedia.org/wiki/Inform%C3%A1tica%5Fo%5FComputaci%C3%B3n%5Fen%5Ftiempo%5Freal) y de funcionamiento ininterrumpido. Proporciona el [cambio en caliente](http://es.wikipedia.org/wiki/Hot%5FSwap) de código de forma que éste se puede cambiar sin parar el sistema. Originalmente, Erlang era un lenguaje propietario de Ericsson, pero fue cedido como [software de código abierto](http://es.wikipedia.org/wiki/Software%5Fde%5Fc%C3%B3digo%5Fabierto) en 1998\. La implementación de Ericsson es, principalmente interpretada pero también incluye un compilador [HiPE](http://es.wikipedia.org/wiki/HiPE) (sólo soportado en algunas plataformas).

**_Instalando Erlang en Ubuntu_**  
  
Instalarlo en Ubuntu no lleva mucha magía simplemente haciendo  
  
sudo apt-get -y install erlang

  
En ubuntu abrímos una Shell Interactiva de Erlang escribiendo  

```
 admin@kaizen-pc:/$ erl   
 Erlang R16B01 (erts-5.10.2) [source] [64-bit] [async-threads:10] [kernel-poll:false]   
 Eshell V5.10.2 (abort with ^G)   
 1> 1 + 1.   
 2   
 2> 400 / 2.   
 200.0   
 3> (100 * 2) / 2.   
 100.0   

```

  
Despues de probar unas cuestiones básicas de aritmetica y siguiendo la introducción que está traducida nos damos cuenta que las variables no se pueden variar.  

> cambiar el valor de cualquier variable esta estrictamente prohibido \[3\] \[4\]

  
```
 4> One = 1.  
 1  
 5> One = 2.  
 ** exception error: no match of right hand side value 2  

```

  
Esto es debido a que un lenguaje puramente funcional solamente acepta la asignación única (Single assignment). \[5\]   
Prestar atención en la shell que debemos terminar las instrucciones con un ".". La cuestión de las variables puede parecer bastante extraño para quienes usamos otro tipo de lenguajes como Python o etc. El tema es que si lo ves desde el lado de la matemática tiene mucho sentido.  
  
```
 y = 2  
 x = y + 3  
 x = 2 + 3  
 x = 5  

```

\[6\]  
  
Otro término que puede sonar extraño pero a la vez una vez entendido tiene bastante lógica es la Transparencia Referencial \[7\]  
  
Que es por el mismo motivo que no se puede hacer asignación multiple ya que si uno dice que  
  
```
 x = agregar_dos_a(3) = 5   
 # ya que el resultado de agregarle 2 a 3 siempre es 5  

```

  
Pero en casos como la fecha de hoy.  
  
```
 x = today() = 2009/10/22  
  -- espera un dia --  
 x = today() = 2009/10/23  
 x = x  
 ∴ 2009/10/22 = 2009/10/23  

```

  
En Erlang se opta por la practicidad por sobre la teoria cuando es necesario.  
  
Erlang además de ser un lenguaje de programación funcional es además concurrente. Para esto usa el modelo de actor \[8\] del que posiblemente haga un Post en otro momento. Pero para resumirlo un actor es un proceso separado en la máquina virtual. Para hacer un paralelismo con la vida real sería algo así como una persona encerrada en una oficina esperando que le lleguen peticiones para responderlas y nada más que eso. Imagínense entonces muchas de estas personas esperando las peticiones y respondiendolas según corresponda o ignorándolas. Por consiguiente podrías pedirle a muchas personas que hagan pequeñas tareas y las acciones de cada uno no afectarían a los demás.  
  
Creo que vamos a dejarlo por acá por el momento hay mucho para leer con respecto a la invariabilidad de las variables, la transparencia referencial y el modelo de actor. Seguramente en el próximo veremos un poco más sobre algunos tipos de variables que se pueden usar, etc. Capaz un "hello world" no sé veremos. Hay todo un año todavia!!!  
  
\[0\] <http://marianoguerra.org/>  
\[1\] <http://blog.deploshark.com.ar/2013/10/tacticas-de-disponibilidad-recuperacion.html>  
\[2\] [http://erlang.org.ar/](http://erlang.org.ar/%EF%BB%BF)  
[ ](http://erlang.org.ar/%EF%BB%BF)\[3\] <http://erlang.org.ar/AEIntroduccion>  
\[4\] <http://erlang.org.ar/AEComenzandoRealmente> \- Variables Invariables  
\[5\] <http://en.wikipedia.org/wiki/Single%5Fassignment#Single%5Fassignment>  
\[6\] <http://erlang.org.ar/AEIntroduccion> \- Entonces que es Erlang?  
\[7\] <http://es.wikipedia.org/wiki/Transparencia%5Freferencial>  
\[8\] <http://en.wikipedia.org/wiki/Actor%5Fmodel>
