---
title: "La aventura de replicar Postgres"
description: "Capaz para muchos esto es una tonteria pero como SysAdmin no soy muy copado con las DBs aún así me toca pensar, probar e implementar la replicación de una..."
pubDate: 2013-04-04
tags: ["amazon", "postgresql", "automatizacion", "fabric", "servidores", "replicacion", "nube"]
draft: false
legacy: true
---

Capaz para muchos esto es una tonteria pero como SysAdmin no soy muy copado con las DBs aún así me toca pensar, probar e implementar la replicación de una Db Postgres para dar más disponibilidad a nuestros aparatejos informáticos.  
  
La idea es la siguiente replicar la base de datos PostgreSQL transacción por transacción. Un servidor está físicamente en las oficinas de la empresa y el otro está en Amazon (en la Nube).  
  
Esto sería para poder levantar en casos de urgencia el servidor de Amazon como FailOver, Esto merece una cantidad de sincronismo importante.  
El primer paso de esto fue en mi post anterior donde comenté sobre el inicio de uso de Amazon y el backup que por ahora se hacia solo con Rsync eso sirve solamente a modo de resguardo.  
Ahora el trabajo consiste en los siguientes pasos.  
  
Replicación de Postgres de cualquier manera (ideal transacción por transacción, parece que PG-Pool \[0\] trabajando como midleware es la mejor opción)  
Implementar un Script en el Stage de Testing para que cuando se haga un deploy a Producción esto se haga también al servidor de replica para mantener código. (\[1\] Usar Fabric?? posiblemente)  
Probar el funcionamiento del DNS Failover de Amazon para usarlo ante fallos.  
Obviamente probar que esto funcione todo en sintonia y que funcione tanto el failover como la vuelta atrás. A trabajar...  
  
\[0\] [http://www.pgpool.net](http://www.pgpool.net/)  
\[1\] <http://docs.fabfile.org/en/1.6/>  
\[2\] <http://aws.amazon.com/es/route53/>
