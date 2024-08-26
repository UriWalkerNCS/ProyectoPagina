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
              <h4>Usuario 1</h4>
              <p>${commentText}</p>
              <div class="comment-meta">
                  <span>Fecha: ${new Date().toLocaleDateString()}</span>
                  <button onclick="deleteComment(this)">Eliminar</button>
              </div>
          </div>`;
      commentList.appendChild(newComment);
      document.getElementById('comment').value = '';
  }
}
function toggleMinimize() {
    const section = document.getElementById('comment-section');
    const label = document.getElementById('minimized-label');
    const toggleButton = document.getElementById('toggle-btn');
    
    if (section.classList.contains('minimized')) {
        section.classList.remove('minimized');
        label.style.display = 'none';
        toggleButton.textContent = '-'; // Cambia el texto del botón a menos para maximizar
    } else {
        section.classList.add('minimized');
        label.style.display = 'block';
        toggleButton.textContent = '+'; // Cambia el texto del botón a más para minimizar
    }
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
                    <span class="comment-date">Fecha: ${new Date().toLocaleDateString()}</span>
                    <button onclick="deleteComment(this)" class="delete-button">Eliminar</button>
                </div>
            </div>`;
        commentList.appendChild(newComment);
        document.getElementById('comment').value = '';
    }
}

// Función para agregar una respuesta a un comentario
function respondToComment(button) {
    const commentItem = button.closest('.comment-item');
    const responseBox = document.createElement('div');
    
    responseBox.classList.add('response-box');
    responseBox.innerHTML = `
        <textarea placeholder="Escribe tu respuesta..."></textarea>
        <button onclick="submitResponse(this)">Enviar</button>
    `;
    
    commentItem.appendChild(responseBox);
}


function submitResponse(button) {
    const responseBox = button.closest('.response-box');
    const textarea = responseBox.querySelector('textarea');
    const responseText = textarea.value.trim();
    
    if (responseText) {
        const responseItem = document.createElement('div');
        responseItem.classList.add('response-item');
        responseItem.innerHTML = `
            <div class="response-content">
                <p>${responseText}</p>
                <div class="response-meta">
                    <span>Fecha: ${new Date().toLocaleDateString()}</span>
                </div>
            </div>
        `;
        
        responseBox.parentNode.appendChild(responseItem);
        responseBox.remove(); 
    } else {
        alert('Escribe una respuesta antes de enviarla.');
    }
}

function respondToComment(button) {
    const commentItem = button.closest('.comment-item');
    const responseBox = document.createElement('div');
    
    responseBox.classList.add('response-box');
    responseBox.innerHTML = `
        <textarea placeholder="Escribe tu respuesta..."></textarea>
        <button onclick="submitResponse(this)">Enviar</button>
    `;
    
    commentItem.querySelector('.reply-section').appendChild(responseBox);
}

function submitResponse(button) {
    const responseBox = button.closest('.response-box');
    const textarea = responseBox.querySelector('textarea');
    const responseText = textarea.value.trim();
    
    if (responseText) {
        const responseItem = document.createElement('div');
        responseItem.classList.add('response-item');
        responseItem.innerHTML = `
            <div class="response-content">
                <p>${responseText}</p>
                <div class="response-meta">
                    <span>Fecha: ${new Date().toLocaleDateString()}</span>
                </div>
            </div>
        `;
        
        responseBox.parentNode.appendChild(responseItem);
        responseBox.remove(); 
    } else {
        alert('Escribe una respuesta antes de enviarla.');
    }
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
                    <span class="comment-date">Fecha: ${new Date().toLocaleDateString()}</span>
                    <button onclick="respondToComment(this)" class="reply-button">Responder</button>
                    <button onclick="deleteComment(this)" class="delete-button">Eliminar</button>
                </div>
                <div class="reply-section">
                    <!-- Las respuestas se agregarán aquí -->
                </div>
            </div>`;
        commentList.appendChild(newComment);
        document.getElementById('comment').value = '';
    }
}


