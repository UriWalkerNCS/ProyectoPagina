function toggleMinimize() {
    const commentSection = document.getElementById('comment-section');
    const minimizedComment = document.getElementById('minimized-comment');
    
    if (commentSection.style.display === 'none') {
        commentSection.style.display = 'block';
        minimizedComment.style.display = 'none';
    } else {
        commentSection.style.display = 'none';
        minimizedComment.style.display = 'block';
    }
  }
  
  function submitComment() {
    const commentText = document.getElementById('comment').value;
    if (commentText.trim() !== "") {
        const commentList = document.getElementById('comment-list');
        const newComment = document.createElement('div');
        newComment.classList.add('comment-item');
        
        newComment.innerHTML = `
            <div class="comment-content">
                <h4>Estudio Fotografico Morales</h4>
                <p>${commentText}</p>
                <div class="comment-meta">Hace un momento</div>
            </div>
        `;
        
        commentList.appendChild(newComment);
        document.getElementById('comment').value = "";
    }
  }