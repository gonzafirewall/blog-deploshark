---
title: "Patrones de Diseño Creacionales - Abstract Factory"
description: "Los patrones de diseño creacionales son aquellos que abstraen el proceso de instanciación. Ellos ayudan a hacer un sistema independiente de como sus objetos..."
pubDate: 2014-03-08
tags: ["patrones", "factory", "creacionales", "diseño", "design", "pattern", "abstract", "gof"]
draft: false
legacy: true
---

**Los patrones de diseño creacionales** son aquellos que abstraen el proceso de instanciación. Ellos ayudan a hacer un sistema independiente de como sus objetos son creados, compuestos, y representados. Una patrón creacional de clase usa herencia para variar la clase que es instanciada, mientras un patron creacional de objeto delegará la instanciación a otro objeto.  
  
Los patrones creacionales se vuelven importantes en sistemas que pasan a depender más de la composición de objetos que de la herencia de clases. Como eso sucede, el enfasis cambia de modificar dificilmente un conjunto fijo de comportamientos hacia definir un conjunto pequeño de comportamientos fundamentales que pueden ser compuestos dentro de cualquier numero de los más complejos. Creando así objetos con un comportamiento particular que requiere más que simplemente instanciar una clase.  
  
**Abstract Factory**  
  
Intenta:  
proveer una interfaz para la creación de familias objetos relacionados o dependientes sin especificar sus clases concretas.  
  
Aplicación:  
  
* Un sistema debería ser independiente de como sus productos son creados, compuestos, y representados.
* Un sistema debería ser configurado con una de múltiples familias de productos.
* Una familia de objetos producto relacionados es diseñada para ser usados juntos y necestás hacer cumplir esta restricción.
* Buscás proveer una biblioteca de clases de productos, y buscas revelar solo sus interfaces, no su implementación.

Participantes:

* Abstract Factory - declara una interfaz para operaciones que crean objetos producto abstractos.
* ConcreteFactory - implementa las operaciones para crear objetos producto concretos.
* AbstractProduct - declara una interfaz para un tipo de objeto producto.
* ConcreteProduct - define un producto objeto para ser creado por el correspondiente Concrete Factory. - implementa la interfaz del AbstractProduct.
* Client - usa solo las interfaces declaradas por las clases AbstractFactory y AbstractProduct
Ejemplos de Abstract Factory en Python

\[0\]\[1\]\[2\]

  
\[0\] http://python-3-patterns-idioms-test.readthedocs.org/en/latest/Factory.html#abstract-factories

\[1\] http://ginstrom.com/scribbles/2007/10/08/design-patterns-python-style/

\[2\] http://jpython.blogspot.com.ar/2012/09/python-design-pattern-abstract-factory.html
