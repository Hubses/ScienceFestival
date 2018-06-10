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
})

let login = document.querySelector('#login');

login.addEventListener('click', () => {
    window.location.replace("./login.html");
});

document.querySelector('#edit-icon').addEventListener('click', () => {
    window.location.replace("./edit-work.html");
});

swap();
function swap() {
    const isLoggined = localStorage.getItem('loggined') || false;
    if (isLoggined) {
        document.querySelector('#login').hidden = true;
        document.querySelector('#logout').hidden = false;
        document.querySelector('#setting').hidden = false;
        document.querySelector('.user_icon').hidden = false;
    } else {
        document.querySelector('#login').hidden = false;
        document.querySelector('#logout').hidden = true;
        document.querySelector('#setting').hidden = true;
        document.querySelector('.user_icon').hidden = true;
    }
}

document.querySelector('#logout').addEventListener('click', () => {
    localStorage.clear();
    swap();
    window.location.replace("./index.html");
});