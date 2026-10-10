---
title: "Otros Atributos de Calidad Capitulo 12"
description: "Variabilidad La variabilidad es una forma especial de modificabilidad. Se refiere a la habilidad de un sistema y sus artefactos tales como requerimientos,..."
pubDate: 2014-01-08
tags: ["movilidad", "otros", "arquitectura", "software", "escalabilidad", "seguridad", "distribuido", "variabilidad", "depliegue", "monitoreo", "desarrollo", "atributos", "calidad", "architecture"]
draft: false
legacy: true
---

**_Variabilidad_**  
  
La variabilidad es una forma especial de modificabilidad. Se refiere a la habilidad de un sistema y sus artefactos tales como requerimientos, planes de test y especificación de configuración de soportar la producción de un conjunto de variantes que difieran entre si planeado de antemano.  
  
**_Portabilidad_**  
  
Es un caso especial de modificabilidad. La portabilidad se refiere a la facilidad con que un Software que fue construido para correr en una plataforma puede ser cambiada a correr en una plataforma diferente. La portabilidad se logran minimizando las dependencias con la plataforma en el programa, aislando las dependencias a ubicaciones bien definidas, y escribiendo el programa para que corra sobre una "máquina virtual" (como lo es Java Virtual Machine).  
  
**_Desarrollo distribuido_**  
La capacidad del desarrollo distribuido es la calidad del diseño para soportar el desarrollo de software distribuido. Muchos sistemas en estos días son desarrollados por equipos distribuidos globalmente. Uno de los problemas que debe ser superado con equipos distribuidos es coordinar sus actividades.  
  
**_Escalabilidad_**  
  
Dos tipos de escalabilidad son escalabilidad horizontal y escalabilidad vertical. La escalabilidad horizontal (scaling out) s refiere a la agregación de más recursos a unidades lógicas, como ser agregar otro server a un cluster de servidores. La escalabilidad vertical (scaling up) se refiere a la agregación de más recursos a una unidad física, como sería agregar más memoria a una computadora. En ambientes Cloud la escalabilidad horizontal es llamada elasticidad. _Elasticidad_ es la propiedad que permite a los clientes agregar o remover maquinas virtuales a un pool de recursos.  
  
**_Capacidad de despliegue_**  
  
Capacidad de despliegue (deployability) se refiere a como un ejecutable llegar a la plataforma del host y como esta es subsecuentemente invocada. Algunos de los inconvenientes involucgrados en el despliege de software son: Como hacer para llegar al host (push, donde las actualizaciones son enviadas a los usuarios sin ser pedidos, o pull, donde los usuarios deben explicitamente pedir las actualizaciones)? Como este es integrado al sistema existente? Puede esto realizarse cuando el sistema existente está en ejecución?  
  
**_Movilidad_**  
  
Movilidad aborda el problema de movimiento y prestaciones de una plataforma (ej, tamaño, tipo de pantalla, tipo de dispositivos de entrada, disponibilidad, volumen de ancho de banda, y vida de la batería). Los problemas en movilidad incluyen administración de la batería, reconexión después de un periodo de desconexión, y el número de diferentes interfaces de usuario necesarias para soportar múltiples plataformas.  
  
_**Capacidad de Monitoreo**_  
  
(Monitorability) trata de la habilidad del equipo de operaciones para monitorear el sistema mientras se está ejecutando. Cosas como longitudes de cola, tiempo promedio de procesamiento de transacciones, y la salud de varios componentes deberían ser visibles al equipo de operaciones de manera que puedan tomarse las acciones correctivas en caso de problemas potenciales.  
  
_**Seguridad**_  
  
La seguridad del software es acerca de la habilidad del software para evitar entrar en estados que causen o provoquen daños, lesiones, o perdida de la vida a los actores en el ambiente del software, y a recuperar o limitar el daño cuando lo hace entrar en un mal estado. Otro manera de decir esto es que la seguridad tiene que ver con la prevención de y recuperación de fallas peligrosas.  
La seguridad no es lo mismo que confiabilidad. Un sistema puede ser confiable (consistente con sus especificaciones) pero todavía inseguro (por ejemplo, cuando la especificación ignora condiciones que dan lugar a una acción insegura)
