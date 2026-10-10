---
title: "Tácticas de disponibilidad - Recuperación de fallas - Capitulo 5"
description: "Las tacticas de recuperación de fallas son refinadas en tácticas de preparación y reparación y tácticas de reintroducción. Las tácticas de preparación y..."
pubDate: 2013-10-19
tags: ["practice", "disponibilidad", "tacticas", "software", "recuperacion", "5", "capitulo", "fallas", "architecture"]
draft: false
legacy: true
---

Las tacticas de recuperación de fallas son refinadas en tácticas de preparación y reparación y tácticas de reintroducción.  
  
Las tácticas de preparación y reparación están basadas en una variedad de combinaciones de reintentos computacionales o introducción de redundancia. Estos incluyen los siguientes.  
  
**Redundancia Activa (Hot Spare)**. Esta refiera a una configuración donde todo los nodos (activos o redundantes extras ) en un grupo de protección \[0\] reciben y procesan entradas identicas en paralelo, permitiendo la redundancia extra al mantener un estado sincronico con los nodos activos. Por que el redundante de respuesto posee un estado identica a el procesador activo, este puede asumir el rol de activo ante una falla en cuestión de milisegundos.  
  
**Redundancia pasiva (warm spare)** Esto refiere a una configuración donde solo los miembros activos del grupo de protección procesan el trafico de entrada. una de sus funciones es la de proveer a los respuestos redundantes de las actualizaciones de estado periodicas. Por que el estado mantenido por los servicios redundantes está menos emparejado que el de los nodos activos en el grupo de protección.  
  
**Spare (cold spare)** Cold Sparing refiera a una configuración donde el servicio redundante de un grupo de protección se mantiene fuera de servicio hasta que un intercambio por error (fail-over) ocurr, momento en el que un procedimiento de prendido y reinicio es iniciado en el servicio redundante antes de ser puesto en servicio.  
  
**Manejo de excepciones** Una vez que una excepción ha sido detectada, el sistema deberia manejarla de algún modo. La cosa más sencilla, es dejar caer el sistema, pero por supuesto que es una idea terrible desde el punto de vista de la disponibilidad, usabilidad, capacidad de prueba, etc. El mecanismo utilizado para el manejo de la excepción depende largamente del ambiente de programación empleado, desde una simple función que devuelve un código de error a el uso de clases de excepción que contienen información de ayuda en relación a la falla, tal como el nombre, el origen y la causa que lanza la excepción.  
  
**Rollback** Esta táctica permite al sistema revertir a un estado previo que estaba funcionando correctamente. después de la detección de una falla. Una vez que un buen estado es alcanzado, entonces la ejecución puede continuar. Esta táctica es a veces combinada con la táctica de redundancia activo o pasivo por lo que una vez que un rollback ocurre, una versión "en espera" del componente fallado es promovida al estado activo. El rollback depende de la copia de que un buen estado previo (un punto de chequeo) esté disponible del componente que está haciendo rollback.  
  
**Actualización de Software,** es otra táctica de preparación y reparación que tiene como objetivo lograr una actualización "en servicio" de las imagenes de código executables de una manera que no afecte al servicio. Esto debe ser realizado como una función "parche" o una clase "parche" o una actualización de software "en-servicio" de poco impacto.  
  
**Reintento,** La táctica de reintento asume que la falla es causada por una falla transitoria y el reintento de la operación debería resolverla. Esta táctica es usada en redes y en granjas de servidores donde las fallas son esperables y comunes.  
  
**Ignorar el comportamiento defectuoso** esta táctica llama a ignorar los mensajes enviados de un origen particular cuando nosotros determinamos que esos mensajes son espurios.  
  
La táctica de **Degradación** mantiene las funciones criticas del sistema en la presencia de fallas de componentes, dejando caer las funciones menos criticas. Esto se hace en circunstancias donde un componente falla "bonitamente" (licencia bestialistica del autor del Blog)  
  
**Reconfiguración** intenta recuperar la falla de un componente reasignando responsabilidades a los recursos que dejaron de funcionar mientras mantiene alguna funcionalidad como sea posible.  
  
\[0\] Un grupo de protección es un grupo de nodos procesando donde uno o más nodos son "activos", con los nodos restantes en el grupo de protección sirviendo como un servicio redundante.
