---
title: "ansible - un Configuration Management en Python"
description: "Ansible [0] es parte de los denominados configuration managments, es una de las herramientas más nuevas dentro del sector donde son más reconocidas Puppet..."
pubDate: 2013-10-27
tags: ["managment", "python", "configuration", "devops", "ansible"]
draft: false
legacy: true
---

Ansible \[0\] es parte de los denominados configuration managments, es una de las herramientas más nuevas dentro del sector donde son más reconocidas Puppet (Ruby), Chef (Ruby), y tal vez Salt (Python) entre otras.\[1\]  
  
Despues de mi fatidico intento con su versión Web (escrita en Django + Celery) \[2\] (que igualmente tengo que terminar de probar). Y luego de asistir al debate de "DevOps en Español" el dia de ayer. Ayer mismo me puse a instalar ansible en su versión CLI que no solo en Ubuntu es una trivialidad sino que es sencillo de hacer andar con una configuración muy sencilla para empezar.  

  
**Instalando Ansible en Ubuntu**

  
```bash
$ sudo add-apt-repository ppa:rquillo/ansible
$ sudo apt-get update
$ sudo apt-get install ansible
```

  
para instalaciones en otras distros pueden leer por acá \[3\]

  
El problema de instalarlo de esta manera es que en el repo está la versión 1.1 y si te pasa como a mi podés actualizarlo con 

  
```bash
$ sudo pip install ansible --upgrade
```

  
Pero a mi me paso que el pip me lo instala en /usr/local/bin/ asi que tuve que hacer lo siguiente

  
```bash
$ sudo rm /usr/bin/ansible*
$ sudo ln -s /usr/local/bin/ansible* /usr/bin/.
```

  
Una vez instalado uno tiene unos comandos nuevos llamados ansible y ansible-playbook entre otros.

  
**Jugando con ansible en cli**

En /etc/ansible/hosts configuramos los hosts con los que vamos a jugar.

  
```bash
$ sudo vim /etc/ansible/hosts
# acá puse un par de hosts contra los que 
# ya estoy validado con mi llave pública
# por lo que no me va a preguntar clave :P
```

Y entonces probamos nuestro primer comando

  
```console
$ ansible all -m ping
# En estos hosts no tengo el mismo usuario que en mi notebook
# por lo que tengo que hacer un pequeño cambio a este comando
$ ansible all -m ping -u www-data
epas.prod | success >> {
    "changed": false, 
    "ping": "pong"
}

epas.dev | success >> {
    "changed": false, 
    "ping": "pong"
}

epas.test | success >> {
    "changed": false, 
    "ping": "pong"
}

```

  
De esta forma se puede ejecutar comanditos locos sin tener que hacer ninguna configuración 

  
```console
$ ansible all -a "/bin/echo hello"
epas.dev | success | rc=0 >>
hello

epas.test | success | rc=0 >>
hello

epas.prod | success | rc=0 >>
hello

```

  
Pero bueno ese no es el objetivo principal de ansible pero para esa parte vamos a hacerlo en próximo post ya que no quisiera que se haga muy largo.

  
\[0\] <http://www.ansibleworks.com/why-ansible/>

\[1\] <http://en.wikipedia.org/wiki/Comparison%5Fof%5Fopen%5Fsource%5Fconfiguration%5Fmanagement%5Fsoftware>

\[2\] <http://www.ansibleworks.com/ansibleworks-awx/>

\[3\] <http://ansibleworks.com/docs/intro%5Finstallation.html>
