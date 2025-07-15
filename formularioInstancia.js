const formulario = document.getElementById('formulario-instancia');
const campos = Array.from(formulario.getElementsByClassName('field'));
const boton = formulario.getElementsByClassName('btn-submit')[0];

function validarCampo(campo) {
  const esNombreApellidoValido = (c) => /^[A-Za-zñÁÉÍÓÚáéíóú]+$/.test(c.value.trim());
  const esDniValido = (c) => /^([A-Z]-[0-9]{8})|([0-9]{8}-[A-Z])$/.test(c.value.trim());
  const esEmailValido = (c) => /^[a-z0-9_.-]+@[a-z0-9_.-]+\.[a-z]+$/.test(c.value.trim());

  const mensajes = {
    requerido: 'Falta este valor por introducir.',
    nombreApellido: 'Nombre y apellido: solo texto con letras, ñ y tildes.',
    dni: 'DNI: debe tener el formato X-55555555 o 55555555-X',
    correoElectronico: 'Correo electrónico: debe tener un formato válido',
  };

  if (campo.value.length === 0) {
    campo.setCustomValidity(mensajes.requerido);
    return;
  }

  if (['nombre', 'apellido'].includes(campo.name) && !esNombreApellidoValido(campo)) {
    console.log(mensajes.nombreApellido);
    campo.setCustomValidity(mensajes.nombreApellido);
    formulario.reportValidity();
    return;
  }

  if (campo.name === 'dni' && !esDniValido(campo)) {
    campo.setCustomValidity(mensajes.dni);
    return;
  }

  if (campo.name === 'email' && !esEmailValido(campo)) {
    campo.setCustomValidity(mensajes.correoElectronico);
    return;
  }

  campo.setCustomValidity('');
}

boton.addEventListener('click', (e) => {
  e.preventDefault();
  campos.forEach(validarCampo);
  formulario.requestSubmit();
});
