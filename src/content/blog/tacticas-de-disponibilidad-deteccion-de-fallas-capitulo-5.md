---
title: "Tácticas de Disponibilidad - Detección de fallas - Capitulo 5"
description: "Detección de fallas Antes de que cualquier sistema pueda tomar una acción luego de una falta, la presencia de la falla debe ser detectada o anticipada...."
pubDate: 2013-10-10
tags: []
draft: false
legacy: true
---

**Detección de fallas**  
Antes de que cualquier sistema pueda tomar una acción luego de una falta, la presencia de la falla debe ser detectada o anticipada. Tacticas en esta categoría incluyen las siguientes:  
  
**Ping/echo** refiere a un par de mensajes de pedido/respuesta asincronicos que son intercambiados entre nodos, son usados para determinar la accesibilidad y la demora en el ida y vuelta a través del camino de red asociado.  
  
**Monitor** un monitor es un componen que es usado para monitorear el estado de salud de varias otras prtes de el sistema: procesadores, procesos, Entrada/Salida, memoria y así sucesivamente. Un sistema monitor puede detectar la falla o congestión en la red u otros recursos compartidos. tal como un ataque de denegación de servicios.  
  
**Hearbeat**, es un mecanismo de detección que emplea un intercambio periodico de mensajes entre un sistema monitor y un proceso que está siendo monitoreado. La gran diferencia entre hearthbeat y ping/echo es quien tiene la responsabilidad para iniciarlizar el chequeo de saludo - el monitor o el componente en si mismo.  
  
**Time Stamp** Esta tactica es usada para detectar una sequencia incorrecta de eventos, primeramente en un sistema distribuido de transferencia de mensajes. Un estampado de tiempo (timestamp) de un evento puede ser establecido para asignar el estado de un reloj local a el evento inmediatamente despues de que un evento ocurra.  
  
**Chequeo de Sanidad,** chequea la validez o sensatez de una operación especifica o la salida de un componente. Esta táctica esta tipicamente basada en el conocimiento del diseño interno, el estado del sistema, o la naturaleza de la información bajo revisión.  
  
**Monitoreo de condicion**, envuelve el chequeo de las condiciones en un proceso o dispositivo o validando los supuestos hechos durante el diseño. Esta táctica previene que un sistema produzca fallas de comportamiento. El monitor debe ser simple (y idealmente probable ) para asegurar que esto no introduce nuevos errores de software.  
  
**Voting**, La realización más común de esta táctica es referida a una tiple redundancia modular (TMR Tiple Modular Redundancy), que emplea tres componentes que hacen lo mismo, cada uno de estos recibe una entrada identica, y reenvian sus salidas a una lógica de votación, usada para detectar cualquier inconsistencia entre los tres estados de salida. Esta táctica depende criticamente de la lógica de  
votación, que es realizada usualmente simple, rigurosamente revisada y testeada singleton de modo que la probabilidad de error sea muy baja.  
  
**Replicación**, es la más simple forma de Voting, aquí, los componentes son una copia exacta del otro. Teniendo multiples copias de componentes identicos puede ser efectivo para la protección de fallas aleatorias o hardware, pero esta no puede proteger de errores de diseño o implementación, en hardware o software.  
  
**Redundancia Funcional**, es una forma de voting la intención es abordar el problema de fallas de modo común (diseño o implementación ) en hardware o componentes de software. Aquí, los componentes deben siempre tener la misma salida con la mistra entrada. pero debe ser diseñados e implementados de manera distinta.  
  
**Redundancia Analitica**, permite no solo diversidad entre el lado privado de los componentes, sino que tambien diversidad entre los componentes de entrada y salida. Esta táctica se pretende para tolerar errores de especificación mediante el uso de especificación de requerimientos separadas.  
El mecanismo de votado usado con redundancia analítica necesita ser más sofisticado que tan solo hacer valer la mayoría o computando un simple promedio.  
  
**Detección de expeciones**, refiere a la detección de una condición del sistema que altera el flujo normal de ejecución. La táctica de detección de excepción puede ser más refinada:  
  
**Sistema de excepciones**, variará de acuerdo a la arquitectura de hardware del procesador empleada e incluye fallas como las de división por cero, bus y address, instrucciones ilegales de programa y así sucesivamente.  
  
**Parameter fence**, táctica que incorpora a priori un patrón de datos (como 0xDEADBEEF) puesto inmediatamente despues de cualquier parametro de longitud variable de un objeto. Esto permite la detección de sobreescritura de memoria en tiempo de ejecución asignada para los parametros de longitud variable de un objeto.  
  
**Parametros tipados**, emplea una clase base que define funciones que agregan, buscan e iteran sobre un parametro type-length-value (TLV) como formato para los mensajes. Las clases derivadas usan las funciones de la clase base para implementar funciones que provean un parametro tipado según a cada estructura de parametro.  
  
**Timeout**, es una táctica que lanza una excepción cuando un componente detecta que este u otro componente ha fallado al satisfacer su restricción de tiempo. Por ejemplo un compoenente que está esperando una respuesta de otro componente puede lanzar una excepción si la espera excede cierto valor de tiempo.  
  
**AutoTest**, Los componentes (o mas comúnmente, subsistemas enteros) puede correr procedimientos que se prueban a si mismo para corregir la operación. El procedimiento de auto-test puede ser iniciado por el componente en si mismo o ser invocado cada cierto tiempo por un sistema monitor. Estos pueden involucrarse empleando alguna de las tecnicas encontradas en monitoreo de condición como checksum.  
  
Pido mil disculpas por estas traducciones pero por momentos se puso un poco compleja la decisión si traducir o no partes por que al fin y al cabo hay conceptos que casi son nombres de los mismos como Timeout u otros. Igualmente los invito a leer el libro en su versión Inglesa que es su versión original esto para nada es una traducción oficial y mucho menos profesional pero intenta ser un acercamiento y a la vez práctica para mi mismo.
