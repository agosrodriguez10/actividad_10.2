// obtener valor almacenado en localStorage
const savedData = localStorage.getItem('textInput');

// mostrar el valor 
if (savedData) {
    document.getElementById('data').textContent = savedData;
} else {
    document.getElementById('data').textContent = 'No hay datos guardados.';
}
