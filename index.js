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


let eventsLinks = document.querySelectorAll('.event-link')
for (let index = 0; index < eventsLinks.length; index++) {
    eventsLinks[index].addEventListener('click', () => {
        window.location.replace("./event.html");
    });
};

document.querySelector('#user-icon').addEventListener('click', () => {
    if (localStorage.getItem('isJudge')) {
        window.location.replace("./judge-account.html");
    } else {
        window.location.replace("./user-account.html");
    }
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
});