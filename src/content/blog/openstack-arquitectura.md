---
title: "OpenStack - Arquitectura"
description: "El proyecto OpenStack es una plataforma de computación en la nube de código abierto para todo tipo de nubes, que apunta a ser simple de implementar,..."
pubDate: 2014-01-12
tags: ["servicios", "object storage", "heat", "horizon", "arquitectura", "neutron", "glance", "openstack", "introducción", "iaas", "nova"]
draft: false
legacy: true
---

El proyecto OpenStack es una plataforma de computación en la nube de código abierto para todo tipo de nubes, que apunta a ser simple de implementar, masivamente escalable, y rica en caracteristicas.  
  
OpenStack provee una solución de Infraestructura como Servicio (IaaS) a través de un conjunto de servicios interrelacionados.  
  
**_Servicios de OpenStack_**  
  
**Servicio:** **_DashBoard_**  
**Nombre de proyecto: _Horizon_**  
**Descripción:**  Provee una portal de auto-servicio con interfaz Web para interactuar con los servicios subyacentes de OpenStack, como el lanzamiento de una instancia, la asignación de direcciones IP y la configuración de control de acceso.  
  
**Servicio: _Compute_**  
**Nombre de Proyecto: _Nova_**  
**Descripción:** Administrar el ciclo de vida de las instancias computacionales en el ambiente OpenStack. Responsabilidades incluyen la ejecución de nuevos procesos, la programación y el cierre de máquinas a demanda.  
  
**Servicio: _Networking_**  
**Nombre de proyecto: _Neutron_**  
**Descripción:** Permitir la conectividad de redes como un servicio para otros servicios OpenStack, como son OpenStack Compute. Proveer una API para que los usuarios definan las redes y los acoplamientos en ellos.  
  
**_Almacenamiento_**  
**Servicio: _Object Storage_**  
**Nombre de proyecto: _Swift_**  
**Descripción:** Almacena y recupera objetos de datos no estructurados arbitrarios via RESTful, una API basada en el protocolo HTTP. Este es altamente tolerante a fallos con su replicación de datos y arquitectura de escalabilidad horizontal. Esta implementación no es como un servidor de archivos con directorios montables.  
  
**Servicio: _Block Storage_**  
**Nombre de proyecto: _Cinder_**  
**Descripción:** Provee un bloque de almacenamiento persistente para correr instancias. Este arquitectura de controlador adaptable facilita la creación y administración de dispositivos de almacenamiento en bloque.  
  
_**Servicios Compartidos**_  
**Servicio: _Identity Service_**  
**Nombre de proyecto: _Keystone_**  
**Descripción:** Provee una autenticación y servicio de autorización para otros servicios OpenStack. Provee un catalogo de extremos para todos los servicios OpenStack.  
  
**Servicio: _Image Service_**  
**Nombre de proyecto: _Glance_**  
**Descripción:** Almacena y recupera imagenes de disco de máquinas virtuales. OpenStack Compute hace uso de esto durante el aprovisionamiento de las instancias.  
  
**Servicio: _Telemetry Service_**  
**Nombre de proyecto: _Ceilometer_**  
**Descripción:** Monitorea y mide la facturación de la nube OpenStack, evaluación comparativa, escalabilidad, y propósitos estadísticos.  
  
**_Servicios de alto nivel_**  
**Servicio: _Orchestration Service_**  
**Nombre de proyecto: _Heat_**  
**Descripción:** Organiza múltiples aplicaciones en la nube compuestas por el uso de el formato nativo HOT o el formato de plantilla de AWS CloudFormation, Tanto a través de una API REST OpenStack nátiva y una API de consultas compatibles con CloudFormation.  
  
_**Arquitectura Conceptual**_  

[![](http://docs.openstack.org/havana/install-guide/install/apt/content/figures/1/figures/openstack_havana_conceptual_arch.png)](http://docs.openstack.org/havana/install-guide/install/apt/content/figures/1/figures/openstack%5Fhavana%5Fconceptual%5Farch.png)
