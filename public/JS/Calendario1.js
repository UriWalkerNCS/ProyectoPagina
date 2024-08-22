// Función para agregar o actualizar la descripción en el día seleccionado
function addDescription() {
    const selectedDay = document.querySelector('input[name="day"]:checked');
    const description = document.getElementById('description').value;

    if (selectedDay && description) {
        const dayCell = document.getElementById('day-' + selectedDay.value);
        dayCell.innerHTML = `
            ${selectedDay.value}<br><span class="descripcion">${description}</span>
            <input type="radio" name="day" value="${selectedDay.value}" checked;">
        `;
        // Guardar la descripción en localStorage
        localStorage.setItem('day-' + selectedDay.value + '-description', description);
        localStorage.setItem('selectedDay', selectedDay.value);
    } else {
        alert("Por favor, selecciona un día y escribe una descripción.");
    }
}

// Función para eliminar la descripción del día seleccionado
function removeDescription() {
    const selectedDay = document.querySelector('input[name="day"]:checked');

    if (selectedDay) {
        const dayCell = document.getElementById('day-' + selectedDay.value);
        dayCell.innerHTML = `
            ${selectedDay.value}
            <input type="radio" name="day" value="${selectedDay.value}" checked;">
        `;
        // Eliminar la descripción de localStorage
        localStorage.removeItem('day-' + selectedDay.value + '-description');
    } else {
        alert("Por favor, selecciona un día para eliminar la descripción.");
    }
}

// Función para restaurar la selección del día y la descripción al recargar la página
function restoreSelectedDay() {
    const savedDay = localStorage.getItem('selectedDay');
    if (savedDay) {
        const selectedRadio = document.getElementById('day-' + savedDay).querySelector('input[type="radio"]');
        selectedRadio.checked = true;

        const savedDescription = localStorage.getItem('day-' + savedDay + '-description');
        if (savedDescription) {
            const dayCell = document.getElementById('day-' + savedDay);
            dayCell.innerHTML = `
                ${savedDay}<br><span class="descripcion">${savedDescription}</span>
                <input type="radio" name="day" value="${savedDay}" checked ;">
            `;
        }
    }
}

// Restaurar la selección cuando se carga la página
window.onload = restoreSelectedDay;

//cambia de color el dia dependiendo de la disponibilidad//
function changeDayColor(status) {
    const selectedDay = document.querySelector('input[name="day"]:checked');

    if (selectedDay) {
        const dayCell = document.getElementById('day-' + selectedDay.value);

        // Eliminar clases de color anteriores
        dayCell.classList.remove('disponible', 'ocupado');

        // Agregar la clase según el estado seleccionado
        dayCell.classList.add(status);
    } else {
        alert("Por favor, selecciona un día.");
    }
}
