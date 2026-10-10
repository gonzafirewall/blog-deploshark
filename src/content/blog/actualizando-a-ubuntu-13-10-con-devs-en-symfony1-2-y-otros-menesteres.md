---
title: "Actualizando a Ubuntu 13.10, con Devs en Symfony1.2, y otros menesteres"
description: "Instrucción enviada a los desarrolladores que actualizaron a 13.10 epas/lib/vendor/symfony/lib/ response/sfWebResponse.class. php on line 407 protected..."
pubDate: 2013-10-21
tags: []
draft: false
legacy: true
---

Instrucción enviada a los desarrolladores que actualizaron a 13.10 

  
epas/lib/vendor/symfony/lib/response/sfWebResponse.class.php on line 407

  
protected function normalizeHeaderName($name)

  
return preg\_replace('/\\-(.)/e', ''-'.strtoupper('\\\\1')' , strtr(ucfirst(strtolower($name)), '\_', '-'));

}

  
A esta versión que es compatible hacia atrás por lo que no vamos a tener ningun problema en PRODUCCION

  
protected function normalizeHeaderName($name)

{

$callback = function($matches) {

return '-'.strtoupper($matches\[1\]);

};

return preg\_replace\_callback('/\\-(.)/', $callback , strtr(ucfirst(strtolower($name)), '\_', '-'));

}

  
Otro problema tiene que ver con la conf de Apache

  
los archivos de configuracion que están en 

/etc/apache2/sites-enabled/

/etc/apache2/sites-available/

  
antes no tenian extensión ahora si la DEBEN tener y es ".conf"

o pueden sacarle la expresión que usa para listarlas de

  
IncludeOptional sites-enabled/\*.conf # a

IncludeOptional sites-enabled/\*

  
y las lineas que son 

  
### 2.2 configuration:

```
Order deny,allow
Deny from all
```

### 2.4 configuration:

```
Require all denied
```

  
deben cambiarlas \[1\]

  
y por último el paquete php5-json debe ser instalado \[2\] por que ya no viene por DEFAULT en PHP5.5 \[3\]

  
apt-get install php5-json # y reinicien apache

/etc/init.d/apache2 restart

  
Bueno eso es todo por ahora!

  
\[0\] <http://stackoverflow.com/a/18077456>

\[1\] <http://httpd.apache.org/docs/current/upgrading.html>

\[2\] <http://liorkaplan.wordpress.com/2013/06/01/bye-bye-non-free-php-json-extension/>

\[3\] <http://packages.ubuntu.com/saucy/php5-json>
