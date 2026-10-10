---
title: "Rendimiento Capitulo 8"
description: "Redimiento o Performance es sobre la administración de los recursos de un sistema frente a tipos particulares de demanda para lograr un comportamiento..."
pubDate: 2013-11-20
updatedDate: 2014-03-03
tags: ["practice", "práctica", "arquitectura", "rendimiento", "capitulo", "8", "architecture"]
draft: false
legacy: true
---

**Redimiento o Performance es sobre la administración de los recursos de un sistema frente a tipos particulares de demanda para lograr un comportamiento aceptable en el tiempo.**   
  
El rendimiento puede ser medido en términos de caudal y latencia para sistemas de tiempo real interactivos y embebidos, aunque el caudal es más importante en un sistema interactivo y la latencia es más importante en sistemas embebidos.  
  
Los eventos pueden arribar en patrones predecibles, distribuciones matemáticas o ser inpredecibles.  
  
**Eventos de arribo periodico** son aquellos que arriban a nuestro sistema en intervalos regulares de tiempo. Por ejemplo un evento podría llegar cada 10 milisegundos. Los eventos de arribo periodico son los más vistos en sistemas de tiempo real.  
  
**Arribo Estocastico** significa que los eventos llegan de acuerdo a alguna distribución probabilistica.  
  
**Eventos de arribo esporadico**, es de acuerdo a un patrón que no es ni periodico ni estocástico. Incluso estos, en ciertas circunstancias pueden ser caracterizados. Por ejemplo, podriamos saber que tendrá lugar algo así como 600 eventos en un minuto, o que habrá al menos 200 milisegundos entre el de arribo de dos eventos cualesquiera. (Esto podría describir un sistema en el que los eventos corresponden a tecleos de un usuario).  
  
**Escenario general de Rendimiento.**  
  
**Origen del Estimulo:** El estimulo llega ya sea de un origen (posiblemente multiple) externo o un origen interno.  
**Estimulo:** El estimulo son eventos llegando. El patrón de arribo puede ser periódico, estocástico, o esporádico, caracterizado por parametros numericos.  
**Artefacto:** El artefacto es el sistema, uno o más de sus componentes.  
**Ambiente:** El sistema puede estar en varios modos operacionales, como ser, normal, emergencia, carga máxima, o sobrecarga.  
**Respuesta:** El sistema debe procesar los eventos que llegan. Estos puede causar un cambio en el ambiente del sistema ( de modo normal a modo de sobrecarga.)  
**Medida de respuesta:** Son el tiempo que toma el procesamiento de un evento que llega al sistema (latencia o un tiempo de entrega máximo), la variación en este tiempo (jitter), la cantidad de eventos que puede ser procesados en un intervalo de tiempo particular (caudal) o una caracterización de los eventos que no pueden ser procesados (tasa de fallos).  
  
El rendimiento puede ser mejorado reduciendo la demanda o administrando los recursos de manera más apropiada. Reduciendo la demanda tendrá el efecto colateral de reducir la fidelidad o denegar el servicio a algún pedido. Administrar los recursos más apropiadamente se puede hacer mediante la programación/agendado, replicación, o simplemente incrementando los recursos disponibles.
