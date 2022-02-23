Configuración

Revisar que paquetes disponen de nuevas versiones
# npm outdate

Para ver un output más detallado
# npm outdate --dd

Actualizar los paquetes que no están en la ultima versión
# npm update
#

Actualizar un paquete especifico
# npm install json-server@latest

Eliminar paquetes

Eliminar un paquete de node_modules y del archivo package.json
# npm uninstall json-server

Desinstalar un paquete de todo node_modules pero no del archivo package.json
# npm uninstall webpack --no-save

-----------------------------
# npm init :  crea el package.json

pasos: rapidos
# npm init -y    : yes
# npm set init.author.email "diego_1996.c.c@hotmail.com"
# npm set init.author.name "diego caviedes"  
# npm set init.license "MIT" 

# npm install: revisa el package.json e instala todo volver a instalar las depencias 

Instalacion de depencias
1. crear carpeta SRC
# npm i -g  global
# npm install moment --save-dev       falgs:  save: producion, dev: enviroment dev 
# npm install date-fns -D
# npm install date-fns -S

# npm i -g
en node_modules : se agregan los modulos que estoy agregando a mi proyecto

**instalar nodemon de forma global**
# npm install -g nodemon

**mirar si tengo un paquete instalado**
# npm list -g --depth 0


**Eslint**: ¿Esta librería la necesita mi proyecto para correr? No, esta librería lo que hace es marcarme los errores mientras estoy escribiendo el código.

**Babel:** ¿Mi proyecto necesita esto para correr? No, la estoy usando para que todo el código de JavaScript que estoy usando se compile en un archivo que entiendan todos los navegadores.

**React:** ¿Mi proyecto necesita esto para correr? Si, sin esta librería mi proyecto deja de funcionar.
**instalar eslint**
# npm install eslint -O    opcional

# simulaccion de instalacion de paquete.  Cuando queremos ver el output de una dependencia sin proceder con su instalación ejecutamos.
# npm install react --dry.run



Instalar la última versión y desde los servidores de npm:

# npm install webpack -f
# npm install webpack --force
Instalar una versión exacta de un paquete:

# npm install json-server@0.15.0