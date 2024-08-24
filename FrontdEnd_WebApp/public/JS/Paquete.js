const btn = document.getElementById("modificatext");
const text = document.getElementById("text2");
const inputTexto2 = document.getElementById("nuevoTexto2");

btn.addEventListener("click", function() {
    const textoActualizado = inputTexto2.value;

    if (textoActualizado.trim() === "") {
        alert("El campo no puede estar vacío.");
        return;
    }
    text.textContent = textoActualizado;})
