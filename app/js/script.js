const btnhamburger = document.querySelector('.header__toggle')
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');


    btnhamburger.addEventListener('click', function () {
        console.log("open hamburger");

        if (header.classList.contains('open')) {
            body.classList.remove('noscroll');
            header.classList.remove('open');
            overlay.classList.remove('overlay-fade-in');
            overlay.classList.add('overlay-fade-out');
            
        }
        else {
            body.classList.add('noscroll');
            header.classList.add('open');
            overlay.classList.remove('overlay-fade-out');
            overlay.classList.add('overlay-fade-in');
        }
    })