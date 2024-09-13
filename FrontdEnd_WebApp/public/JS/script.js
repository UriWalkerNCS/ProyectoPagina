function showSection(id) {
  document.querySelectorAll('section').forEach(section => {
    section.style.display = 'none';
  });
  if (id) {
    document.getElementById(id).style.display = 'block';
  }
}

function showModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

function login() {
  const email = document.getElementById('login-correo').value;
  const password = document.getElementById('login-contrasena').value;
    fetch('http://localhost:1213/auth', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ "CorreoElectronico":email, "Contrasena":password })
})
.then(res => res.json())
.then(res=> {
      console.log(res);
      localStorage.setItem("user",JSON.stringify(res));
});
 
}

function logout() {
  localStorage.removeItem('isAdmin');
  alert('Cierre de sesión exitoso');
  document.getElementById('logoutButton').style.display = 'none';
  removeAdminButtons();
}

function editContent(sectionId) {
  const section = document.getElementById(sectionId);
  const content = section.innerHTML;
  const newContent = prompt('Edita el contenido:', content);
  if (newContent !== null) {
    section.innerHTML = newContent;
    addEditDeleteButtons(sectionId);  // Vuelve a añadir los botones después de la edición
  }
}

function deleteContent(sectionId) {
  const section = document.getElementById(sectionId);
  const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este contenido?');
  if (confirmDelete) {
    section.innerHTML = '';
  }
}

function addEditDeleteButtons(sectionId) {
  const section = document.getElementById(sectionId);
  const existingButtons = section.querySelectorAll('button');
  
  if (existingButtons.length > 0) return; // Evita añadir botones si ya existen

  const editButton = document.createElement('button');
  editButton.textContent = 'Editar';
  editButton.onclick = () => editContent(sectionId);
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Eliminar';
  deleteButton.onclick = () => deleteContent(sectionId);
  
  section.appendChild(editButton);
  section.appendChild(deleteButton);
}

function addAdminButtons() {
  const sections = document.querySelectorAll('main > section');
  sections.forEach(section => {
    addEditDeleteButtons(section.id);
  });
}

function removeAdminButtons() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    if (button.textContent === 'Editar' || button.textContent === 'Eliminar') {
      button.remove();
    }
  });
}

window.onload = function() {
  showSection('inicio');
  if (localStorage.getItem('isAdmin') === 'true') {
    document.getElementById('logoutButton').style.display = 'block';
    addAdminButtons();
  }
}

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario por defecto
    
    // Obtén los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    // Validación simple
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
                alert('Usuario registrado con éxito');
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
  
/*FUNCIONAMIENTO DEL CALENDARIO*/

function addDescription() {
  const selectedDay = document.querySelector('input[name="calendar"]:checked');
  if (!selectedDay) {
    alert('Por favor, selecciona un día primero.');
    return;
  }
  
  const description = document.querySelector('input[aria-label="descrip"]').value;
  if (description.trim() === '') {
    alert('La descripción no puede estar vacía.');
    return;
  }
  
  const dayValue = selectedDay.value;
  const descriptionText = document.createElement('p');
  descriptionText.className = 'description'; 
  descriptionText.textContent = description;
  
  const dayCell = document.querySelector(`td input[value="${dayValue}"]`).parentNode;
  dayCell.appendChild(descriptionText);
  
  document.querySelector('input[aria-label="descrip"]').value = ''; 
}

function removeDescription() {
  const selectedDay = document.querySelector('input[name="calendar"]:checked');
  if (!selectedDay) {
    alert('Por favor, selecciona un día primero.');
    return;
  }

  const dayValue = selectedDay.value;
  const dayCell = document.querySelector(`td input[value="${dayValue}"]`).parentNode;
  const descriptions = dayCell.querySelectorAll('p.description'); 

  if (descriptions.length > 0) {
    descriptions.forEach(desc => desc.remove());
  } else {
    alert('No hay descripciones para eliminar en este día.');
  }
}

function markAvailable() {
  const selectedDay = document.querySelector('input[name="calendar"]:checked');
  if (!selectedDay) {
    alert('Por favor, selecciona un día primero.');
    return;
  }
  
  const dayValue = selectedDay.value;
  const dayCell = document.querySelector(`td input[value="${dayValue}"]`).parentNode;

  // Cambiar el color de fondo para marcar el día como disponible
  dayCell.style.backgroundColor = '#d4edda'; 
  dayCell.style.color = '#155724'; 
  dayCell.innerHTML = `${dayValue}<span class="status">Disponible</span>`;
}

function markOccupied() {
  const selectedDay = document.querySelector('input[name="calendar"]:checked');
  if (!selectedDay) {
    alert('Por favor, selecciona un día primero.');
    return;
  }
//NO SALE
  const dayValue = selectedDay.value;
  const dayCell = document.querySelector(`td input[value="${dayValue}"]`).parentNode;

  // Cambiar el color de fondo para marcar el día como ocupado
  dayCell.style.backgroundColor = '#f8d7da'; 
  dayCell.style.color = '#721c24'; 
  dayCell.innerHTML = `${dayValue}<span class="status">Ocupado</span>`;
}

window.onload = function() {
  showSection('inicio');
  if (localStorage.getItem('isAdmin') === 'true') {
    document.getElementById('logoutButton').style.display = 'block';
    addAdminButtons();
  }

  document.querySelector('.btn-secondary').addEventListener('click', addDescription);
  document.querySelector('.btn-outline-danger').addEventListener('click', removeDescription);
  document.querySelector('.btn-outline-success').addEventListener('click', markAvailable);
  document.querySelector('.btn-outline-danger').addEventListener('click', markOccupied);
}

//Comentario//

        
    
        
        // JS DE COMENTARIO
        function toggleMinimize() {
          const section = document.getElementById('comment-section');
          const label = document.getElementById('minimized-label');
          const isMinimized = section.style.display === 'none';
          if (isMinimized) {
              section.style.display = 'block';
              label.style.display = 'none';
          } else {
              section.style.display = 'none';
              label.style.display = 'block';
          }
        }
        
        function manageComment(button) {
          const commentContent = button.closest('.comment-content');
          commentContent.style.backgroundColor = '#d4edda'; // Color verde claro para indicar que ha sido gestionado
          alert('Comentario gestionado');
        }
        
        function deleteComment(button) {
          const commentItem = button.closest('.comment-item');
          commentItem.remove();
          alert('Comentario eliminado');
        }
        
        function submitComment() {
          const commentText = document.getElementById('comment').value;
          if (commentText.trim()) {
            const commentList = document.getElementById('comment-list');
              const newComment = document.createElement('div');
              newComment.classList.add('comment-item');
              newComment.innerHTML = `
                  <div class="comment-content">
                      <h4>Nuevo Usuario</h4>
                      <p>${commentText}</p>
                      <div class="comment-meta">
                          <span>Fecha: ${new Date().toLocaleDateString()}</span>
                          <button onclick="manageComment(this)">Administrar</button>
                          <button onclick="deleteComment(this)">Eliminar</button>
                      </div>
                  </div>`;
              commentList.appendChild(newComment);
              document.getElementById('comment').value='';
        }
        }
        //#region