Transformación de Documento con CSS o XSLT (E1 UF2218)
===

Objetivo
---
Desarrollar un formulario web que permita al usuario enviar sus datos personales (nombre, apellido, `DNI` y correo electrónico) y valide el contenido en el cliente antes de permitir el acceso a una segunda página.

Requisitos funcionales
---

1. El formulario (`index.html`) debe solicitar los siguientes campos:
	- Nombre
	- Apellido
	- `DNI`
	- Correo electrónico
	
2. Antes de enviar el formulario, se deben aplicar validaciones en JavaScript:
	- Nombre y apellido: solo texto con letras, `ñ` y tildes.
	- `DNI`: debe tener el formato X-55555555 o 55555555-X
	- Correo electrónico: debe tener un formato válido
	- Si los datos son correctos, se enviarán por GET a `index2.php`
	
3. En `index2.php`, solo se mostrará el contenido se se recibe un correo electrónico válido y un apellido no vacío. Si alguno de estos dos parámetros falta o es inválido, se denegará el acceso.

4. La plantilla `index2.php` debe presentar la siguiente estructura:
![image](https://github.com/user-attachments/assets/a69a10f4-eb40-4a6f-80bb-7dc62906fcc2)
