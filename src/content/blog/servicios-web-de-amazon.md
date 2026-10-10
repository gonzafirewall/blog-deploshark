---
title: "Servicios Web de Amazon"
description: "Leyendo por ahí bastantes cosas sobre la cuestión de los provedores de la cuestión \"Cloud\". Creo estar o no en condiciones de hacer algunos acercamientos..."
pubDate: 2014-02-05
tags: ["route53", "s3", "amazon", "horizontal", "ec2", "escalabilidad", "vertical", "aws"]
draft: false
legacy: true
---

Leyendo por ahí bastantes cosas sobre la cuestión de los provedores de la cuestión "Cloud". Creo estar o no en condiciones de hacer algunos acercamientos sobre los servicios que ofrece el susodicho Amazon para los SysAdmins que trabajamos con servers, deploys, etc.  
  
**EC2**\[0\] - Es su servicio estrella para la provisión de servidores virtuales alojados en alguna parte del mundo en principio (después verás que puedes elegir al menos en que sector del mundo lo quieres) que es altamente escalable o mucho más fácil que escalar que cualquier servidor físico permitiendo tanto escalabilidad vertical (agregación de más recursos a una unidad fisica como ser agregar más memoria a un servidor) como escalabilidad horizontal (agregación de más recursos a una unidad lógica como ser agregar otro server para distribuir la carga en conjunto con un balanceador de carga \[1\]) \[2\]  
  
**S3** \[3\] - Servicio de Almacenamiento Simple o Simple Storage Service por eso lo de s3\. Básicamente se puede definir como un disco rigido en alguna parte del mundo disponible básicamente para almacenar y proveer acceso web a archivos. Por ejemplo es muy útil esto para guardar archivos de cierta importancia ya que es un servicio altamente redundante o archivos grandes y pesados. Y también tiene la posibilidad de ser usado como un Simple Servidor de Páginas Web Estaticas \[4\] que son hechas solamente con Html, Css, Javascript y no necesitan (en prinicipio) acceso a DBs o procesamiento del lado del servidor para hacer cuestiones complejas.  
  
**Route53** \[5\] - Es un servicio DNS en internet como todos pero tiene la virtud de ser parte de la inmensa red de servidores y datacenters de Amazon lo que lo hace también muy redundante y resistente a fallos.  
Tiene cosas que en otros servicios se ofrecen como servicios PREMIUM pero que para Amazon son parte de lo normal como es la posibilidad de cambiar la asignación de una IP según si un cierto chequeo falla por ejemplo el cambiar la IP Pública que el provedor A le da a tu entrada desde Internet si es que se cayó y asignarle la IP Pública de entrada del Provedor B.  
  
Estos a mi criterio son los servicios más conocidos o importantes de Amazon despúes hay cosas más locas como un CDN como lo es Amazon CloudFront\[6\] o un Configuration Managment como lo es CloudFormation \[7\]y otras cosas más que tendrán en un principio que investigar ustedes.  
  
\[0\] <http://aws.amazon.com/es/ec2/>  
\[1\] <http://aws.amazon.com/es/elasticloadbalancing/>  
\[2\] <http://blog.deploshark.com.ar/2014/01/otros-atributos-de-calidad-capitulo-12.html>  
\[3\] <http://aws.amazon.com/es/s3/>  
\[4\] <http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html>  
\[5\] <http://aws.amazon.com/es/route53/>  
\[6\] <http://aws.amazon.com/es/cloudfront/>  
\[7\] <http://aws.amazon.com/es/cloudformation/>
