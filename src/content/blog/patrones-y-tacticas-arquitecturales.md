---
title: "Patrones y Tácticas Arquitecturales"
description: "Un patrón arquitectural Es un paquete de decisiones de diseño que es encontrado repetidamente en la práctica. tiene propiedades conocidas que permiten..."
pubDate: 2014-02-08
tags: ["patrones", "tacticas", "practice", "arquitectura", "software"]
draft: false
legacy: true
---

Un patrón arquitectural  
  
  
* Es un paquete de decisiones de diseño que es encontrado repetidamente en la práctica.
* tiene propiedades conocidas que permiten reusarlo, y
* describe una clase de arquitecturas

Por que los patrones son (por definición) encontrados repetidamente en la práctica, uno no los inventa; uno los descubre.

Las tácticas son más simples que los patrones. Las tácticas tipicamente usan solo una simple estructura o mecanismo computacional, y están destinados a significar una simple fuerza arquitectónica. Por esta razón se les da un control más preciso a un arquitecto cuando hace decisiones de diseño de patrones, que tipicamente combina múltiples decisiones de diseño en un paquete. Las tácticas son los "bloques de construcción" de diseño a partir del cual los patrones arquitecturales son creados. Las tácticas son átomos y los patrones son moléculas. 

  
Un patrón arquitectural establece una relación entre ellos:

* Un contexto. Una recurrente, situación común en el mundo que da a plantear un problema.
* Un problema. El problema, apropiadamente generalizado, que surge en el contexto dado.
* Una solución. Una resolución arquitectural exitosa a el problema.

Sistemas complejos exhiben múltiples patrones de una sola vez.

  
Los patrones pueden ser categorizados por el tipo de elementos dominante que muestran. patrones de módulos, muestran módulos. patrones de conectores-componentes muestran componentes y conectores. y los patrones de asignación muestran una combinación de elementos de software (módulos, componentes, conectores ) y elementos que no son de software. Los patrones más publicados son los patrones C&C, pero hay patrones de módulos y de asignación también. 

  
Un patrón es descrito como una solución a una clase de problemas en un contexto general. Cuando un patrón es elegido y aplicado, el contexto de esta aplicación se vuelve muy especifico. Un patrón documentado por lo tanto es poco especifico con respecto a la aplicación de una situación especifica. Podemos hacer un patrón más especifico a nuestro problema añadiéndole tácticas. Aplicando tácticas sucesivas es como pasar a través de un espacio de juego, y es un poco como el ajedrez: las consecuencias de el siguiente movimiento son importantes y observas varios movimientos por adelantado es útil.
