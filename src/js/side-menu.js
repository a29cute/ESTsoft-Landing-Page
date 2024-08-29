document.addEventListener('DOMContentLoaded', function() {
    const menuOpenButton = document.querySelector('.menuOpenButton');
    const menuCloseButton = document.querySelector('.menuCloseButton');
    const menu = document.querySelector('aside');


    menuOpenButton.addEventListener('click', function(event) {
        event.stopPropagation();
        menu.classList.add('open');
        document.body.style.overflow = 'hidden';
    });


    menuCloseButton.addEventListener('click', function(event) {
        event.stopPropagation(); // 이벤트 전파 방지
        menu.classList.remove('open');
        document.body.style.overflow = '';
    });

    document.addEventListener('click', function(event) {
        if (menu.classList.contains('open') && !menu.contains(event.target) && !menuOpenButton.contains(event.target)) {
            menu.classList.remove('open');
            document.body.style.overflow = '';
        }
    });

    menu.addEventListener('click', function(event) {
        event.stopPropagation(); // 이벤트 전파 방지
    });
});
