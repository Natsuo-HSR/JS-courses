'use strict';

// Разбираемся с меню
let menu = document.querySelector('.menu');
let menuItems = document.querySelectorAll('.menu-item');
menu.removeChild(menuItems[1]);
menu.insertBefore(menuItems[1], menuItems[3]);
let fiveItem = document.createElement('li');
fiveItem.classList.add('menu-item');
fiveItem.innerHTML = "Пятый пункт";
menu.appendChild(fiveItem);

// Меняем фон
let body = document.querySelector("body");
body.style.background = "url('../img/apple_true.jpg') center no-repeat";


// Меняем заголовок
document.querySelector('.title').textContent = 'Мы продаем только подлинную технику Apple';


// Удаляем рекламу
let adv = document.querySelector('.adv');
let column = document.querySelectorAll('.column');
column[1].removeChild(adv);

// Добавляем результаты опроса
let res = prompt("Как вы относитесь к технике Apple?", "");
if (res && res != '') {
    document.querySelector('#prompt').textContent = res;
} 