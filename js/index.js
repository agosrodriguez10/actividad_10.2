document.getElementById('buttonText').addEventListener('click', function() {
    const inputValue = document.getElementById('inputText').value;

    if (inputValue) {
        localStorage.setItem('textInput', inputValue);
    } else {
        console.error('El campo de texto está vacío.'); 
    }
});
