---
title: "Analizando Quiper - Compará precios descuidados"
description: "Quiper[0], es una aplicación móvil desarrollada en la empresa donde trabajo, que se llama Quicuo[1]. Su nombre es principalmente una fusión de la palabra..."
pubDate: 2014-03-17
tags: ["python", "arquitectura", "nginx", "android", "sqlobject", "sequelize", "requests", "nodejs", "quiper", "quicuo", "mechanize", "ansible", "pm2", "beautifulsoup", "php", "mysql", "expresjs", "phonegap", "play store"]
draft: false
legacy: true
---

**Quiper\[0\],** es una aplicación móvil desarrollada en la empresa donde trabajo, que se llama Quicuo\[1\].  
  
Su nombre es principalmente una fusión de la palabra Quicuo y Super. **_Es una aplicación que permite comparar los precios de todo tipo de productos en los supermercados más grandes del país y en principio funciona bastante bien para los que son de Capital y Gran Buenos Aires._**  
  
_**Aplicación Movil**_  
La aplicación móvil está desarollada en HTML, CSS y Javascript. Con una terrible ayuda de PhoneGap \[2\] para hacerla multi plataforma. Principalmente fue creada para Android\[3\] pero con muy pocos cambios puede ser y va a ser generada para IPhone muy pronto.  
  
**_Backend - API_**  
La API de consulta está desarrollada sobre node.js\[4\], con expressjs\[5\] como Framework de desarrollo y sequelize\[6\] como ORM\[7\] para las consultas a la base de datos.  
Todo esto es servido a tráves de pm2\[15\] como supervisor de procesos en nodejs y con Nginx\[16\] como WebServer.  
  
**Backend - DB, Extracción y Analisis**  
La extracción que es parte principal del desarrollo está escrita sobre Python\[9\], en principio se analizó un Scrappeador profesional pero para los primeros intentos nos pareció un poco complejo así que se optó por hacer un Scrapper propio bien amoldado para nuestro propósito. Por consiguiente, se utilizaron diferentes librerías que son bastante típicas en verdad para esto. BeautifulSoup\[10\] como parseador de las respuestas HTML para extracción de datos. Mechanize\[11\] como generador de requests dinamicas y crawler de webs, en principio fue generado todo con Mechanize y luego en algunos casos simples se usó requests\[12\] una librería con una API mucho más elegante. Además para guardar estos datos de forma más programática se uso SQLObject\[13\] como ORM en esta etapa.  
  
Finalmente el análisis y unión de datos fue escrito en PHP\[14\] y se usó su conector para MySQL limpio sin ORM.  
  
**Servidores**  
Básicamente los servidores están en Amazon EC2\[17\] y por el momento son Dos uno como WebServer para los servicios que corren Nodejs. La Api que consume la app móvil y la Web que todavia no se lanzó.  
Y otro server que es el más grande y es el de la DB que tiene MySQL y corre periódicamente la extracción y análisis de datos.  
Los servidores fueron ambos desplegados con Ansible \[18\]  
  
Un crisol de tecnologías libres que unidas generan una aplicación que funciona y cumple su objetivo, principalmente participaron de este proyecto Dos Desarrolladores(principalmente uno para Phonegap css html y js y otro para el Analisis de datos con PHP), un ProjectLeader, el CEO de Quicuo y un SysAdmin/Desarrollador Python (este soy yo).  
  
\[0\] [http://www.quiper.com.ar](http://www.quiper.com.ar/)  
\[1\] [http://www.quicuo.com.ar](http://www.quicuo.com.ar/)  
\[2\] <http://phonegap.com/>  
\[3\] <https://play.google.com/store/apps/details?id=com.quicuo.quiper>  
\[4\] <http://nodejs.org/>  
\[5\] <http://expressjs.com/>  
\[6\] <http://sequelizejs.com/>  
\[7\] <http://en.wikipedia.org/wiki/Object-relational%5Fmapping>  
\[8\] <http://www.mysql.com/>  
\[9\] <https://www.python.org/>  
\[10\] <http://www.crummy.com/software/BeautifulSoup/>  
\[11\] <http://wwwsearch.sourceforge.net/mechanize/>  
\[12\] <http://docs.python-requests.org/en/latest/>  
\[13\] <http://sqlobject.org/>  
\[14\] <http://php.net/>  
\[15\] <https://github.com/Unitech/pm2>  
\[16\] <http://nginx.org/>  
\[17\] <http://aws.amazon.com/es/ec2/>  
\[18\] <http://www.ansible.com/home>
