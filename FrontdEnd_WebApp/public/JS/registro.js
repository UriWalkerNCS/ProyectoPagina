document.getElementById('register-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Previene el envío del formulario por defecto

  // Obtén los valores del formulario
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const contrasena = document.getElementById('contraseña').value;

  // Validación simple (puedes mejorarla)
  if (nombre && correo && contrasena) {
      fetch('/registro', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ nombre, correo, contrasena })
      })
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              document.querySelector('.mensaje-exito').style.display = 'block';
              document.getElementById('register-form').reset(); // Reinicia el formulario
          } else {
              alert('Error: ' + data.message);
          }
      })
      .catch(error => {
          console.error('Error:', error);
          alert('Hubo un problema con el registro.');
      });
  } else {
      alert('Por favor, completa todos los campos.');
  }
});
