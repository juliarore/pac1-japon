document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger');
    const navMenu = document.getElementById('nav-menu');

    // Burger menu
    if (burger && navMenu) {
        burger.addEventListener('click', () => {
            const expanded = burger.getAttribute('aria-expanded') === 'true';
            burger.setAttribute('aria-expanded', !expanded);
            navMenu.classList.toggle('active');
            burger.classList.toggle('active');
        });
    }

    // Accordion submenu on mobile
    const dropdownIcons = document.querySelectorAll('[data-dropdown="toggle"]');

    dropdownIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const submenu = icon.closest('.header__item').querySelector('.header__submenu');
            submenu.classList.toggle('header__submenu--open');
            icon.style.transform = submenu.classList.contains('header__submenu--open')
                ? 'rotate(180deg)'
                : 'rotate(0deg)';
        });
    });

    const dropdownBtn = document.querySelector('.header__dropdown-btn');
    
    if (dropdownBtn) {
        dropdownBtn.addEventListener('click', (e) => {
            // Prevent default link behavior on mobile/tablet (≤768px)
            if (window.innerWidth <= 768) {
                e.preventDefault();
                
                const submenu = dropdownBtn.closest('.header__item').querySelector('.header__submenu');
                const icon = dropdownBtn.closest('.header__item').querySelector('[data-dropdown="toggle"]');
                
                submenu.classList.toggle('header__submenu--open');
                icon.style.transform = submenu.classList.contains('header__submenu--open')
                    ? 'rotate(180deg)'
                    : 'rotate(0deg)';
            }
        });
    }
});