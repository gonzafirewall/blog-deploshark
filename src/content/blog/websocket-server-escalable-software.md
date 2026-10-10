---
title: "WebSocket Server Escalable Software"
description: "Pareciera que los servicios de WebSocket en la nube están de moda. Muchos proyectos proveen una abstracción sobre los websockets con un modelo de pago por..."
pubDate: 2014-12-15
tags: ["tornado-redis", "server", "python", "tornado", "sockjs", "escalablidad horizontal", "sockjs-tornado", "backend", "redis", "websockets", "pubsub"]
draft: false
legacy: true
---

Pareciera que los servicios de WebSocket en la nube están de moda. Muchos proyectos proveen una abstracción sobre los websockets con un modelo de pago por transacción que además parece ser bastante caro es masomenos entendible por que diseñar un servicio de WebSocket o de Publish/Subscribe parecería bastente dificil en principio pero no es más dificil que armar una API Rest sin framework hoy en día. Algunos datos del software que creo necesario para lograr hacer un WebSocket server escalable en Python obviamente ya que es el lenguaje que nos gusta en este Blog.  
  
**Tornado\[0\],** es un Framework para hacer aplicaciones Web principalmente pero también es muy conocido por tener una clase para manejo de WebSockets y hay benchmarks que lo comparan en velocidad de respuesta con nodejs un muy conocido lenguaje de programación basado en el motor v8 sobre el que corre javascript en los browsers. \[1\]  
  
**SockJS**\[2\], es principalmente una libreria de javascript que emula el funcionamiento de WebSockets intentando dar la mayor compatibilidad con los browsers a la vez que intenta mantener una interfaz muy similar al WebSocket puro. El único que inconveniente en principio es que para implementar sockjs y aprovechar todas sus caracteristicas se necesita una implementación del lado del servidor.   
  
**sockjs-tornado**\[3\], es una libreria que implementar sockjs sobre un servidor tornado, esto se hace cambiando la clase de la que se hereda el WebSocketHandler.   
  
**redis** \[4\], es un base de datos en memoria que utiliza como estructura principal key-value, donde las peticiones son hechas a traves de una clave y devuelven un valor, muy util para utilizar como cache. Pero en el caso de un WebSocket server vamos a usar una de sus caracteristicas como Publish/Subscribe \[5\].  
  
Antes de terminar con las tecnologias a usar voy contarles por que necesitamos un server con la modalidad de Publish/Subscribe. Una aplicación web masomenos bien diseñada puede escalar horizontalmente \[6\]\[7\], gracias a que hay un tercero donde comparten la información, y esa es la base de datos comunmente relacional del tipo SQL. En cuanto al WebSocket cada conexión hecha contra un servidor puede (en su implementación normal) solamente comunicarse con otros websockets dentro del mismo servidor por eso la única manera para hablar entre diferentes servidores es agregando a un tercero que maneje algo parecido a canales de comunicación y a eso viene la funcionalidad de Publish/Subscribe, que nos ofrece tener canales donde dos servidores o más pueden publicar y subscribirse y al subscribirse recibiran todos los mensajes que vayan a ese canal. De esa manera podemos levantar n servers sabiendo que todos los websockets aunque estén distribuidos si se subscriben al canal adecuado van a recibir los mensajes que les corresponden.  
  
**tornado-redis**\[8\] es una implementación de redis para tornado, lo que permite generar un solo cliente por instancia de tornado y manejar las subscripciones desde ahí, además, tiene una clase de abstracción para manejar subscripciones basadas en sockjs-tornado\[9\]  
  
Y eso creo que es todo ya tenemos todo un hermoso Stack de tecnologias para empezar a desarrollar nuestra aplicación web basada en Sockets ahora es cuestión de juntar todo y ponerse a escribir código.  
  
\[0\] <http://tornadoweb.org/>  
\[1\] <http://swizec.com/blog/benchmarking-node-tornado-and-django-for-concurrency/swizec/1616>  
\[2\] <http://sockjs.org/>  
\[3\] <https://github.com/MrJoes/sockjs-tornado>  
\[4\] <http://redis.io/>  
\[5\] <http://redis.io/topics/pubsub>  
\[6\] <http://blog.deploshark.com.ar/2014/01/otros-atributos-de-calidad-capitulo-12.html>  
\[7\] <http://es.wikipedia.org/wiki/Escalabilidad#Escalabilidad%5Fhorizontal>  
\[8\] <https://github.com/leporo/tornado-redis/>  
\[9\] <https://github.com/leporo/tornado-redis#pubsub>
