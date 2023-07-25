const validationInput = document.getElementById('validation-input');
const validLength = Number(validationInput.dataset.length);

validationInput.addEventListener('blur', () => {
    const inputValue = validationInput.value.trim();
    if (inputValue.length === validLength) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
});