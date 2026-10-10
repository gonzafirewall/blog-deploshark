---
title: "Interoperabilidad Capitulo 6"
description: "La interoperabilidad refiere a la habilidad de dos o más sistemas de intercambiar información útil. Interoperabilidad sintáctica Significa que los sistemas..."
pubDate: 2013-11-11
tags: ["rest", "practice", "software", "interoperabilidad", "soap", "architecture"]
draft: false
legacy: true
---

La interoperabilidad refiere a la habilidad de dos o más sistemas de intercambiar información útil.  
  
**Interoperabilidad sintáctica**  
Significa que los sistemas tienen la habilidad de intercambiar datos.  
  
**Interoperabilidad semántica**  
Significa que además interpreta correctamente esos datos que han sido intercambiados.  
  
Estos sistema debe ser construidos con la intención de intercambiar información o deben proveer un servicio general sin conocer los detalles del sistema que va utilizar sus servicios.  
  
**_Por que los sistemas buscarían interoperar?_**  
  
* Tu sistema provee un servicio que va a ser usado por una cantidad de sistemas desconocidos. Estos sistemas necesitan interoperar con tu sistema a pesar de que no sepas nada sobre ellos. Un ejemplo es el servicio de Mapas de google (GoogleMaps).
* Estás construyendo capacidades de un sistema existente. Por ejemplo, uno de los sistemas es responsable por el monitoreo de su ambiente, otro es responsable para el procesamiento de los datos en crudo, un tercero es responsable de la interpretación de los datos, y finalmente uno es responsable de producir y distribuir la representación de lo que fue sensado. Un ejemplo es un sistema de monitoreo del tráfico donde la entrada llega de vehiculos individuales, el dato crudo es procesado en unidades de medida comunes, es interpretado y combinado y la información de congestión del tráfico es trasmitida.

Estos ejemplo nos muestra dos aspectos importantes de la interoperabilidad.

1. **Discovery.** El consumidor de un servicio debe descubrir (posiblemente en tiempo de ejecución o antes) la ubicación, identidad. y la interfaz del servicio.
2. **Manejo de la respuesta:** Hay tres posibilidades distintas:  
\* El servicio reporta al solicitante con una respuesta.  
\* El servicio envia su respuesta a otro sistema.  
\* El servicio transmite su respuesta a todos los interesados.

**_Escenario General de la Interoperabilidad_**

* Origen del estimulo. Un sistema que inicia el pedido.
* Estimulo: Un pedido de intercambio de información entre sistemas.
* Artefacto. El sistema que desea interoperar.
* Ambiente. El sistema que desea interperar está descubriendo en tiempo de ejecución o lo conoce de antemano.
* Respuesta. El pedido para interoperar resulta en el intercambio de información. La información es comprendida por el receptor sintactica y semanticamente. Alternativamente, el pedido es rechazado y las entidades apropiadas son notificadas. En cualquiera de los casos, el pedido debe ser registrado.
* Medida de respuesta. El porcentaje de intercambio de información correctamente procesada o el porcentaje de intercambio de información correctamente rechazada.

SOAP vs Rest \[0\] dos formas distintas de interoperabilidad en el ambiente del desarrollo Web.

  
Como siempre cabe aclarar que estos Post son parte o resumen del libro Software Architecture In Practice Tercera Edición \[1\]

  
\[0\] http://stackoverflow.com/a/8983122

  
\[1\] <http://www.amazon.com/Software-Architecture-Practice-Edition-Engineering/dp/0321815734>
