---
title: "No debugger con Prints"
description: "Referencia: Es una burda traducción del siguiente link..."
pubDate: 2012-06-19
tags: []
draft: false
legacy: true
---

**Referencia: Es una burda traducción del siguiente link**  
http://inventwithpython.com/blog/2012/04/06/stop-using-print-for-debugging-a-5-minute-quickstart-guide-to-pythons-logging-module/  
  
**No usar "print" para debugging. Una guia rápida sobre el modulo logging de Python**  
\* Este tutorial es corto.  
\* Para detectar errores en el codigo de tu programa seguro utilizarás print para mostrar el valor de las variables.  
\* No hagas eso. Usa el modulo logging de Python.  
  
Logging es mejor que usar print por las siguientes razones:  
  
Es fácil agregarle una marca de tiempo a cada mensaje, lo cual es muy útil.  
Se pueden clasificar los mensajes en diferentes niveles de urgencia y filtrar los menos urgentes.  
Cuando luego se necesite buscar y remover los mensajes del registro no se confundirá con los print() reales del código.  
Si se imprime en un archivo de registro es fácil sacar las funciones de loggeo e ignorar las que no se necesitan.(No se necesita llamar a la función print a cada rato)  

  
Usar print ocupa mucho tiempo a los programadores. En su lugar se recomienda usar logging. También es necesario aprendar a usar el debugger de Python para depujrar errores y pylint para evitar bugs y hacer que tu código sea legible.  
  
Para **imprimir mensajes en la pantalla**, copiar y pegar este código:  
  
> import logginglogging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')logging.debug('This is a log message.')

  
Para **imprimir mensajes de log en un archivo**. Tu puedes copiar y pegar este código (la diferencia en negrita)  
  
> import logginglogging.basicConfig(**filename='log\_filename.txt',**level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')logging.debug('This is a log message.')

 Luego se corre el programa y el nuevo registro se va a añadir al final del archivo de log, en lugar de sobreescribir el archivo.  
  
  
Para poder combinar las opciones mencionadas anteriormente, se debe copiar y pegar el siguiente código:  
  
  
> `import logging` `logger = logging.getLogger()` `logger.setLevel(logging.DEBUG)`formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')  
> fh = logging.FileHandler('log\_filename.txt')  
> fh.setLevel(logging.DEBUG)  
> fh.setFormatter(formatter)  
> logger.addHandler(fh)  
> ch = logging.StreamHandler()  
> ch.setLevel(logging.DEBUG)  
> ch.setFormatter(formatter)  
> logger.addHandler(ch)  
> `logger.debug('This is a test log message.')`

Así nos aseguramos de que la variable logger sea global para que se puede usar en todas las funciones. (No se necesita definir "global logger" arriba de la función por que la variable logger es de solo léctura y no puede ser modificada).  
  
  
Los diferentes niveles de Logging, desde el más alto al más bajo, son:  
  
  
> 1\. CRITICAL2\. ERROR3\. WARNING4\. INFO5\. DEBUG

El setLevel() asigna el mínimo nivel de logging para el log actual. Así que si usás el fh.setLevel(logging.ERROR), entonces los mensajes de WARNING, INFO, y DEBUG no son escritos en el archivo de log. (fh (fh=file handler)se refiere a un controlador para un archivo de log, al contrario de ch que es el controlador para la pantalla de consola (ch=console handler)).  
  
  
Para escribir un mensaje de registro en uno de los niveles, se usa una de las siguientes funciones:  
  
  
1\. logger.critical('Este es un mensaje crítico.')  
2\. logger.error('Este es un mensaje de error.')   
3\. logger.warning('Este es un mensaje de warning.')   
4\. logger.info('Este es un mensaje informativo.')   
5\. logger.debug('Este es un mensaje de depuracion de bajo nivel.')   
  
Se puede hacer más con el Logging, pero todo lo que necesitás saber para no volver a usar print en tus trabajos para depuración.  
  
Para los insaciables la documentación de Python tiene mucha más información incluyendo un [Tutorial Básico](http://docs.python.org/howto/logging.html#logging-basic-tutorial), [Tutorial Avanzado](http://docs.python.org/howto/logging.html#logging-advanced-tutorial) y un [Libro de Cocina Logging](http://docs.python.org/howto/logging-cookbook.html#logging-cookbook).  
  
Además, el pprint.pprint() es groso para "prints bonitos" de listas, diccionarios que tienen listas o diccionarios anidados. El pprint.pformat() devuelve la cadena del contenido, en lugar de imprimirlo en la pantalla.
