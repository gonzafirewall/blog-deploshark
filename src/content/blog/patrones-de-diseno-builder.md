---
title: "Patrones de Diseño - Builder"
description: "Builder Objetivo , Separa la construcción de un objeto complejo de su representación de modo que el mismo proceso de construcción puede crear diferentes..."
pubDate: 2014-03-10
tags: ["builder", "patrones", "pattern", "diseño", "design"]
draft: false
legacy: true
---

**_Builder_**  
  
**Objetivo**, Separa la construcción de un objeto complejo de su representación de modo que el mismo proceso de construcción puede crear diferentes representaciones.  
  
**Motivo**:  
  
Un lector para el formato de intercambio de documentos RTF (Rich Text Format) debería ser capaz de convertir RTF a muchos formato de texto. El lector puede convertir documentos RTF en texto plano ASCII o en un Widget de texto que pueden ser editados interactivamente. El problema, sin embargo, es que el número de conversiones posible es abierto. Por lo tanto, debe ser fácil de añadir una nueva conversión sin modificar el lector.  
  
**Aplicabilidad**  
  
Usar el patrón Builder cuando:  
  
* El algoritmo para crear un objeto complejo deber ser independiente de las partes que conforman el objeto y como están ensambladas.
* El proceso de construcción debe permitir diferentes representaciones para el objeto que es construido.

**Participantes**

  
_Builder,_

\- especifica una interfaz abstracta para crear partes de un objeto Product.

_ConcreteBuilder_

\- construye y ensambla partes del productopara implementar la interfaz Builder.

\- define y mantiene un seguimiento de la representación que crea.

\- provee una interfaz para obtener el producto

_Director_

\- construye un objeto usando la interfaz del Builder.

_Product_

\- representa el objeto complejo en construcción. El ConcreteBuilder construye la representación interna del producto y define el procesos por el cual este es ensamblado.

\- incluye clases que definen las partes constituyentes, inclyendo interfaces para ensamblar las partes en el resultado final.

  
**Ejemplos de Código \[0\] \[1\]**

  
**La diferencia entre el Builder y el Abstract Factory**

La principal diferencia es que el Builder se enfoca en construir un objeto complejo paso a paso. El Abstract Factory hace incapié en la familia de objetos producto (ya sea sencilla o compleja). El Builder retorna el producto como un paso final, pero en cuanto al Abstract Factory el producto es retornado inmediatamente.
  
  
\[0\] http://es.wikipedia.org/wiki/Builder\_(patr%C3%B3n\_de\_dise%C3%B1o)  
\[1\] http://tratandodeentenderlo.blogspot.com.ar/2010/02/patrones-de-diseno-builder.html
