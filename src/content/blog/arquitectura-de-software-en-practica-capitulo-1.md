---
title: "Arquitectura de Software en Práctica Cápitulo 1"
description: "No estoy estudiando no estoy yendo a la facultad entonces me animé despues de leer \"Dive Into Python\" completo, que fue el primer libro completo que leé en..."
pubDate: 2013-09-03
tags: ["profesionales it", "practice", "práctica", "arquitectura", "software", "programación", "proyecto", "architecture"]
draft: false
legacy: true
---

No estoy estudiando no estoy yendo a la facultad entonces me animé despues de leer "Dive Into Python" completo, que fue el primer libro completo que leé en inglés. Me animé y me traje del laburo un libro recién traído de USA que se llama "Software Architecture in Practice". Tratare de hacer un resumen pobre dado que no soy un experto ni en arquitectura de software ni en inglés pero con el fin de afianzar mis conocimientos y brindarles una pequeña traducción.  
  
**Introducción.**  
**Que es la arquitectura de software?**  
La arquitectura de un sistema es un conjunto de estructuras necesarias a razonar acerca de un sistema, que comprende elementos de software, las relaciones ellos y las propiedades de ambos.  
  
**Que es una estructura y una vista.**  
Una estructura es un conjunto de elementos y las relaciones entre ellos.  
La vista es una representación de la estructura.  
  
_Los neurólogos, ortopedistas, hematólogos y los dermatologos tienen diferentes vistas de la estructura del cuerpo humano. Los oftalmológos, cardiologos y podologos tienen que ver con diferentes aspectos de todo un comportamiento. Aunque estas vistas son fotos y tienen propiedades diferentes todas están intrinsecamente relacionadas, juntas describen la arquitectura del cuerpo humano._  
  
**Hay tres categorias de estructuras:**  
**Estructuras Modulo** muestra como un sistema es estructurado como un **conjunto de código o unidades de datos** que tienen que ser construidos o adquiridos.  
  
**Estructuras componente-y-conector** muestra como un sistema es estructurado como un conjunto de elementos que tienen **un comportamiento en tiempo de ejecución (componentes) e interacciones (conectores).**  
  
**Estructuras de asignación** muestra como el sistema se relacionará a **las estructuras que no son de software en su entorno** (tal como CPUs, sistema de archivos, redes, equipos de desarrollo.)  
  
**_Ejemplo:_**  
_Es un pequeño sistema cliente-servidor_  
_Un sistema donde la vista de módulos es una vista de descomposición (submodulos o subsistemas de un sistema mayor). Y como en tiempo de ejecución van a ser 10 las máquinas clientes accediendo al servidor entonces podemos ver que van a ser 2 módulos (cliente y servidor) y 11 componentes (10 clientes, 1 servidor ) y 10 conectores que son las relaciones entre los componentes que se observan en la vista Cliente-Servidor._  
  
[![](/images/legacy/arquitectura-de-software-en-practica-capitulo-1/IMG_20130902_225917.jpg)](/images/legacy/arquitectura-de-software-en-practica-capitulo-1/IMG%5F20130902%5F225917.jpg)

  
Esto es todo por esta vez. Me sirvió para repasar un poco lo que había leído y para practicar mi traducción :S del inglés espero que les haya servido aunque sea poco.  
  
El próximo capitulo será **Por que es importante la arquitectura de software**.  
  
Resumen y ejemplos basados en  
Software Architecture in Practice Third Edition. Len Bass, Paul Clements, Rick KazMan  
http://amzn.to/15RIscN
