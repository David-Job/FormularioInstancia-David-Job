const mensajes = {
  patronNombreApellido: 'Nombre y apellido: solo texto con letras, ñ y tildes.',
  patronDNI: 'DNI: debe tener el formato X-55555555 o 55555555-X',
  patronCorreoElectronico: 'Correo electrónico: debe tener un formato válido',
};

function validar(idInput) {
  const input = document.getElementById(idInput);
  input.addEventListener('input', (e) => {
    e.preventDefault();

    if (input.validity.valueMissing) {
      input.setCustomValidity('Falta este valor por introducir.');
    } else if (input.validity.patternMismatch) {
      switch (input.name) {
        case 'nombre':
        case 'apellido':
          input.setCustomValidity(mensajes.patronNombreApellido);
          break;

        case 'dni':
          input.setCustomValidity(mensajes.patronDNI);
          break;

        case 'email':
          input.setCustomValidity(mensajes.patronCorreoElectronico);
          break;

        default:
      }
    } else input.setCustomValidity('');
  });
}

['campo-nombre', 'campo-apellido', 'campo-dni', 'campo-email'].map(validar);
