window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.sidebar__menu'),
    menuItem = document.querySelectorAll('.sidebar__menu-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('sidebar__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('sidebar__menu_active');
        })
    })


})