---
title: "DevOps lecciones para CIOs - by ScriptRock"
description: "Definir DevOps correctamente Una buena forma de entender que es DevOps es entender cual fue el origén de este movimiento. En particular el incremento de la..."
pubDate: 2013-11-10
tags: ["pdf", "devops", "scriptrock"]
draft: false
legacy: true
---

**_Definir DevOps correctamente_**  
  
Una buena forma de entender que es DevOps es entender cual fue el origén de este movimiento. En particular el incremento de la desconexión entre las funciones de desarrollo y operaciones en los departamentos de IT. A pesar de que juegan en el mismo equipo, sus objetivos son muy diferentes y suelen chocar entre sí. Mientras a unos les interesa mejorar el producto a través del cambio (desarrollo) otros bregan por el mantenimiento de la calidad del servicio y la disponibilidad (operaciones).  
  
Por consiguiente DevOps es cualquier esfuerzo en una organización para alinear los objetivos de los equipos de Desarrollo y Operaciones. En la práctica esto puede ser un cambio cultural o de procesos. Además puede permitir, pero no deberia centrarse en, la implementación de ciertas herramientas, particularmente herramientas de automatización.  
  
_**Colaboración primero, especialmente para herramientas**_  
  
El cambio cultural es dificil. Comprar herramientas es fácil, y con los grandes ahora en DevOps pesa lo que se dice de "Nunca nadie ha sido despedido por comprar le a IBM/Microsoft" \[0\]  
Muchas StartUps apuntan a su uso de Puppet o Jenkins cuando se les pregunta acerca de DevOps.  
La forma más sencilla es descomponerlo en dos elementos centrales, colaboración y automatización. Y no es accidental que colaboración sea nombrada en primer lugar. Si se empieza con la automatización la cosas pueden empeorar. Quizás esto se note mejor con un ejemplo.  
  
Un administrador de aplicaciones se dió en la encrucijada de implementar DevOps dentro de su companía con el uso de una herramienta de automatización de configuración llamada Chef. Luego de que su equipo logró sobrellevar el obstaculo de la, nada despreciable, curva de aprendizaje, él quedó conforme con la mejora que observó en el proceso de Build de su ambiente de desarrollo y testing.  
El problema vino del hecho de que él no consultó con operaciones sobre este cambio. Como era de esperar, el equipo de operaciones decidió que ellos no iban a usar Chef para que construya dentro de sus ambientes de Staging o Producción. Los beneficios mostrados fueron desvirtuados y el uso de Chef discontinuado.  
  
Para evitar estos problemas recordar esto:  
  
  
* Una iniciativa no es DevOps si esta contenida en un solo grupo.
* Está BIEN dar lugar a la implementación de una herramienta si el acuerdo es alcanzado con ambos lados de que es la herramienta adecuada para hacer el trabajo.
* Evitar las herramientas que refuercen los silos a toda costa. Una herramienta de funcionalidad cruzada que es solo usada por un equipo solo hace las cosas aún peor.

_**No Crear otro equipo**_

  
Esto no deberia ser mencionada a menos que seas un CIO prodigio de 25 y que lo hayas visto antes. Toma por ejemplo Service Oriented Architecture (SOA) y Business Process Managment (BPM). Ambas son iniciativas valiosas en si mismas, pero ambos acrónimos fueron victimas de una exaltación innecesaria y de promesas incumplidas de los ansiosos vendedores.

  
Las lecciones aprendidas por las companias son que construir iniciativas alrededor de nuevos, y separados equipos tiene a lo mejor un efecto negligente. Y en el peor hace el éxito imposible.

  
Las razones por las que crear otro equipo nuevo no funciona son las mismas razones por las que no funciona su iniciativa DevOps. Eliminar la función de su equipo principal de operaciones y desarrollo elimina su compromiso con él. Se convierte en un problema ajeno. Peor aún, saben que si funciona el éxito es de otro. No es necesario explicar entonces que es lo que esto significa para la colaboración entre los equipos y los nuevos colegas DevOps. Todo lo que se logran con la creación de un nuevo silo es un silo con objetivos nobles pero uno que está condenado al fracaso desde el principio.

  
DevOps es colaboración. En un ambiente donde la colaboración entre equipos es mala, agregar un nuevo equipo solo hace las cosas peores. DevOps debería ser una responsabilidad de todos, una iniciativa de todos y, finalmente, un éxito de todos.

  
**_Esto no es solo DevOps_**

  
Que hay en una palabra? La simplicidad y franqueza del término DevOps es algo hermoso. Es difícil lograr una palabra que haga una mejor descripción del objetivo de alinear los intereses y trabajo de los equipos de desarrollo y operaciones. 

se 

Sin embargo hay un problema en esto. Como un CIO Corporativo tu equipo de IT esta mucho más de desarrollo y operaciones. No hay duda que estos dos equipos se beneficiarían de un poco de terapia de pareja pero responda a estas preguntas. Tienen sus desarrolladores nada más que palabras buenas sobre su equipo de Calidad? Su equipo de operaciones canta alabanzas regularmente a la seguridad? Los arquitectos son queridos por alguien más que ellos mismos? 

  
Desmantelar la pared entre desarrollo y operaciones es un buen lugar para empezar cuando se tiene un departamento de IT disfuncional. Sin embargo existen otras paredes entre otros equipos. Las paredes que no están dentro del enfoque de la iniciativa DevOps seguramente se fortalecerán. 

  
Puede la mejora en la colaboración y la automatización beneficiar a otras áreas? Por supuesto que se puede. No hacer de DevOps otro silo. Incluya a otros equipos siempre que sea posible. Deberías considerar el uso de otro término para definir este tipo de trabajo.

  
Esto por supuesto debe ser equilibrado. Su enfoque sobre todo al principio debería ser acotado lo máximo posible para aumentar las probabilidades de éxito. Lo que principalmente se busca es no excluir a los principales interesados. 

  
Finalizando esta fue una muy interesante lectura (semi traducida por mi :S ) sobre DevOps que nos ofreció ScriptRock \[1\]
  
  
\[0\] <http://c2.com/cgi/wiki?NobodyEverGotFiredForBuyingMicrosoft>  
\[1\] <https://www.scriptrock.com/devops-lessons-for-cio>
