function previewImage(photoId, inputId) {  //visualiza la imagen seleccionada antes de abrirla 
    const fileInput = document.getElementById(inputId); 
    const photoElement = document.getElementById(photoId); // donde el usuario seleccionara la imagen
  
    const file = fileInput.files[0];
    const reader = new FileReader();
  
    reader.onload = function(e) {
  
      // Cambia la imagen actual con la imagen seleccionada
      photoElement.src = e.target.result;
    }
  
    if (file) {
      reader.readAsDataURL(file); // Lee el archivo como una URL
    }
  }
  
  // Funcionalidad para eliminar la imagen
  function deletePhoto(photoId) {
    if (confirm("¿Estás seguro que quieres eliminar esta imagen?")) {
      const photoElement = document.getElementById(photoId);
      photoElement.remove(); // Elimina la imagen
      photoElement.parentElement.querySelector('.photo-buttons').remove(); // Elimina los botones
    }
  }