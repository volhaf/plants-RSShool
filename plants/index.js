'use strict'


console.log (`Plants#1
Требования к вёрстке:
1.Вёрстка валидная +10;
2.Вёрстка семантическая +20;
3.Вёрстка соответствует макету +48;
4.Требования к css + 12;
5.Интерактивность, реализуемая через css +20;
Oценка за задание 100 / 100
Plants#2
Требования к вёрстке:
1.Вёрстка соответствует макету. Ширина экрана 768px +24;
2.Вёрстка соответствует макету. Ширина экрана 380px +24;
3.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15;
4.На ширине экрана 380рх и меньше реализовано адаптивное меню +22;
Oценка за задание 75 / 75
Plants#3
Требования к функционалу:
1.При нажатии на кнопки: Gardens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50;
2.Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50;
3.В разделе contacts реализован select с выбором городов +25;
Oценка за задание 100 / 100`);


//burger-menu
document.addEventListener('DOMContentLoaded', () => {
    const hiddenClass = 'navigation-hidden';
    const burgerBtn = document.getElementById('burgerBtn');
    const burgerCloseBtn = document.getElementById('navBurgerClose');
    const navMenu = document.getElementById('navigationMenu');
    burgerBtn.addEventListener('click', () => {
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

    const activeServiceBtnClass = 'button-active';
    const blurServiceClass = 'blur';
    const serviceItems = document.querySelectorAll('div.blok-servis-photo div.item-servis');
    const gardenBtns = document.querySelectorAll('div.btn-servis button.button-item');
    let selectedServices = new Set();
    const updateServiceView = () => {
        serviceItems.forEach(item => 
            selectedServices.has(item.dataset.service) || selectedServices.size == 0
                ? item.classList.remove(blurServiceClass)
                : item.classList.add(blurServiceClass));

        gardenBtns.forEach(btn =>
            selectedServices.has(btn.dataset.service)
                ? btn.classList.add(activeServiceBtnClass)
                : btn.classList.remove(activeServiceBtnClass));
    };
    for (let btn of gardenBtns) {
        btn.addEventListener('click', e => {
            const buttonService = e.target.dataset.service;
            selectedServices.has(buttonService) 
                ? selectedServices.delete(buttonService) 
                : selectedServices.add(buttonService);
            selectedServices.size == gardenBtns.length && selectedServices.clear();
            updateServiceView();
        });
    }

    const addresses = new Map([
        ['canandaigua', {city: 'Canandaigua, NY', phone: '+1 585 393 0001', office: '151 Charlotte Street'}],
        ['newyork', {city: 'New York City', phone: '+1 212 456 0002', office: '9 East 91st Street'}],
        ['yonkers', {city: 'Yonkers, NY', phone: '+1 914 678 0003', office: '511 Warburton Ave'}],
        ['sherrill', {city: 'Sherrill, NY', phone: '+1 315 908 0004', office: '14 WEST Noyes BLVD'}],
    ]);

    const addressSelect = document.getElementById('addressSelect');
    addressSelect.addEventListener('change', event => {
        const value = event.target.value;
        if (addresses.has(value)) {
            const address = addresses.get(value);
            document.getElementById('addressCity').textContent = address.city;
            document.getElementById('addressPhone').textContent = address.phone;
            document.getElementById('addressOffice').textContent = address.office;
            document.getElementById('callLink').setAttribute('href', `tel:${address.phone}`);
        }
    });
});
