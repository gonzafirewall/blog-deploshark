---
title: "Modelo de Actor - Concurrencia"
description: "Una vez definido vamos a avanzar con una explicación a mi entender de un video muy interesante que para quienes sepan ingles recomiendo escuchar.[0] Ya que..."
pubDate: 2014-01-06
tags: ["actor", "hewitt", "concurrencia", "paralelismo", "meijer", "modelo"]
draft: false
legacy: true
---

Una vez definido vamos a avanzar con una explicación a mi entender de un video muy interesante que para quienes sepan ingles recomiendo escuchar.\[0\] Ya que es una entrevista/explicación al/del creador de este modelo.  

> El modelo de actor en Ciencias de la computación es un modelo matemático de computación concurrente que trata a los "actores" como la unidad de computación más primitiva de concurrencia digital: En respuesta a un mensaje que recibe, un actor puede hacer decisiones locales, crear más actores, enviar más mensajes, y determinar como responder al siguiente mensaje recibido. El modelo de actor originado en 1973 ha sido usado como marco de trabajo para una comprensión teórica de la computación, y como una base teórica para muchas de implementaciones prácticas de Sistemas Concurrentes. \[1\] (traducción libre del articulo de Wikipedia)

  
Según nuestro video Hewitt nos dice:  
"El actor es la unidad fundamental de computación que incorpora tres cosas, incorpora procesamiento por que necesita realizar algo, incorpora almacenamiento por que tiene que tener la capacidad de recordar cosas, y guardar cosas, y tiene que incorporar comunicación, Por consiguiente un actor es la unidad primitiva que incorpora las tres cosas esenciales para la computación"  
  
Actor  
1. procesamiento
2. almacenamiento
3. comunicación
Axiomas  
Que es lo que hace un actor cuando recibe un mensaje.  
1. Crear más actores.
2. Enviar mensajes a actores que conoce.
3. Designar que es lo que va a hacer con el mensaje siguiente.
Meijer consulta: Puede un "actor" hacer cosas en paralelo?  
  
Hewitt: En una primera aproximación un actor procesa un mensaje a la vez. Pero los implementadores no tienen "tuberías de mensajes" en ciertos casos y si se procesa un mensaje de la misma manera que se procesa a otro como sucede en un factorial entonces puedes hacer todos ellos al mismo tiempo por consiguiente con un factorial puedes procesar muchos mensajes arbitrarios al mismo tiempo.  
  
Meijer resume esto diciendo: "Conceptualmente se procesa un mensaje a la vez pero la implementación lo hace más concurrente."  
  
Aplicaciones \[2\]  
  
El modelo de actores puede ser usado para modelado, comprensión y razonamiento de un gran rango de sistemas concurrentes. Por ejemplo.  
  
  
* Correo Electrónico: Puede ser modelado como un Sistema Actor, Las cuentas son modeladas como actores y las direcciones de correo como direcciones del actor.
* Web Services: Puede ser modelado con extramos SOAP como direcciones de actor.
* Objetos con bloqueos, pueden ser modelados como un Serializador, a condición de que sus implementaciones son tales que los mensajes puede llegar continuamente (quizás siendo almacenados en una cola interna). Un serializador es un importante tipo de actor definido por la propiedad de su continua disponibilidad a el arribo de nuevos mensajes; cada mensaje enviado a un serializador es garantizado que llegará a destino.
* Esta va a ser la explicación por el momento es una manera de pensar los sistemas bastante interesante. Veremos si podemos hacer algo en un futuro que lo aplico escribiéndolo directamente en Erlang.  
    
También recomiendo el siguiente vídeo \[3\] que si bien tiene que ver con Ruby habla sobre el modelo de actor.  
    
    
\[0\] <http://www.youtube.com/watch?v=7erJ1DV%5FTlo>  
\[1\] <http://en.wikipedia.org/wiki/Actor%5Fmodel>  
\[2\] <http://en.wikipedia.org/wiki/Actor%5Fmodel> \- Applications  
\[3\] <http://www.youtube.com/watch?v=6tWqttfxjjY>
