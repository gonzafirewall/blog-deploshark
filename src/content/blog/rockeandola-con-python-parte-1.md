---
title: "Rockeandola con Python Parte 1"
description: "Tomando como base un Post [0] muy interesante del que dejo referencia más abajo intentaré ahondar en mi propia explicación sobre lo que aprendí al respecto,..."
pubDate: 2014-02-19
tags: ["rockeandola", "python", "magic methods", "métodos mágicos", "avanzado", "atributos bajo demanda", "parte 1"]
draft: false
legacy: true
---

Tomando como base un Post \[0\] muy interesante del que dejo referencia más abajo intentaré ahondar en mi propia explicación sobre lo que aprendí al respecto, ya que estoy en un momento en el que intento mejorar y profesionalizar mi forma de escribir código Python.  
  
Métodos Mágicos \[1\]  
  
> What are magic methods? They're everything in object-oriented Python. They're special methods that you can define to add "magic" to your classes.

Estos métodos normalmente están encerrados entre "\_\_" (doble guion bajo o underscore para los que saben inglés). Un ejemplo es \_\_add\_\_ que se llama cuando se hace entre dos objetos la operación de suma. En el Shell Interactivo de Python le pedimos un poco de ayuda sobre que hace el Entero 4 y nos dice lo siguiente   
  
\>>> help(4)  
Help on int object:  
  
class int(object)  
| int(x\[, base\]) -> integer  

(Resumido)

| \_\_add\_\_(...)

| x.\_\_add\_\_(y) <==> x+y

  
Entonces podríamos hacer cosas Interesantes o locas como por ejemplo  
  
class Hombre(object):  
def \_\_init\_\_(self, nombre):  
self.nombre = nombre  
  
def \_\_add\_\_(self, Persona):  
if isinstance(Persona, Mujer):  
return Hijo()  
  
class Mujer(object):  
def \_\_init\_\_(self, nombre):  
self.nombre = nombre  
  
def \_\_add\_\_(self, Persona):  
if isinstance(Persona, Hombre):  
return Hijo()  
  
class Hijo(object):  
def \_\_init\_\_(self):  
self.nombre = raw\_input('Despues de nueve meses has tenido un hijo\\nPonle un nombre: ')  
  
\>>> from suma\_clases import \*  
\>>> juan = Hombre('Juan')  
\>>> martina = Mujer('Martina')  
\>>> hijo = juan + martina  
Despues de nueve meses has tenido un hijo  
Ponle un nombre: Sergio  
\>>> hijo.nombre  
'Sergio'  

  
Este es un ejemplo burdo pero imagínense las posibilidades? Hacer suma de objetos que cambien dinamicamente su comportamiento o contengan comportamientos nuevos según si se lo suma con tal o cual otro. Además de la legibilidad que le agrega hacer una suma como una suma y no con una funcion llamada sumar() o add(). Lo mismo se puede hacer con muchas otras cosas como por ejemplo para comparar si dos objetos son iguales. \[2\]  
  
Se muestra el ejemplo de agregarle el eq a la clase mujer:  
class Mujer():  
(Resumido)  
def \_\_eq\_\_(self, Persona):  
if isinstance(Persona, Hombre):  
print 'Todos somos iguales'  
return True  
else:  
return False  

  
\>>> from suma\_clases import \*  
\>>> juan = Hombre('Juan')  
\>>> martina = Mujer('Martina')  
\>>> juan == martina  
Todos somos iguales  
True  

  
Por lo que aprender a usar BIEN estos métodos mágicos seguramente te ayude a hacer hermosas APIs y código no solo más legible sino más bonito.  
  
Otro cosa que me tocó hacer para un proyecto del trabajo es sobrecargar el \_\_setattr\_\_ de SQLObject para que haga un trigger o update en una tabla cuando se cambiaba cierta columna que es representada como una propiedad de esa clase.  
  
Esto lo hice con el ejemplo que transcribo acá \[3\].  
  
```
class Comment(SQLObject):
    User = ForeignKey('TG_User')
    Created = DateTimeCol(notNone=True, default=datetime.now())
    Modified = DateTimeCol(notNone=True, default=datetime.now())
    Subject = StringCol(length=200)
    Body = StringCol()

    def __setattr__( self, name, value ):
        super( Comment, self ).__setattr__( name, value )
        if name in self.sqlmeta.columns.keys():
            super( Comment, self ).__setattr__( 'Modified', datetime.now() )
```

  
En mi caso además de modificar la fecha de actualización en la tabla debía agregar unos datos en una tabla que sirve como historial.  
  
Atributos bajo demanda  
  
En python todo funciona como fuera un diccionario por eso se pueden listar todos los atributos llamando al atributo de solo lectura llamada \_\_dict\_\_  
  
\>>> juan = Hombre('Juan')  
\>>> juan.\_\_dict\_\_  
{'nombre': 'Juan'}  
Usando ese atributo \_\_dict\_\_ podemos por ejemplo agregarle a esa instancia un atributo que no viene en la Clase de la que fue instanciada. Como por ejemplo  

\>>> juan.\_\_dict\_\_\['nombre\_falso'\] = 'Pedro'

\>>> juan.\_\_dict\_\_

{'nombre': 'Juan', 'nombre\_falso': 'Pedro'}

\>>> juan.nombre\_falso

'Pedro'

  
Algo mucho más interesante para hacer es utilizarlo para hacer que una clase tenga como atributos cualquier cosa que se le pase como parámetros nombrados.

  
class Example(object): 

def \_\_init\_\_(self, \*\*kwargs): 

self.\_\_dict\_\_.update(kwargs)

  
Que se usaría de esta manera.

  
\>>> ej = Example(nombre='Gonzalo', perro='Chicho', facebook=True)

\>>> ej.nombre

'Gonzalo'

\>>> ej.perro

'Chicho'

\>>> ej.facebook

True

  
El post de magmax es más largo y yo lo voy a partir en pedacitos para ver si además de decirlo con mis palabras lo puedo extender con experiencias propias. Asi que los veo en las siguientes partes.

  
\[0\] http://magmax.org/2013/09/30/python-avanzado.html  
\[1\] http://www.rafekettler.com/magicmethods.html  
\[2\] http://www.rafekettler.com/magicmethods.html#comparisons  
\[3\] http://turbogears.org/1.0/docs/SQLObject/AutoUpdateField.html
