'use strict';

let money, time;

money = +prompt("Ваш бюджет на месяц?", "");

time = prompt("Введите дату в формате YYYY-MM-DD", "");

let answ1, answ2;

answ1 = prompt("Введите обязательную статью расходов в этом месяце", "");
answ2 = prompt("Во сколько обойдется?", "");

const expenses = {
    [answ1]: answ2,
};


const appData = {
    money: money,
    timeData: time,
    expenses: expenses,
    optionalExpenses: null,
    income: null,
    savings: null,
};

console.dir(appData);

alert("Бюджет на 1 день: " + money / 30);