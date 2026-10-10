---
title: "ansible - Python para SysAdmins 2da Parte"
description: "Luego de jugar con la linea de comandos de ansible[0], y tomarme no mucho tiempo pese a que no me cae muy bien YAML se me hizo muy fácil generar mi primera..."
pubDate: 2013-10-28
tags: ["python", "configuration", "devops", "managment", "sysadmin", "ansible"]
draft: false
legacy: true
---

Luego de jugar con la linea de comandos de ansible\[0\], y tomarme no mucho tiempo pese a que no me cae muy bien YAML se me hizo muy fácil generar mi primera configuración.  
  
**Definiciones:**  
**playbook \[1\]:** es el nombre que le da ansible al archivo donde se define la configuración que se desea tener en los servidores. Este está definido con una sintaxis YAML. \[2\]  
**plays:** un playbook está compuesto por varios "plays". El objetivo de un "play" es mapear un grupo de hosts en roles bien definidos. representado por lo que ansible llama "tasks". A nivel básico, una "task" es nada más que una llamada a un modulo de ansible.  
  
Esta es mi configuración de ejemplo que no es ni siquiera util pero es una forma de empezar a probarlo.  
  
```
---
- hosts: epas.dev
  user: www-data
  sudo: yes
  tasks:
    - name: Apache2 no tiene que estar
      apt: pkg=apache2 state=absent
    - name: Confirmando funcionamiento de Nginx
      service: name=nginx state=started

```

  
Lo interesante es ver que cuando defino un servicio no defino el **Comando a ejecutarse** para dejarlo en el estado necesario como si hacemos en Fabric \[3\] y sino que solamente **Declaramos** nuestra intención de como queremos que este funcionando.  
  
En este caso previamente voy a parar nginx solamente para que vean que sucede.  
  
```
admin@quicuo-kaizen:/home/proyectos/serviquo/plays$ ansible-playbook playbook.yml 

PLAY [epas.dev] *************************************************************** 

GATHERING FACTS *************************************************************** 
ok: [epas.dev]

TASK: [Apache2 no tiene que estar] ******************************************** 
ok: [epas.dev]

TASK: [Confirmando funcionamiento de Nginx] *********************************** 
changed: [epas.dev]

PLAY RECAP ******************************************************************** 
epas.dev                   : ok=3    changed=1    unreachable=0    failed=0
```

Vemos como cada "task" es ejecutada, e idempotente \[4\] donde cada tarea si no es necesaria no se vuelve a ejecutar solamente es comprobada. y al final hay un resumen con las tareas que fueron ejecutadas.  
  
Hay muchas cosas más que todavia no pude poner en práctica por cuestión de tiempo pero que son muy poderosas como:  
templating  
Se puede definir un template armado en el bonito jinja2\[5\] y después subirlo a al servidor.  
handlers  
Son eventos en el caso de que se hagan cambios el siguiente "task" es un ejemplo sacado directamente de la web de ansible \[6\]  
  
```
- name: template configuration file
  template: src=template.j2 dest=/etc/foo.conf
  notify:
     - restart memcached
     - restart apache
```

```
handlers:
    - name: restart memcached
      service:  name=memcached state=restarted
    - name: restart apache
      service: name=apache state=restarted
```

Los handlers son básicamente otros task que se ejecutan solamente en el caso de un cambio en el task donde fue configurado.  
En este caso se reinicia el memcached y el apache solamente en el caso de que se copie el template y el archivo sea reemplazado efectivamente.  
  
Los invito a seguir investigando y seguir leyendo!!! más sobre python, sobre ansible, sobre sysadmins!  
  
\[0\] <http://www.ansibleworks.com/docs/intro%5Fadhoc.html>  
\[1\] <http://www.ansibleworks.com/docs/playbooks.html>  
\[2\] <http://www.ansibleworks.com/docs/YAMLSyntax.html>  
\[3\] <http://gonzamartinez.blogspot.com.ar/2013/09/fabric-automatizando-quicuo.html>  
\[4\] <http://es.wikipedia.org/wiki/Idempotencia>  
\[5\] <http://jinja.pocoo.org/docs/>  
\[6\] <http://www.ansibleworks.com/docs/playbooks.html#handlers-running-operations-on-change>
