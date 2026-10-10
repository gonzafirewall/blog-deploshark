---
title: "Patrones Creacionales - Singleton"
description: "Intento, Asegurar que una clase solo tiene una instancia y proveer un punto de acceso global. Motivacion Es importante para algunas clases tener exactamente..."
pubDate: 2014-03-18
tags: ["patrones", "singleton", "creacionales"]
draft: false
legacy: true
---

Intento,  
Asegurar que una clase solo tiene una instancia y proveer un punto de acceso global.  
  
Motivacion  
  
Es importante para algunas clases tener exactamente una sola instancia. Aunque puede haber muchas impresoras en un sistema, debe haber solo una cola de impresión. Debe ser solo un sistema de archivo y un administrador de ventanas. Un filtro digital tendrá un convertidor A/D. Un sistema contable será dedicado a server una compania.  
Como podemos asegurar que una clase tiene solo una instancia y que la instancia es facilmente accesible? Una variable global hace a un objeto accessible, pero no te resguarda de instanciar multiples objetos.  
  
Una mejor solución es hacer a la clase responsable de si misma para mantener un registro de una sola instancia. La clase puede asegurar que ninguna otra instancia puede ser creada(interceptando los pedidos para crear nuevos objetos), y puede proveer una manera de acceder a la instancia. Este es el Patrón Singleton.  
  
Aplicabilidad  
  
Usa el patrón Singleton cuando.  
  
* Debe haber exactamete una instancia de una clase, y esta debe estar accesible a los clientes de un punto de acceso conocido.
* Cuando la única instancia debería ser extensible por subclaseo, y los clientes deberían ser capaces de usar un instancia extendidad sin modificar su código.

Participantes

Singleton, define una operación de Instance que permite a los clientes acceder a la instancia unica. Instance es una operación de clase (que es, un metodo de clase en Smalltalk y una función miembro estático en C++).

Puede ser responsable por crear la propia única instancia.

  
Ejemplos del Patrón Singleton \[0\] \[1\] 

  
\[0\] <http://stackoverflow.com/a/1810367>

\[1\] <http://code.activestate.com/recipes/52558-the-singleton-pattern-implemented-with-python/>
