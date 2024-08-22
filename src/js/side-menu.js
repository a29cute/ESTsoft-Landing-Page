document.addEventListener('DOMContentLoaded', function() {
    const menuOpenButton = document.querySelector('.menuOpenButton');
    const menuCloseButton = document.querySelector('.menuCloseButton');
    const menu = document.querySelector('.menu');

    menuOpenButton.addEventListener('click', function() {
        menu.classList.add('open');
    });

    menuCloseButton.addEventListener('click', function() {
        menu.classList.remove('open');
    });

});