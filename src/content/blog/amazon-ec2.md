---
title: "Amazon EC2"
description: "En la inevitable carrera por la virtualización de los servidores fisicos y empezando este largo camino. Me tocó arrancar a conocer el servicio de Amazon..."
pubDate: 2013-03-13
tags: ["amazon", "ec2", "testing", "administrador de redes", "quicuo", "produccion"]
draft: false
legacy: true
---

En la inevitable carrera por la virtualización de los servidores fisicos y empezando este largo camino. Me tocó arrancar a conocer el servicio de Amazon EC2.  
  
<http://aws.amazon.com/es/ec2/>  
  
En principio lo que da miedo de Amazon EC2 es que te pide de entrada poner una Tarjeta de Crédito pero ese miedo va decayendo cuando te das cuenta el Power que te dan para jugar por tan poco.  
  
Crear, poner a full instancia y conectarte a tu instancia  
<http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2%5FGetStarted.html#EC2%5FConnectToInstance%5FLinux>  
  
Es muy variada la cantidad de Imágenes disponibles para generar tu instancia. Yo por las razones del proyecto del laburo me tocó iniciar una instancia (para los mortales un Servidor Virtual) de Debian Squeeze el objetivo es con el tiempo avanzar hacia la nube y migrar con el transcurrir del tiempo los servidores fisicos a la nube.  
  
Uno de los primeros objetivos es hacer un simple y llano backup trabajando con rsync y dumpeando simplemente la base de datos (postgres)  
  
rsync  
<http://es.wikipedia.org/wiki/Rsync>  
pg\_dump  
<http://es.tldp.org/Postgresql-es/web/navegable/todopostgresql/app-pgdump.html>  
  
Próximo paso levantar una replicación de Postgres, modificar los scripts de deploy de Testing a Producción.  
  
[![](/images/legacy/amazon-ec2/quicuo.jpg)](/images/legacy/amazon-ec2/quicuo.jpg)

  
Powered by

[![](http://www.baquia.com/system/rich_text_images/000/003/056/original/AWS.png?1356003644)](http://www.baquia.com/system/rich%5Ftext%5Fimages/000/003/056/original/AWS.png?1356003644)
