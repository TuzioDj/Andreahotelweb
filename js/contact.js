"use strict";

// Contact form inputs
document.querySelectorAll('.contactFormInput input, .contactFormInput textarea').forEach(input => {
    input.addEventListener('input', () => {
        const parent = input.closest('.contactFormInput');
        const label = parent.querySelector('label');

        // Validaciones específicas
        input.classList.remove('hasError'); // Limpiar primero
        label.classList.remove('hasError');
        // Eliminar error previo si existe
        const previousError = parent.querySelector('.errorText');
        if (previousError) previousError.remove();
        
        let errorMessage = '';
        
        if (input.value.trim() !== "") {
            input.classList.add('notEmpty');
        } else {
            input.classList.remove('notEmpty');
            return;
        }
        

        if (input.name === 'firstname' || input.name === 'lastname') {
            const isValidName = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(input.value.trim());
            if (!isValidName && input.name === 'firstname') {
                errorMessage = 'Nombre inválido';
            }
            else if(!isValidName && input.name === 'lastname'){
                errorMessage = 'Apellido inválido';
            }
        }

        if (input.name === 'email') {
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
            if (!isValidEmail) {
                errorMessage = 'Email inválido.';
            }
        }

        if (input.name === 'repeatEmail') {
            const emailValue = document.querySelector('input[name="email"]').value.trim();
            if (input.value.trim() !== emailValue || emailValue === "") {
                errorMessage = 'Los emails no coinciden.';
            }
        }

        if (errorMessage !== '') {
            input.classList.add('hasError');
            label.classList.add('hasError');

            const errorP = document.createElement('p');
            errorP.classList.add('errorText');
            errorP.textContent = errorMessage;

            label.insertAdjacentElement('afterend', errorP);
        }
    });
});

// Contact form send
document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const firstname = form.firstname.value.trim();
  const lastname = form.lastname.value.trim();
  const email = form.email.value.trim();
  const repeatEmail = form.repeatEmail.value.trim();
  const message = form.message.value.trim();
  const status = document.getElementById('formStatus');

  // Limpieza de estado previo
  status.textContent = '';
  status.className = 'formStatus';

  // Validación
  if (!firstname || !lastname) {
    status.textContent = 'El nombre y apellido son obligatorios.';
    status.classList.add('error');
    return;
  }

  if (!validateEmail(email)) {
    status.textContent = 'El email no es válido.';
    status.classList.add('error');
    return;
  }

  if (email !== repeatEmail) {
    status.textContent = 'Los emails no coinciden.';
    status.classList.add('error');
    return;
  }

  if (!message) {
    status.textContent = 'El mensaje no puede estar vacío.';
    status.classList.add('error');
    return;
  }

  // Envío
  try {
    const formData = new FormData(form);
    const response = await fetch('./sendEmail.php', {
      method: 'POST',
      body: formData,
    });

    const result = await response.text(); // asumimos que devuelve texto

    if (response.ok) {
      status.textContent = 'Mensaje enviado correctamente';
      status.classList.add('success');
      form.reset(); // Limpia el formulario
    } else {
      status.textContent = 'Error al enviar el mensaje';
      status.classList.add('error');
    }
  } catch (err) {
    status.textContent = 'Error de red o servidor';
    status.classList.add('error');
  }
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
