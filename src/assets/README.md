# Devsar - WebApps Skills Test
Test práctico para aspirantes a puestos de backend/fullstack @Devsar. 
El ejercicio consistirá en desarrollar una pequeña app.
**NOTA:** Podrás consultar libremente la documentación online web de
Django/Python/jQuery/Bootstrap.

Tecnologías necesarias para desarrollar este examen.
* Python
* Django
* CSS3
* HTML5
* Bootstrap **
* jQuery **

__** No requeridos, pero deseables.__

## Problema / Descripción Funcional:

Se desea construir una pequeña aplicación web que se encargue de manejar las reserva de
canchas de futbol. La empresa dispone de N canchas de fútbol que alquila diariamente para
diferentes eventos. De una cancha de fútbol nos interesa conocer los siguientes datos:
* Nombre (ex: “La Diego Armando”)
* Código Interno (ex “ful-AF321”)
* Tipo (“Cancha de 11”, “Cancha de 7”, etc)
* Además se deberá indicar si la cancha cuenta con los siguientes servicios: Vestuario,
Iluminación, Césped Sintético)

Los alquileres son de 1 hora. De la reserva se desea conocer la siguiente información:
* Qué cancha se quiere reservar
* Qué cliente la solicitó (cliente :: String)
* Quién tomó la reserva (Empleado de turno)
* Fecha de Reserva (el dia en que se efectuó la solicitud, debe ser seteado
automáticamente)
* Fecha y Hora del turno

Se requiere que el evaluado complete al menos la siguiente funcionalidad.

**NOTA:** Antes de comenzar se recomienda leer la lista entera de requerimientos. Si el evaluado
considera que su nivel de experiencia es suficientemente alto podrá optar por resolver algunas
situaciones utilizando ajax.

### Básico
En este nivel evaluaremos utilización de Django como framework de desarrollo web
(controllers, models, templates, etc), HTML básico.
1. Creación de los Modelos necesarios para resolver el problema planteado.
2. Creación de las siguientes vistas:
* lista_canchas()
* detalle_cancha()
* crear_reserva() *1
* borrar_reserva() *2
* editar_reserva() *1

__*1__ Si el desarrollador lo creyera oportuno podría utilizar la misma vista para la creacion/edicion.

__*2__ Bien podría hacerse utilizando ajax

**Página #1:** Listar todas las Canchas que la empresa tenga disponibles para alquiler **(NOTA: no es necesario hacer el ABM de las canchas, la creación de las mismas se puede realizar a través del admin de Django)**

Ejemplo:

| #Cancha | Tipo | ¿Vestuario Disponible? | ¿Iluminación? | ¿Cesped Sintético? |
| ------- | ---- | ---------------------- | ------------- | ------------------ |
| cancha #1 | Cancha 11 | Sí | No | No|
| cancha #2 | Cancha 7  | NO | Sí | Sí |

**Página #2:** Ver detalle e información de una cancha. Se deberá mostrar la siguiente
información:
* Nombre de cancha
* Código Interno
* Tipo
* ¿Vestuario Disponible?
* ¿Iluminación?
* ¿Cesped Sintético

Adicionalmente a la información de la cancha se deberá mostrar el listado de las últimas 20
reservas realizadas.

Ejemplo:

Reservas:

| Fecha y Hora | Cliente | Acciones |
| ------------ | ------- | -------- |
| 2015-10-3 15.00 | Jorge Peterson | X |
| 2015-10-8 17.00 | Peter Jackson | X |

* Crear una nueva reserva.
* Borrar una reserva.
* Editar una reserva.

**Página #3:** Formulario para Crear una reserva:

Deberán consignarse al menos los datos mencionados en el apartado del problema.

