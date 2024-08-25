//para modificar texto//
const boton = document.getElementById("modificatext");
const parrafo = document.getElementById("text1");
const inputTexto = document.getElementById("nuevoTexto");

boton.addEventListener("click", function() {
    const textoActualizado = inputTexto.value;

    if (textoActualizado.trim() === "") {
        alert("El campo no puede estar vacío.");
        return;
    }
    parrafo.textContent = textoActualizado;})

    //para modificar imagen//
 const archivoImagen = document.getElementById("seleccImg");
        const cambiarImagenBtn = document.getElementById("cambiaImg");
        const imagen = document.getElementById("imageActu");
        let nuevaImagenSrc = "";

        // Cuando se selecciona un archivo
        archivoImagen.addEventListener("change", function(event) {
            const archivo = event.target.files[0];
            const lector = new FileReader();

            lector.onload = function(e) {
                nuevaImagenSrc = e.target.result;
            };

            if (archivo) {
                lector.readAsDataURL(archivo);
            }
        });

        // Cuando se hace clic en el botón para cambiar la imagen
        cambiarImagenBtn.addEventListener("click", function() {
            if (nuevaImagenSrc) {
                imagen.src = nuevaImagenSrc;
            }
        });

        //para modificar o cambiar el video actual//
        const archivoVideo = document.getElementById("seleccVideo");
        const cambiaVideo = document.getElementById("cambiaVideo");
        const video = document.getElementById("videoActu");
        let nuevoVideoSrc = "";

        //accion que realiza cuando se selecciona el video del escritorio
        archivoVideo.addEventListener("change", function(event) {
            const archivo = event.target.files[0];
            const lector = new FileReader();

            lector.onload = function(e) {
                nuevoVideoSrc = e.target.result;
            };

            if (archivo) {
                lector.readAsDataURL(archivo);
            }
        });

        // para cuando se haga clic en el boton cambie el video
        cambiaVideo.addEventListener("click", function() {
            if (nuevoVideoSrc) {
                video.src = nuevoVideoSrc;
            }
        });
