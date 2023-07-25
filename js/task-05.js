const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', (event) => {
    const name = event.target.value.trim();
    nameOutput.textContent = name === '' ? 'Anonymous' : name;
});