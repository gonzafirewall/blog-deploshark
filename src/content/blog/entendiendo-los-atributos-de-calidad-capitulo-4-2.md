---
title: "Entendiendo los Atributos de Calidad Capitulo 4 (2)"
description: "En el Post anterior de Atributos de calidad [0] se hablaba sobre el escenario de atributos de calidad y se hablo sobre sus partes en esta sección vamos a..."
pubDate: 2013-09-23
tags: ["practice", "software", "atributos", "calidad", "architecture"]
draft: false
legacy: true
---

En el Post anterior de Atributos de calidad \[0\] se hablaba sobre el **escenario de atributos de calidad y se hablo sobre sus partes en esta sección vamos a detallar cada uno de estos.**  
  
**Origen del estimulo:** Esta es alguna entidad (un humano, un sistema, o cualquier otro actuador) que generó el estimulo.  
  
**Estimulo:** El estimulo es una condición que requiere una respuesta cuando esta llega al sistema.  
  
**Ambiente:** El estimulo occurre bajo ciertas condiciones. El sistema puede ser in una condición de sobrecarga o en condiciones normales, o algún otro estado relevante. Para algunos sistemas, la operación "normal" puede referirse de uno a varios modos. Para este tipos de sistemas, el ambiente debería especificar en que modo el sistema esta ejecutándose.  
  
**Artefacto:** Algún artefacto es estimulado. Este puede ser una colección de sistemas, todo el sistema o alguna pieza o piezas de este.  
  
**Respuesta:** La respuesta es la actividad realizada como el resultado de el arribo de el estimulo.  
  
**Medida de respuesta:** Cuando la decisiones de diseño respuesta ocurre, esta deberia ser medible en cierto modo para que el requerimiento pueda ser probado.  
  
Según el libro "Software Architecture in Practice" una **táctica arquitectural es una decisión de diseño que afecta a la respuesta de un atributo de calidad. Estas son dividas en siete categorias que tratare de resumirles a continuación.**  
  
**Asignación de responsabilidades:** Las decisiones que participan de la asignación de responsabilidades incluyen las siguientes:  
  
* Identificar las responsabilidades importantes, incluyendo las funciones básicas del sistema, infraestructura arquitectonica, y la satisfacción de los atributos de calidad.
* Determinar como estas responsabilidades son asignadas a non-runtime y elementos runtime. (es decir, modulos, componentes y conectores).

Las estrategias para hacer estas decisiones incluyen descomposición funcional, modelado de objetos del mundo real, agrupación basada en los modos principales de operación del sistema o agrupación basada en requerimientos de calidad similares. 

  
**Modelo de Coordinación:** 

  
Los programas trabajan por tener elementos que interactuan entre sí a través de mecanismos diseñados. Estos mecanismos son colectivamente referidos como modelo de coordinación. Estos incluyen:  
  
* Identificar los elementos del sistema que deben coordinarse, o que tienen prohibido coordinarse.
* Determinar las propiedades de la coordinación, tales como la puntualidad, vigencia, completitud, exactitud, y consistencia.
* Seleccionar los mecanismos de comunicación (entre sistemas, entre nuestro sistema y entidades externas, entre elementos de nuestro sistema) que realizan estas propiedades.

En el próximo post tratare de resumir las otras 5 propiedades que todavia faltan. que son **Modelo de Datos, Administración de Recursos, Mapeo entre elementos arquitectonicos, decisiones de fusión de tiempo, elección de tecnología.**
  
  
\[0\] http://gonzamartinez.blogspot.com/2013/09/entendiendo-los-atributos-de-calidad.html
