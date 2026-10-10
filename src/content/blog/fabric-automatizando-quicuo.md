---
title: "Fabric, automatizando Quicuo"
description: "Hay algo que me gusta tanto como las nuevas tecnologias, la programación y la administración de Servidores. Que es no perder el tiempo con tareablas..."
pubDate: 2013-09-22
tags: []
draft: false
legacy: true
---

Hay algo que me gusta tanto como las nuevas tecnologias, la programación y la administración de Servidores. Que es no perder el tiempo con tareablas repetitivas que no me aportan nada.  
  
Entonces llegaron varios conceptos que llenaron mi cabeza y dentro de ellos esta DevOps que tiene toda una conceptualización tanto teórica, como filosófica, como práctica que va más allá de la mera automatización de procesos de "IT Operations" pero empezando por esta parte intento acercarme cada día.  
  
Servidores Quicuo  
  
En Quicuo como en muchas empresas de desarrollo de software tenemos un serie de servidores que tienen funciones definidas.  
  
Desarrollo -> Testing -> Producción  
  
Desarrollo está hecho para romperlo, Testing es para que el cliente haga una pequeña prueba sobre lo nuevo desarrollado y en Producción están los usuarios toqueteando y mal usando nuestro sistema.  
  
Nosotros trabajamos con GIT para el versionado del código, symfony como framework de desarrollo y PostgreSQL etc.  
  
Entonces todo llega en que el SysAdmin (que soy yo) tiene que hacer deploys cada tanto a los servidores a veces de desa a test a veces de test a prod o a veces de desa a prod pasando por la instancia intermedia.  
  
[![](http://farm3.static.flickr.com/2775/4381851322_d46fd7d75e.jpg)](http://farm3.static.flickr.com/2775/4381851322%5Fd46fd7d75e.jpg)
  
  
Envalentonado con la facilidad de programación que me da Python y este concepto de Automatización que vengo tratando de incorporar cada día más a mis tareas diarias. Conocí a Fabric que ya habia visto anteriormente pero que me pareció "RARO" y hoy ya con un tiempo haciendo cosas en Python, Scripts etc lo veo mucho más entendible y práctico.  
  
"Fabric es \[0\] una libreria o herramienta de linea de comandos para coordinar el uso de SSH para el despliege de aplicaciones o tareas de administración de sistemas."  
  
Como hace Deploy el antiguo SysAdmin de Quicuo que hasta hace un tiempo no queria, no sabia o no le interesaba la automatización?  
  
  
1. ssh www-data@servidor\_desarrollo
2. cd carpeta\_donde\_esta\_el\_proyecto
3. git pull # para traer las cosas nuevas
4. php symfony propel:build-all # para correr la creación de las nuevas clases
5. Ejecutar los SQLs para la alteración de tablas e inserción de datos nuevos.
6. php symfony project:deploy
  
  
Como lo hace el nuevo SysAdmin que es un Hacker de la alta sociedad y que intenta aplicar la automatización cada vez que puede?  
  
Desde mi misma notebook ejecuto  
  
1. fab dev full\_deploy
  
Que ayudado por fabric hace todo lo anterior envuelto con Python. quedaría algo así el archivo de fabric.  
  
13 def dev():  
14 env.hosts.append('desa')  
  
25 def deploy\_only():  
26 dest = deploy\_def\[env.hosts\[0\]\]  
27 with cd('sf\_projects/' + app ):  
28 run('php symfony project:deploy %s --go' % dest)  
29 execute(cc, hosts=dest)  
  
31 def full\_deploy():  
32 if env.hosts\[0\] == 'desa:  
33 git\_pull()  
34 build\_all()  
35 migrate()  
36 deploy\_only()  
37  
38 def cc():  
39 with cd('sf\_projects/{}'.format(app) ):  
40 run('php symfony cc')  
41  
42 def git\_pull():  
43 with cd('sf\_projects/{}'.format(app) ):  
44 run('git pull origin master')  
45  
46 def migrate():  
47 print 'Aqui deberia ir codigo para migrar la base de datos'  
48  
49 def build\_all():  
50 with cd('sf\_projects/{}'.format(app) ):  
51 run('php symfony propel:build-all --classes-only')  
  
y si en vez de hacer de desarrollo a testing lo quisiera hacer de testing a produccion solamente deberia cambiar el "dev" por "test" y quedaría así.  
  
fab test full\_deploy  
  
Y ahora conocí Cuisine y conocí Watchdog dos herramientas muy interesantes que los invito a leer. \[1\]  
  
**Gracias Fabric, gracias Python y gracias Quicuo por dejarme Innovar cada vez que quiero.**  
  
Nota: Este blog esta escrito por alguien a quien le gusta mucho Python por ende todas los comentarios si bien intentan ser objetivos definitivamente no lo son y están cargados del tinte correspondiente.  
  
\[0\] [http://fabric.readthedocs.org/](http://fabric.readthedocs.org/en/1.8/)  
\[1\] <http://www.slideshare.net/ffunction/fabric-cuisine-and-watchdog-for-server-administration-in-python>
