---
title: "Una cortita if __name__ == __main__ by Gonza"
description: "Poné el codigo principal en una funcion y llamalo solo si el modulo actual esta siendo ejecutado desde la consola (actualmente tu programa se ejecutaria si..."
pubDate: 2012-03-23
updatedDate: 2012-04-17
tags: ["name", "python", "main"]
draft: false
legacy: true
---

Poné el codigo principal en una funcion y llamalo solo si el modulo actual esta siendo ejecutado desde la consola (actualmente tu programa se ejecutaria si lo importas desde otro modulo)  
➜ \~ cat programa.py  
print "siempre me ejecuto"  
def main():  
print "llamaron a main"  
if \_\_name\_\_ == "\_\_main\_\_":  
print "me ejecutaron de la consola"  
main()  
➜ \~ python programa.py  
siempre me ejecuto  
me ejecutaron de la consola  
llamaron a main  
➜ \~ python  
Python 2.7.2+ (default, Oct 4 2011, 20:03:08)  
\[GCC 4.6.1\] on linux2  
Type "help", "copyright", "credits" or "license" for more information.  
\>>> import programa  
siempre me ejecuto  
\>>> programa.main()  
llamaron a main  
\>>>  
  
Para referencias leer la siguiente doc. No sé si se entiende bien en la explicación pero lo que estamos haciendo es comprobando si \_\_name\_\_ es \_\_main\_\_ y si es así eso significa que el programa que hicimos en python está siendo llamado desde la consola o está siendo ejecutado directamente. Cuando esto no es así cuando \_\_name\_\_ es distinto de \_\_main\_\_ lo que podríamos estar haciendo es importando el programa para lo que necesitamos que el programa no se ejecute. Por hoy estamos recomiendo leer mucha documentación que está mucha en inglés pero hay mucha gente con buena onda que la tradujo.  
<http://docs.python.org/library/%5F%5Fmain%5F%5F.html>  
Powered By marianoguerra
