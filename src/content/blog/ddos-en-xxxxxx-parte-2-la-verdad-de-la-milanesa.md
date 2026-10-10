---
title: "DDOS en \"XXXXXX\" Parte 2 \"La verdad de la Milanesa\""
description: "Ahora el post anterior fue el principio por que el titulo hablaba de otra cosa. Y es que además tienen un problema que es que todos los nodos de la red o al..."
pubDate: 2013-09-16
tags: []
draft: false
legacy: true
---

Ahora el post anterior fue el principio por que el titulo hablaba de otra cosa. Y es que además tienen un problema que es que todos los nodos de la red o al menos de la red en la que yo me encuentro tienen el mismo equipo que es un Equipo Zyxel.  
  
El tema es que razonablemente no se puede acceder a este via usuario admin lo que en principio ya fue sorprendente pero algo que se olvidaron o lo hicieron a proposito es que si se puede con el usuario GUEST.  
  
[![](/images/legacy/ddos-en-xxxxxx-parte-2-la-verdad-de-la-milanesa/Selección_007.png)](/images/legacy/ddos-en-xxxxxx-parte-2-la-verdad-de-la-milanesa/Selección%5F007.png)
  
  
Que puede hacer dos cosas interesantes sobre el equipo, una es "REINICIARLO" y otra es dejarlo en "PREDETERMINADO de FÁBRICA" bueno hasta acá todo masomenos bien por que de última reiniciarlo o ponerlo en Predeterminado te perjudica a vos mismo.  
  
[![](/images/legacy/ddos-en-xxxxxx-parte-2-la-verdad-de-la-milanesa/Selección_008.png)](/images/legacy/ddos-en-xxxxxx-parte-2-la-verdad-de-la-milanesa/Selección%5F008.png)

  
Pero bueno uno es inquieto y cuando ve una IP pública lo que normalmente hace alguien con conocimientos de Redes es probar si se puede hacerle PING a algún compañero de la red y una vez que lo puede hacer da un paso más y le mandas un NMAP.  
  
Host is up (0.19s latency).  
Not shown: 995 closed ports  
PORT STATE SERVICE  
21/tcp open ftp  
23/tcp open telnet  
443/tcp open https  
2601/tcp open zebra  
9999/tcp open abyss  
  
Nmap done: 1 IP address (1 host up) scanned in 37.60 seconds  
  
"Ouch" acá hay algún problema bueno entonces hacemos una suposición positiva y pensamos bueno no todos deben tener esto abierto y entonces uno hace otra suposición pensemos que es una red /24 y probemos con NMAP a ver que dice.  
  
Bueno me aburrí de esperar al NMAP a esta hora pero son muchos digamos que todos los clientes.  
  
Entonces que sucedería si alguien mal intencionado hace algún Script que haga lo siguiente:  
  
1. Dame todos las IPS de esta red que tengan abierto el puerto 23 (alias Telnet). No muy dificil con NMAP es algo como "xxx.xxx.xxx.0/24 -p 23" esto traería un listado de IPs.
2. Entonces la magía es encontrar un lenguaje que te permita hacer un "for" sobre dicho listado o recorrer IP por IP (Creo que todos no conozco alguno que "no").
3. En cada vez hacer "telnet xxx.xxx.xxx.xx" a cada IP.
4. entrar con user: guest y pass: (imaginen cual)
5. y despues escribir "reboot"

**Bueno esto no sería nada más y menos que bien pensado y masomenos orquestado una denegación de servicio a todos y cada uno de los clientes de esta empresa que tengan este aparatito (que por lo visto son varios).**

  
Bueno espero que sirva para que los que tienen que mejorar esto lo hagan y que vean que el problema que podrían tener es grave y que podría generar varias llamadas por problemas de desconexión cuando en verdad es un Script que sigue corriendo como un demonio reiniciando equipos a troche y moche.

  
Buenas Noches"
