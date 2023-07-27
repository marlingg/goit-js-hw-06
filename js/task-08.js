const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('Будь ласка, заповніть обидва поля.');
    } else {


        console.log('Form is valid. Submitting...');
        loginForm.reset();
    }
});