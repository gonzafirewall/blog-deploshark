---
title: "El cambio continúa"
description: "Teniendo como base el proverbio taoista que dice algo así como \"el cambio es la única constante\". Avancé con una cantidad de cambios. Cambié definitivamente..."
pubDate: 2014-02-04
tags: ["route53", "amazon", "archey", "huayra", "ec2", "constante", "continuos", "cambios", "notebook", "ansible"]
draft: false
legacy: true
---

Teniendo como base el proverbio taoista que dice algo así como "el cambio es la única constante". Avancé con una cantidad de cambios. Cambié definitivamente mi Ubuntu 13.10, por Huayra \[0\]el Sistema Operativo que se usa en la Netbooks del programa Conectar Igualdad \[1\] y que ahora uso como SysAdmin de la empresa Quicuo.  
  
[![](/images/legacy/el-cambio-continua/huayra_screen.png)](/images/legacy/el-cambio-continua/huayra_screen.png)

  
Es muy bonito mejoraron mucho el diseño si mal no recuerdo antes era demasiado violeta, me gusta ver como "vuela la vaca" cuando la Notebook arranca, con respecto al funcionamiento, el debian wheezy que tiene como base y el gestor de ventanas Mate son muy livianos. Lo que me hizo recordar que me estaba faltando archey en mi terminal \[2\].  
  
Otra cuestión es con el tema del trabajo. En Quicuo estamos en pleno proceso de cambio de los servidores físicos a servidores virtuales en Amazon. Hoy en día ya tenemos 3 servidores que son los que se usan para desarrollo, testing y producción funcionando en instancias EC2 \[3\] por ahora desarrollo y testing funcionan con instancias Micro y producción se la banca bastante bien con una Medium \[4\]. Esto seguido del uso de Ansible\[5\] ha hecho bastante fácil la migración sobre todo teniendo en cuenta que la migración más importante que era Producción ya la hice hace tiempo cuando nos mudamos de oficinas. En cuanto a arquitectura de redes y servidores aún hay varias cosas por hacer como dividir a Producción en diferentes servidores por funcionalidad ya que hoy en un mismo servidor está la DB, el WebServer y otros muchos servicios corriendo ahí, la idea sería optimizar cada server para una sola funcionalidad (uno como Servidor de Base de Datos, otro como servidor web y así). Esto además lo hace más modular y más fácil de intercambiar o hacer cambios aunque no encontré o no sé como buscar documentación que avale esto.  
  
Con respecto al aprendizaje, en estos días con el mismo cambio de la Notebook a Huayra (haciendo el backup por las dudas), encontré unos videos \[7\] de Amazon que son aparentemente para dar la certificación y me los puse a ver gracias a eso terminé de aprender algunas cosas con respecto a los Security groups \[6\] y otras cuestiones del funcionamiento de los servicios Route 53, S3 y otros que son muy interesantes y que voy a ver como implementar por lo pronto.  
  
Finalmente es un año de muchos desafios entre ellos están organizar o al menos conocer mejor a la comunidad de software libre en San Martin \[8\] y ver si podemos hacer aunque sea un evento pequeño al menos.  
  
Igualmente el año recién comienza y todavía no me tome vacaciones parece cansador tanta cosa por hacer pero no es cansador cuando uno ama lo que hace.  
  
\[0\] [http://huayra.conectarigualdad.gob.ar](http://huayra.conectarigualdad.gob.ar/)  
\[1\] [http://www.conectarigualdad.gob.ar](http://www.conectarigualdad.gob.ar/)  
\[2\] <http://www.taringa.net/posts/linux/14628839/Archey-una-nueva-imagen-a-la-terminal.html>  
\[3\] <http://aws.amazon.com/es/ec2/>  
\[4\] <http://aws.amazon.com/es/ec2/instance-types/>  
\[5\] [http://www.ansible.com/](http://www.ansible.com/home)  
\[6\] <http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html>  
\[7\] <http://www.cbtnuggets.com/>  
\[8\] <http://www.facebook.com/SanMarTux>