### Intermedio
Se evaluará el manejo de maquetado HTML con bootstrap, utilización de ModelForms y
componentes de jQuery.
* Agregar un filtro en el listado de canchas que permita filtrar por “amenities” (ex: aquellas que
tengan césped sintético). Ex: 2 links “con césped sintético” y “con Vestuario”.-
* Mejorar los templates utilizando clases bootstrap (row, col, well, list, h1, h2, etc).
* Utilizar jQuery.datepicker para los date input de manera de normalizar los dates introducidos
por el usuario.
* Utilización de ModelForm para la CREACIÓN/EDICIÓN de los modelos.
* Validar que no haya SOLAPAMIENTO entre reservas ya existentes para la misma cancha.
* Uso de componentes Bootstrap (Tablas, navbars, solapas, etc para mejorar el look&feel del
frontend).

### Avanzado
En este nivel evaluaremos el manejo de javascript, la utilización de AJAX para requests
asincrónicos, manejo de ventanas modales, y manejo avanzado de componentes jQuery

* En la página de “Información de cancha” incluir un Calendar
([JQuery Datepicker](http://jqueryui.com/datepicker/#inline)) de jQuery con la disponibilidad de dicha cancha
deshabilitando aquellas fechas en las cuales haya sido reservada (tips: usar function
beforeShow ([JQuery ui datepicker disable array of dates](http://stackoverflow.com/questions/15400775/jquery-ui-datepicker-disable-array-of-dates))
* Utilización de ventanas modales de bootstrap (o jQuery.modal en su defecto) para la
visualización de los distintos forms ([Ventanas Modales - Bootstrap](http://getbootstrap.com/2.3.2/javascript.html#modals).)
* Utilización de AJAX para acciones de CREATE/EDIT/REMOVE.
([AJAX con JQuery](http://api.jquery.com/jquery.ajax/))

## Solución Plantead - Sistema de Reservas en Línea - SReL
Para el backend se creará una API con DRF que será consumida por Angular en el Frontend. Ambos estáran desplegadas en [Heroku](https://heroku.com/).
El código fuente se encuentra alojado en GitHub. [FrontEnd](https://github.com/JandroMejia97/srel-front). [Backend](https://github.com/JandroMejia97/srel-api)
### Diagramas
#### Modelo del Dominio
<p align="center">
    <img width="800px" src="https://drive.google.com/uc?export=view&id=15hoWVtwl8I87G_4r3V_awwPmp4E5k8MT" alt="Modelo del Dominio">
</p>

#### Módulos
<p align="center">
    <img width="800px" src="https://drive.google.com/uc?export=view&id=1d0cNC3GBXVeMCP4mwMm2bwu1eQ2XqyWy" alt="Módulos">
</p>

##### Módulos Generales y sus componentes
<p align="center">
    <img width="800px" src="https://drive.google.com/uc?export=view&id=1woRh3fP60lduelrYfTgq5hlH3iJpaQ8Y" alt="Módulos">
</p>

##### Módulo del Sistema y sus componentes
<p align="center">
    <img width="800px" src="https://drive.google.com/uc?export=view&id=1LAeslKAX9AVmM0sSrpaIzRJaGSW2_SMm" alt="Módulos">
</p>

### Tecnologías
#### Backend
* [Django](https://www.djangoproject.com/)
* [Django Rest Framework](https://www.django-rest-framework.org/)
* [django-filter](https://pypi.org/project/django-filter/)
* [python-decouple](https://pypi.org/project/python-decouple/)
* [dj-database-url](https://pypi.org/project/dj-database-url/)
* [psycopg2](https://pypi.org/project/psycopg2)
* [django-cors-headers](https://pypi.org/project/django-cors-headers/)
* [gunicorn](https://pypi.org/project/gunicorn/)
* [whitenoise](https://pypi.org/project/whitenoise/)
#### Frontend
* [Angular](https://angular.io/)
* [Angular Material](https://material.angular.io/)
* [Express](https://expressjs.com/es/)
* [MomentJS](http://momentjs.com/)
* [ngx-markdown](https://jfcere.github.io/ngx-markdown/)
