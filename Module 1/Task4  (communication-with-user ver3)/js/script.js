'use strict';



let money, time;
const appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};

function detectBudget() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

function chooseExpenses() {
    for(let i = 0; i < 2; i++) {
        let answ1 = prompt("Введите обязательную статью расходов в этом месяце",
         "");
        let answ2 = prompt("Во сколько обойдется?", "");
        if (typeof(answ1) === 'string' && typeof(answ2) === 'string' &&
        answ1 != '' && answ2 != '') {
            appData.expenses[answ1] = answ2;
        } else {
            i--;
        }
    }
}

function detectDayBudget() {
    appData.MoneyPerDay = (money / 30).toFixed();
    alert("Бюджет на 1 день составляет: " + appData.MoneyPerDay);
}

function detectLevel() {
    if (appData.MoneyPerDay < 500) {
        alert("Минимальный уровень достатка");
    } else if (appData.MoneyPerDay < 3000) {
        alert("Средний уровень достатка");
    } else {
        alert("Высокий уровень достатка");
        alert("Высокий уровень достатка");
        alert("Высокий уровень достатка");
    }
}

function checkSavings() {
    if (appData.savings) {
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = +prompt("Под какой процент?", "");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с депозита: " + appData.monthIncome); 
    }
}

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let answ = prompt("Статья необязательных расходов?", "");
        if (typeof(answ) === 'string' && answ != '') {
            appData.optionalExpenses[i++] = answ;
        }
    }
}



detectBudget();
chooseExpenses();
detectDayBudget();
detectLevel();
checkSavings();
chooseOptExpenses();
console.dir(appData);