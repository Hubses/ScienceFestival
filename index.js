let events = document.querySelector('#events');

events.addEventListener('click', () => {
    window.location.replace("./events.html");
})

let newses = document.querySelector('#newses');

newses.addEventListener('click', () => {
    window.location.replace("./newses.html");
})

let title = document.querySelector('#title');

title.addEventListener('click', () => {
    window.location.replace("./index.html");
});

let login = document.querySelector('#login');

login.addEventListener('click', () => {
    window.location.replace("./login.html");
});
swap();
function swap() {
    const isLoggined = localStorage.getItem('loggined') || false;
    if (isLoggined) {
        document.querySelector('#login').type = 'hidden';
        document.querySelector('#logout').type = 'button';
    } else {
        document.querySelector('#login').type = 'button';
        document.querySelector('#logout').type = 'hidden';
    }
}

document.querySelector('#logout').addEventListener('click', () => {
    localStorage.clear();
    swap();
});