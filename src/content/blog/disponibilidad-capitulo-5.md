---
title: "Disponibilidad - Capitulo 5"
description: "Resumen del Libro La disponibilidad refiere a la habilidad del sistema de estar disponible para el uso, especialmente luego de que ocurra un error. El error..."
pubDate: 2013-10-01
tags: ["practice", "disponibilidad", "arquitectura", "software", "sla", "atributos", "calidad", "architecture"]
draft: false
legacy: true
---

Resumen del Libro  
  
La disponibilidad refiere a la habilidad del sistema de estar disponible para el uso, especialmente luego de que ocurra un error. El error debe ser reconocido (o prevenido) y entonces el sistema debe responder de algún modo. La respuesta deseada dependerá de la criticidad de la aplicación y el tipo de error, que puede ir desde 'ignorarlo' a 'seguir adelante como si no hubiera pasado nada'-  
  
Las tácticas para la disponibilidad son categorizadas dentro de los siguientes:  
Detectar errores, recuperarse de errores y prevenirlos. Las tácticas de detección dependen esencialmente, de la detección de signos vitales de varios componentes. Las tácticas de recuperación son alguna combinación de re intentos de una operación o el mantenimiento de datos y procesamiento redundantes. Las tácticas de prevención dependerán tanto de remover elementos del servicio o utilizar mecanismos para limitar el alcance del error.  
  
Todas las tácticas de disponibilidad involucran al modelo de coordinación por que este debe estar al tanto de las fallas que ocurren para generar una respuesta apropiada.  
  
_Este es el resumen que el libro ofrece para el Capitulo 5 pero voy a tratar de agregar algo más ya que hay temas que son bastante amplios y el libro tiene un detalle interesante para este cápitulo._  
  
SLA (Service Level Agreement): La disponibilidad prevista por un sistema de computación o servicio de Hosting es frecuentemente expresada como un "Acuerdo de Nivel de Servicio" (Service Level Agreement). Este SLA especifica el nivel de disponibilidad que es garantizado y, usualmente, las penalidades que el sistema de computación o servicio de hosting sufrirán si el SLA es violado.  
  
[![](/images/legacy/disponibilidad-capitulo-5/IMG_20131001_071822.jpg)](/images/legacy/disponibilidad-capitulo-5/IMG%5F20131001%5F071822.jpg)
  
  
Como se lee en el capitulo anterior \[0\] los atributos de calidad son analizados en un Escenario que define varias cuestiones con respecto al contexto. Aquí lo haremos en base a la Disponibilidad.  
  
**Origen del estimulo:** Interno o externo: personas, hardware, software, infraestructura física, ambiente, etc.  
**Estimulo:** Error, omission, error grave, sincronización incorrecta, respuesta incorrecta.  
**Artefacto:** Procesadores, canales de comunicación, almacenamiento persistente, procesos.  
**Ambiente:** Operación normal, inicio, apagado, modo de reparación, operación degradada, operación en sobrecarga.  
**Respuesta:** Prevenir que la falta se convierta en una falla.  
Detectar la falla:  
  
* Registrar la falla.
* Notificar a las entidades apropiadas (personas o sistemas)
Recuperarse de la falla:  
* Deshabilitar el origen de los eventos que causan la falla.
* Estar temporalmente no disponible mientras se hace la reparación.
* Resolver o enmascarar la falta/falla o contener los daños que esta causa.
* Operar en modo degradado mientras se hace la reparación.

**Medida de respuesta:** Tiempo o intervalo de tiempo cuando el sistema debe estar disponible.

Porcentaje de disponibilidad (como por ejemplo el SLA de muchos Hostings que es del 99,999%)

Tiempo para detectar la falta.

Tiempo para reparar la falta.

Tiempo o intervalo de tiempo en que el sistema puede estar en modo degradado.

Proporción (99%) o ritmo (arriba de 100 por segundo) de una cierta clase de falla que el sistema previene o maneja sin salir de servicio.

  
Para seguir profundizando en un Post Posterior :D. Siempre quise decir eso. **Se analizarán las tacticas de disponibilidad** que son varias y que en el libro están muy bien detalladas. Estás como vimos al principio van a estar categorizadas en Detección, recuperación y prevención de una falla.
  
  
\[0\] <http://gonzamartinez.blogspot.com.ar/2013/09/entendiendo-los-atributos-de-calidad%5F23.html>
