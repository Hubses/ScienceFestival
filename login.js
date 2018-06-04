const emailField = document.querySelector('#email');
const passwordField = document.querySelector('#password');

const submitbtn = document.querySelector('.submit');
submitbtn.addEventListener('click', () => {
    localStorage.setItem('user', JSON.stringify({ email: emailField.value, password: passwordField.value }));
    localStorage.setItem('loggined', true);
});