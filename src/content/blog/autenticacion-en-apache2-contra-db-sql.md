---
title: "Autenticación en Apache2 contra DB SQL"
description: "Hace un par de días estaba limpiando modulos que estaban instalados innecesariamente en un WebServer y obviamente para deshabilitarlos sin romper demasiado..."
pubDate: 2014-08-09
tags: ["authn_dbd", "autenticación", "mysql", "apache2", "mod_dbd"]
draft: false
legacy: true
---

Hace un par de días estaba limpiando modulos que estaban instalados innecesariamente en un WebServer y obviamente para deshabilitarlos sin romper demasiado me fuí leyendo para que funcionaba cada directiva. Acá les dejo como configurar una que me pareció cuando menos interesante.  
  
**mod\_authn\_dbd** es una directiva para poder usar como backend de autenticación una base de datos de manera masomenos simple pero directamente desde el WebServer en este caso apache2.  
  
Acá les dejo un ejemplo sacado de la doc oficial y resolviendo algunas cosas que en esa misma doc no se aclaran sobre como hacerlo en debian-based OS.  
  
Instalamos los siguientes paquetes ya que es un servidor limpio recien instalado.  
  
\# Instalamos Apache y MySQL hasta acá nada raro es lo minimo  
apt-get install apache2 mysql-server  
\# Esta es la libreria que hacer la magia  
apt-get install libaprutil1-dbd-mysql   
  
> No hace falta obviamente tener el servidor mysql en el mismo que el apache yo lo hago así para simplificar la configuración

  
\# Se debe habilitar ese modulo  
[a2enmod authn\_dbd](http://httpd.apache.org/docs/2.2/mod/mod%5Fauthn%5Fdbd.html)  
  
/etc/init.d/apache2 restart  
  
luego en el conf correspondiente limitamos el Directory con la configuración como continua.  
  
> DBDriver mysql   
> DBDParams "host=localhost, dbname=midb,user=user\_db,pass=pass\_db,port=3306"  
>  
> DBDMin 4  
> DBD Keep 8  
> DBDMax 20  
> DBDExptime 300  
>  
> <Directory /var/www/privado>  
> AuthType Basic  
> AuthName "Mi Servidor"  
> AuthBasicProvider dbd  
> Require valid-user  
> AuthDBDUserPWQuery \\  
> "SELECT password from auth\_table where user = %s"  
> </Directory>

  
A mi no me resulto tan obvio pero la password del usuario tiene que ser encriptada en la DB con la función ENCRYPT de mysql.  
  
[Otra directiva](http://httpd.apache.org/docs/current/mod/mod%5Fauthz%5Fdbd.html) interesante permite hacer login y logout pero esa los voy a dejar que se peleen ustedes con los problemas que pueda causa esa configuración.  
  
Espero que les haya parecido cuando menos raro esto de autenticar desde el WebServer contra la DB directamente creo que yo ya le tengo una utilidad.  
  
<http://httpd.apache.org/docs/2.2/mod/mod%5Fauthn%5Fdbd.html>  
<http://httpd.apache.org/docs/current/mod/mod%5Fauthz%5Fdbd.html>
