---
title: "Patrones de Diseño - Factory Method y Prototype"
description: "Factory Method Proposito, Define una interfaz para crear un objeto, pero permite a las subclases decidir que clases instancia. Factory Method permite a una..."
pubDate: 2014-03-17
tags: ["patrones", "factory", "python", "prototipo", "method", "diseño", "prototype"]
draft: false
legacy: true
---

**_Factory Method_**

**_Proposito,_**  
  
Define una interfaz para crear un objeto, pero permite a las subclases decidir que clases instancia. Factory Method permite a una clase derivar la instanciación a las subclases.  
  
_**Motivo**_  
  
Los Frameworks usan clases abstractas para definir y mantener relaciones entre objetos. Un framework es normalmente responsable por crear estos objetos.  
Considerar un framework para aplicaciones que pueda presentar multiples documentos a el usuario. Dos abstracciones claves en este framework son las clases Aplicacion y Documento. Ambas clases son abstractas, y los clientes tienen las subclases de ellas para realizar la implementación especifica de la aplicación. Para crear una aplicación de dibujo, por ejemplo, nosotros definimos las clases DrawingApplication y DrawingDocument. la clase Application es responsable para manejar Documents y los creará como sea requerido - cuando el usuario selección Abrir o nuevo desde un menu, por ejemplo.  
  
El patrón Factory Method ofrece una solución. Este encapsula el conocimiento de que subclase Document crear y mueve este conocimiento por fuera del Framework.  
  
**_Aplicabilidad_**  
  
Usa el patrón Factory Method cuando,  
  
* Una clase no puede anticipar la clase del objeto que debe crear.
* Una clase quiere que sus subclases especifiquen el objeto a crear.
* Las clases delegan la responsabilidad a una o muchas subclases auxiliares, y tu deseas localizar el conocimiento de que subclase auxiliar es la delegada.

**_Participantes,_**

* Product, define la interfaz de objetos que el Factory Method crea.
* ConcreteProduct, implementa la interfaz de Product.
* Creator, declara el Factory Method, que retorna un objeto de tipo Product. El creador también puede definir una implementación predeterminada de el Factory method que retorne un objeto ConcreteProduct predeterminado. Puede llamar al Factory Method para crear un objeto Product.
* ConcreteCreator, sobreescribe el Factory Method para return una instancia de un ConcreteProduct.

  
**_Ejemplos de Factory Method en Python._**

**_Estos son dos ejemplos más que interesantes. \[0\]\[1\]_**

  
**_Prototype_**

  
**_Intento,_**

Especificar los tipos de objetos a crear usando una instancia como prototipo. y crear nuevos objeto copiando este.

  
_**Motivación,**_

  
Podrías construir un editor para partituras personalizando un framework general para editores gráficos, y agregando nuevos objetos que representen notas, silencios, y pentagramas. El Framework editor podría tener una paleta de herramientas para agregar estos objetos de música a la partitura. La paleta debería también incluir herramientas para seleccionar, mover y otro tipo de manipulación de objetos musicales. 

  
El framework provee un clase Graphics abstracta para los componentes gráficos, como son las notas y pentagramas. Provee una clase Tools para definir herramientas como esas en la paleta. El Framework también predefine un subclase Graphic-Tool para herramientas que crean instancias de objetos gráficos y agrega estos al documento.

  
Pero GraphicTool presenta un problema al diseñador del framework. Las clases para notas y pentagramas son especificas de nuestra aplicación, pero la clase GraphicTool pertence al framwork. GraphicTool no sabe como crear instancias de nuestras clases de musica para agregarlas a la partitura. Nosotros podríamos definir subclases de GraphicTool para cada tipo de objeto de música que instancia. Nosotros sabemos que la composición de objetos es una alternativa flexible al subclaseo. La pregunta es, como puede el framework usarlo para parametrizar instancias de GraphicTool por la clase de Graphic que se supone crear?.
  
  
La solución está en hacer que GraphicTool cree un nuevo Graphic copiando o "clonando" una instancia de una subclase de Graphic. Nosotros llamamos a esta instancia un prototipo. GraphicTool es parametrizado por el prototipo que debería clonar y agregar a el documento. Si toda Subclase de Graphic soporta una operación Clone, entonces la GraphicTool puede clonar cualquier tipo de Graphic.

  
**_Aplicabilidad,_**

  
Usa el patrón Prototype cuando un sistema deberia ser independiente de como sus productos son creados, compestos y representados; and

  
* Cuando las clases a instancia son especificadas en tiempo de ejecución, por ejemplo, por carga dinámica, o
* para evitar la construcción de una jerarquia de clases de Factories que sean paralelas a la jerarquia de clases de productos, o
* cuando las instancias de una clase puedan tener una de solo unas pocas combinaciones diferentes de estado. Esta deberia ser más conveniente para instalar un número correspondiente de prototupos y clonarlos en lugar de instanciar la clase manualmente, cada vez con el estado apropiado.

_**Participantes**_

* Prototype, declara una interfaz para clonarse a si mismo.
* ConcretePrototype, implementa una operación para clonarse a si mismo.
* Cliente, crea un nuevo objeto pidiendole a un prototipo que se clone a si mismo.

**_Ejemplos del Patron Prototype en Python que tiene hasta formas PreConstruidas para este fin._**

**_\[2\] \[3\]_**

  
\[0\] <http://python-3-patterns-idioms-test.readthedocs.org/en/latest/Factory.html>

\[1\] <http://www.informit.com/articles/article.aspx?p=2131418&seqNum=3>

\[2\] <http://www.informit.com/articles/article.aspx?p=2131418&seqNum=4>

\[3\] <http://code.activestate.com/recipes/86651-prototype-pattern/>
