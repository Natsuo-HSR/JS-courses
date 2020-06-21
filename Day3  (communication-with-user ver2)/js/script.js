'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

const appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

// for(let i = 0; i < 2; i++) {
//     let answ1 = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let answ2 = prompt("Во сколько обойдется?", "");
//     if (typeof(answ1) === 'string' && typeof(answ2) === 'string' &&
//     answ1 != '' && answ2 != '') {
//         appData.expenses[answ1] = answ2;
//     }
// }

// let i = 0;
// do {
//     let answ1 = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let answ2 = prompt("Во сколько обойдется?", "");
//     if (typeof(answ1) === 'string' && typeof(answ2) === 'string' &&
//     answ1 != '' && answ2 != '') {
//         appData.expenses[answ1] = answ2;
//     }
//     i++;
// } while (i < 2);


let i = 0;
while (i < 2) {
    let answ1 = prompt("Введите обязательную статью расходов в этом месяце", "");
    let answ2 = prompt("Во сколько обойдется?", "");
    if (typeof(answ1) === 'string' && typeof(answ2) === 'string' &&
    answ1 != '' && answ2 != '') {
        appData.expenses[answ1] = answ2;
    }
    i++;
}

console.dir(appData);

appData.MoneyPerDay = money / 30;

alert("Бюджет на 1 день составляет: " + appData.MoneyPerDay);

if (appData.MoneyPerDay < 500) {
    console.log("Минимальный уровень достатка");
} else if (appData.MoneyPerDay < 3000) {
    console.log("Средний уровень достатка");
} else {
    console.log("Высокий уровень достатка");
}