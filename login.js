const emailField = document.querySelector('#email');
const passwordField = document.querySelector('#password');

const submitbtn = document.querySelector('.submit');
submitbtn.addEventListener('click', () => {
    localStorage.setItem('user', JSON.stringify({ email: emailField.value, password: passwordField.value }));
    localStorage.setItem('loggined', true);
    console.log(document.querySelector('#email').value);

    if (document.querySelector('#email').value === 'user@gmail.com') {
        localStorage.setItem('isJudge', false);
    } else {
        localStorage.setItem('isJudge', true);
    }
});