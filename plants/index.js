console.log (`Вёрстка валидная +10 
Вёрстка семантическая +20 
Вёрстка соответствует макету +48 
Требования к css +12
Интерактивность, реализуемая через css +20 
Итого 110 баллов`)

document.addEventListener('DOMContentLoaded', () => {
    const hiddenClass = 'navigation-hidden';
    const burgerBtn = document.getElementById('burgerBtn');
    const burgerCloseBtn = document.getElementById('navBurgerClose');
    const navMenu = document.getElementById('navigationMenu');
    burgerBtn.addEventListener('click', e => {
        navMenu.classList.remove(hiddenClass);
    });

    navMenu.addEventListener('click', e => {
        if (e.target.classList.contains('nav-link')) {
            navMenu.classList.add(hiddenClass);
        }
    });

    burgerCloseBtn.addEventListener('click', e => {
        e.stopImmediatePropagation();
        navMenu.classList.add(hiddenClass);
    });
});