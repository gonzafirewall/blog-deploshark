---
title: "Rockeandola con Python Parte 2"
description: "Siguiendo los pasos de magmax [0] Diccionarios que se comportan como objetos En este ejemplo vamos a crear una clase que hereda todas las funcionalidades de..."
pubDate: 2014-02-23
updatedDate: 2014-03-02
tags: ["staticmethod", "clausuras", "python", "closures", "decoradores", "diccionarios", "generadores", "classmethod"]
draft: false
legacy: true
---

Siguiendo los pasos de magmax \[0\]  
  
**Diccionarios que se comportan como objetos**  
  
En este ejemplo vamos a crear una clase que hereda todas las funcionalidades de un diccionario solo vamos a modificar las funciones de obtener el atributo y de asignarle un atributo para interfacearlos con los del diccionario.  
  
Esta es la definición de la clase:

```python
class DictObject(dict):
    def __getattr__(self, key):
        return self[key]

    def __setattr__(self, key, value):
        self[key] = value
```

Esta es la implementación de la misma.

```python
>>> d = DictObject()
>>> d['uno'] = 'one'
>>> d.uno
'one'
>>> d['uno']
'one'
```

Hacer esto nos genera un inconveniente por que las clases para los atributos tienen ciertas restricciones como que no se pueden comenzar con números, contener espacios ni otros signos de puntuación por consiguiente va a haber valores que no vamos a poder usar.  
  
**Closures == Clausura <> Torneo Clausura**  
  
Siguiendo una recomendación que se dá en los comentarios del Post de JuanjoConti\[1\] voy a tratar de contarles antes de empezar con los decoradores que es un Closure.  
  
> En [Informática](http://es.wikipedia.org/wiki/Inform%C3%A1tica), una clausura es una función que es evaluada en un entorno conteniendo una o más [variables](http://es.wikipedia.org/wiki/Variable%5F%28programaci%C3%B3n%29) dependientes de otro entorno. Cuando es llamada, la función puede acceder a estas variables. El uso explícito de clausuras se asocia con [programación funcional](http://es.wikipedia.org/wiki/Programaci%C3%B3n%5Ffuncional) y con lenguajes como el [ML](http://es.wikipedia.org/wiki/ML) y el [Lisp](http://es.wikipedia.org/wiki/Lisp). Construcciones como los objetos en otros lenguajes pueden ser también modelados con clausuras. \[2\]

Un ejemplo de clausura es puede observar en la implementación de los decoradores a continuación.  
  
**Decoradores**  
  
Un decorador es una función 'a' que recibe como argumento otra función 'b' y devuelve una función 'c' que es la función 'b' decorada con 'a'.  
  
Imaginemos que necesitamos loggear el acceso y salida de una función por pantalla.  
  
```python
>>> def avisar(f):
...     def inner(*args, **kwargs):  # Esta es una clausura
...         print 'Se ejecuta la funcion %s' % f.__name__
...         f(*args, **kwargs)
...         print 'Se termino de ejecutar %s' % f.__name__
...     return inner
...
>>> def SumaLoca(a, b):
...     print a + b
...
>>> SumaLoca(10, 5)
15
>>> avisarSumaLoca = avisar(SumaLoca)
>>> avisarSumaLoca(10, 6)
Se ejecuta la funcion SumaLoca
16
Se termino de ejecutar SumaLoca
```

Ahora esta función decorada nos avisará sobre su ejecución o finalización.  
  
Desde Python 2.4 en adelante se ha añadido Azucar a la cosa esto lo hace un lenguaje más dulce (Cuak!) ( a esto se le llama Azucar Sintáctica) y nos permite hacer lo mismo pero de la siguiente forma.  
  
```python
>>> @avisar
... def SumaLoca(a, b):
...     print a + b
...
>>> SumaLoca(10, 6)
Se ejecuta la funcion SumaLoca
16
Se termino de ejecutar SumaLoca
```

Esta es una manera mucho más visual para hacerlo.  
  
Una explicación mucho mejor al respecto van a encontrar en la edición Nro 4 de TheOriginalHackers \[3\] que está pronta a salir \[4\].  
  
**@staticmethod @classmethod**  
  
Leyendo un poco para arrancar esta seríe de Posts! es que entré al Blog de magmax y encontré la solución a algo que siempre me pregunté. Por ejemplo para que quiero el parametro self en una método de una clase cuando ese método no toca nada de la clase. Bueno a explicarlo.  
  
@staticmethod es un decorador que se utiliza para crear metodos que no requieren acceso a la clase principal.  
@classmethod es decorador que reemplaza el paso de la variable self (que es una instancia de la clase) que es la predeterminada en cada metodo de una clase por la clase misma (o sea sin implementar).  
  
Un ejemplo excelente de un buen uso acá \[5\]  
  
**Generadores**   
Son funciones que devuelven resultados poco a poco y para esto lo hacen retornando un valor y retomando la ejecución desde ese punto en adelante generalmente dentro de alguna instrucción de bucle o repetición.  
  
Ejemplo Kamikaze mío tiene que ver en crear un metodo que recorra urls y devuelva el titulo de la web de a poco.  
  
```python
from BeautifulSoup import BeautifulSoup as bs
import urllib

urls = ['http://www.google.com.ar', 'http://facebook.com', 'http://infobae.com.ar']

def recorrer_urls(urls):
    for url in urls:
        html = urllib.urlopen(url).read()
        soup = bs(html)
        yield soup.title
```

```python
In [2]: recorrer_urls(urls)
Out[2]:

In [3]: gen_urls = recorrer_urls(urls)

In [4]: gen_urls.next()
Out[4]: <title>Google</title>

In [5]: gen_urls.next()
Out[5]: <title id="pageTitle">¡Bienvenido a Facebook en Español!</title>

In [6]: gen_urls.next()
Out[6]: <title>"El Chapo" Guzmán - Tragedia de Once - WhatsApp - Telegram - Paritarias - Crisis política en Venezuela - Fotos - Infobae</title>
```

Esto es interesante cuando necesitemos recorrer una serie de datos pero no necesitamos que todos sean devueltos al mismo tiempo sino que se van generando dinamicamente uno a uno. \[6\]  
  
\[0\] <http://magmax.org/2013/09/30/python-avanzado.html>  
\[1\] <http://www.juanjoconti.com.ar/2008/07/11/decoradores-en-python-i/>  
\[2\] <http://es.wikipedia.org/wiki/Clausura%5F%28inform%C3%A1tica%29>  
\[3\] <http://www.originalhacker.org/>  
\[4\] <http://blog.deploshark.com.ar/2014/02/the-original-hacker-nro4.html>  
\[5\] <http://stackoverflow.com/a/12179752>  
\[6\] <http://www.alvarohurtado.es/generadores-en-python/>
