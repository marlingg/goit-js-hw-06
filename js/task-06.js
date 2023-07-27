function validateInput() {
    const validationInput = document.getElementById('validation-input');
    const validLength = Number(validationInput.dataset.length);

    const inputValue = validationInput.value.trim();
    if (inputValue.length === validLength) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }
}

const validationInput = document.getElementById('validation-input');
validationInput.addEventListener('blur', validateInput);