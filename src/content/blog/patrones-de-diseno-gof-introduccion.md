---
title: "Patrones de Diseño - GoF - Introducción"
description: "\"Programa una interfaz, no una implementación\" No declares variables para ser instancias especiales de una clase concreta. En su lugar, genera solo una..."
pubDate: 2014-03-01
tags: ["patrones", "gang of four", "python", "programación", "diseño", "introducción", "gof"]
draft: false
legacy: true
---

**"Programa una interfaz, no una implementación"**  
  
No declares variables para ser instancias especiales de una clase concreta. En su lugar, genera solo una interfaz definida por una clase abstracta.  
  
**Herencia Vs Composición**  
  
**La herencia** indica que una clase hereda muchas o todas sus características de una (o más) clase padre.  
  
Cuando en Python hacemos

```python
class Padre(object):
    def saltar(self):
        print 'Estoy saltando'

class Hijo(Padre):
    pass
```

Estamos diciendo que la clase Hijo hereda de Padre y le escribimos un "pass" para decir que no vamos a definir nada nuevo en esa clase. Entonces lo que sucederá es que el hijo va a heredar todo el comportamiento de su padre en este caso la clase hijo tiene de manera implícita el método "saltar" que hereda de su "Padre"  
  
Hay otros detalles sobre el uso de herencias múltiples en Python que van a poder ver con más detalle en los links de referencia al final del Post \[0\]  
  
**La composición** es definida en tiempo de ejecución a través de un objeto que adquiere referencias a otro objeto.Es un objeto que usa la interfaz de otro objeto lo que genera que se tenga que tener especial cuidado en el diseño. Y el objeto referenciado puede ser cambiado siempre que mantenga las mismas interfaces.  
  
Un ejemplo de composición podría ser el siguiente:

```python
Class HabilidadSalto(objetc):
    def ejecutar(self):
        print 'Estoy saltando'

Class Persona(object):
    def __init__(self):
        self.habilidadSaltar = HabilidadSalto()

    def saltar(self):
        self.habilidadSaltar.ejecutar()
```

No estoy seguro de que sea un ejemplo muy adecuado pero es aproximadamente a lo que se refiere básicamente un objeto tiene dentro suyo una referencia a otro objeto y usa la interfaz de este último para llamar a acciones concretas.  
  
**"Favorece la composición de objetos por sobre la herencia de clases"**  
**Delegación**  
La delegación es una manera de hacer composición tan potente para su reutilización como la herencia.  
Dos objetos son los involucrados donde uno recibe el pedido y delega la operación a su delegado. Un ejemplo podría ser el siguiente que yo escribí en Python basándome en la explicación del libro \[1\] Design Patterns de GoF.  
  
```python
class Rectangulo(object):
    def __init__(self, ancho, alto):
        self.ancho = ancho
        self.alto = alto

    def Area(self):
        return self.ancho * self.alto

class Ventana(object):
    def __init__(self, ancho, alto):
        self.rectangulo = Rectangulo(ancho, alto)

    def Area(self):
        self.rectangulo.Area()
```

Esto tiene ventajas como que la ventana podría cambiar su comportamiento en tiempo de ejecución tan solo reemplazando la referencia a la clase Rectángulo por una referencia a otra clase Circular. Esto suponiendo que Circular y Rectángulo son del mismo tipo.  
  
Las siguientes son causas comunes para el rediseño y como los patrones de diseño ayudan en ellas.  
  
1\. La creación de un objeto especificando una clase explicitamente. Especificar una nombre de clase cuando creas un objeto te compromete con una implementación particular, en vez de una particular interfaz.  
Patrones de Diseño: Abstract Factory, Factory Method, Prototype.  
  
2\. Dependencia de operaciones especificas. Cuando especificas una operación particular, te comprometes a una manera de satisfacer un pedido. Para evitar solicitudes codificadas específicamente, deberías hacer más fácil cambiar la manera en que un pedido es satisfecho ambos en tiempo de compilación y en tiempo de ejecución.  
Patrones de Diseño: Chain of Responsibility, Command.  
  
3\. Dependencia de la plataforma de Software y Hardware. Las Interfaces externas del sistema operativo y de la interfaces de programación de la aplicación (APIs) son diferentes en diferentes plataformas de hardware y software. Es importante por lo tanto que el diseño de tu sistema limite las dependencias de la plataforma.  
Patrones de Diseño: Abstract Factory, Bridge  
  
**4\. Dependencia de representaciones de objetos o implementaciones.** Los clientes que conocen como un objeto es representado, almacenado, asignado o implementado. puede ser que necesiten ser cambiados cuando el objeto cambie. Esconder esta infroma de los clientes mantiene los cambios en cascada.  
Patrones de Diseño,: Abstract Factory, Bridge, Memento, Proxy.  
  
5\. Dependencias Algorítmicas. Los algoritmos son a menudo extendidos, optimizados, y reemplazados durante el desarrollo y reuso. Los objetos que dependan de un algoritmo tendrán que cambiar cuando el algoritmo cambie.  
Patrones de diseño: Builder, Iterator, Strategy, Template, Method, Visitor.  
  
6\. Estrecho acoplamiento. Las clases que están estrechamente acopladas son dificiles de reusar en aislación, ya que dependen una de otra. El estrecho acoplamiento lleva a sistema moniliticos, donde no puedes cambiar o eliminar una clase sin entender o cambiar muchas otras clases.  
El Acoplamiento débil incrementa la probabilidad de que una clase puede ser reusada por si misma y que un sistema pueda ser aprendido, portado, modificado, y extendido más fácilmente.  
Patrones de Diseño: Abstract Factory, Bridge, Chain of responsibility, Command, Facade, Mediator, Observer.  
  
7\. Extender funcionalidad subclasificando. La personalización de un objeto por subclaseo a menudo no es fácil. Cada nueva clase tiene un implementación fijada desde el vamos (inicialización, finalización, etc). Definir una subclase requiere un profundo entendimiento de la clase padre.  
La composición en general y la delegación en paticular proveen alternativas flexibles a la herencia por combinación de comportamientos. Nuevas funcionalidades pueden ser agregadas a nuevas subclases por la composición de objetos en nuevas maneras antes que definir nuevas subclases de clases existentes.  
Patrons de Diseño: Bridge, Chain of Reponsibility, Composite, Decorator, Observer, Strategy  
  
8 Inhabilidad de alterar clases convenientemente. A veces tiene que modificar una clase que no puede ser modificada convenientemente. Quizás necesitas el código fuente y no lo tienes (como sería el caso de una librería comercial). O tal vez cualquier cambio requerirá la modificación de muchas de las subclases existentes. Los patrones de diseño ofrecen varias maneras de modificar clases en estas circunstancias.  
Patrones de Diseño: Adapter, Decorator, Visitor.  
  
En subsiguientes Posts estaré resumiendo o explicando según mi entendimiento otras partes de este libro que comencé a leer y que me interesa bastante.  
  
\[0\] http://learnpythonthehardway.org/book/ex44.html  
\[1\] http://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612
