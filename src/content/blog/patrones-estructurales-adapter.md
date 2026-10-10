---
title: "Patrones Estructurales - Adapter"
description: "Los patrones estructurales se refieren a como las clases y objetos son compuestos para formar grandes estructuras. Los patrones de clase estructural usa..."
pubDate: 2014-03-19
tags: ["patrones", "adapter", "estructurales", "adaptador"]
draft: false
legacy: true
---

Los patrones estructurales se refieren a como las clases y objetos son compuestos para formar grandes estructuras. Los patrones de clase estructural usa herencia para componer interfaces o implementaciones. Como un ejemplo simple, considerar como la herencia múltiple mezcla dos o más clases dentro de uno. El resultado es una clase que combina las propiedades de su clase padre. Este patrón es particularmente útil para hacer que bibliotecas de clases desarrolladas independientemente trabajen juntas. Otro ejemplo es la forma de la clase del patrón Adapter. En general, un adaptador hace una interfaz (el adaptado) para ajustarse a otro, así provee una abstracción uniforme de diferentes interfaces. Una clase adaptador logra esto por la herencia privada desde un clase adaptada. El adaptador entonces expresa su interfaz en términos del adaptado.  
  
_**Adapter**_

  
**Intento,**  
Convertir la interfaz de una clase a otra interfaz que el cliente espera. Adapter permite que las clases trabajen juntas que de otro manera no podrían por que sus interfaces son incompatibles.  
  
**Motivación**  
A veces una clase de una caja de herramientas que es diseñada para su reutilización no es reutilizable solo por que sus interfaces no coinciden con la interfaz especifica del dominio que una aplicación requiere.  
Considera por ejemplo un editor de dibujo que permite a los usuarios dibujar y organizar los elementos gráficos (lineas, polígonos, texto, etc.) dentro de imágenes y diagramas. La clave del editor de dibujo es el objeto gráfico, que tiene una forma editable y puede dibujarse a si mismo. La interfaz para objetos gráficos es definido por una clase abstracta llamada Shape. El editor define una subclase de Shape por cada tipo de objeto gráfico: un clase LineShape para lineas, una clase PolygonShape para polígonos, y así sucesivamente.  
  
Clases para cada forma elemental de la geometría como LineShape y PolygonShape son bastante fáciles de implementar, porque su dibujo y capacidades de edición son limitados por la herencia. Pero una subclase TextShape que puede mostrar y editar texto es considerablemente más dificil de implementar, desde la edición de texto, incluso lo más básico consiste en la actualización constante de la pantalla y el manejo del buffer. Mientras tanto un producto listo para la interfaz de usuario es el kit de herramientas que deberia estár listo para proveer una sofisticada clase TextView para mostrar y editar texto. Idealmente, nos gustaría reusar TextView para implementar TextShape, pero el kit de herramientas no fue diseñado con la clase Shape en mente. Así que nosotros no podemos usar los objetos TextView y Shape de manera intercambiable.  
  
Como puede una clase existente y no relacionada como TextView trabajar en una aplicación que espera clases con una interfaz diferente e incompatible? Podríamos cambiar la clase TextView tal que sea ajuste a la interfaz de Shape, pero ese no es una opción a menos que nosotros tengamos acceso el código fuente del kit de herramientas. Incluso si lo tuvieramos, no tendría sentido hacer el cambio a TextView; el kit de herramientas no deberia tener que adoptar interfaces especificas del dominio solo para hacer que una aplicación funcione.  
  
En su lugar, definimos TextShape tal que esta _adapte_ la interfaz de TextView a Shape's. Podemos hacer esto en una o dos maneras: (1) por herencia de la interfaz de Shape e implementación de TextView o (2) componiendo una instancia de TextView con una TextShape e implementando TextShape en terminos de la interfaz de TextView. We call TextShape an **adapter.**  
**Aplicabilidad**  
Usa el patron Adapter cuando:  
  
* quiere usar una clase existente, y su interfaz no coincide con el que usted necesita.
* quiere crear una clase reutilizable que coopera con clases no relacionadas o imprevistas, es decir, clases que no necesariamente tienen interfaces compatibles.
* (solo adaptador de objetos) necesitas usar muchas subclases existentes, pero no es práctico adaptar su interfaz por subclaseo cada vez. Un objeto adaptador puede adaptar la intefaz de su clase padre.

**Participantes.**

Target, define la interfaz especifica del dominio que el cliente usa.

Cliente, colabora con objetos ajustándose a la interfaz del Target.

Adaptee, define una interfaz existente que necesita ser adaptada.

Adapter, adaptar la interfaz del Adaptee a la interfaz de Target.

  
**Ejemplos de uso en Python \[0\] \[1\]**

  
\[0\] <http://ginstrom.com/scribbles/2009/03/27/the-adapter-pattern-in-python/>

\[1\] <http://python-3-patterns-idioms-test.readthedocs.org/en/latest/ChangeInterface.html>
