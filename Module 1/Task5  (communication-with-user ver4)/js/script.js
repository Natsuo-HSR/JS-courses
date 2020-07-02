'use strict';

let money, time;
const appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
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
    },
    detectBudget: function() {
        money = +prompt("Ваш бюджет на месяц?", "");
        time = prompt("Введите дату в формате YYYY-MM-DD", "");
        while (isNaN(money) || money == '' || money == null) {
            money = +prompt("Ваш бюджет на месяц?", "");
        }
    },
    detectDayBudget: function() {
        appData.MoneyPerDay = (money / 30).toFixed();
        alert("Бюджет на 1 день составляет: " + appData.MoneyPerDay);
    },
    detectLevel: function() {
        if (appData.MoneyPerDay < 500) {
            alert("Минимальный уровень достатка");
        } else if (appData.MoneyPerDay < 3000) {
            alert("Средний уровень достатка");
        } else {
            alert("Высокий уровень достатка");
            alert("Высокий уровень достатка");
            alert("Высокий уровень достатка");
        }
    },
    checkSavings: function() {
        if (appData.savings) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с депозита: " + appData.monthIncome); 
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let answ = prompt("Статья необязательных расходов?", "");
            if (typeof(answ) === 'string' && answ != '') {
                appData.optionalExpenses[i++] = answ;
            }
        }
    },
    chooseIncome: function() {
        let items = prompt("Статьи доховод (через ','", "");
        if(items) {
            items.split(", ").forEach(elem => {
                if (typeof(elem) === 'string') {
                    this.income.push(elem);
                }
            });
        }
        let extra = prompt("Есть еше статья доходов?", "");
        if(extra) {
            extra.split(", ").forEach(elem => {
                if (typeof(elem) === 'string') {
                    this.income.push(elem);
                }
            });
        }
        this.income.sort();

        console.log("Способы доп. заработка: ");
        this.income.forEach(function(elem, i) {
            console.log(i + 1 + ": " + elem);
        });
    }
};


// appData.detectBudget();
// appData.chooseExpenses();
// appData.detectDayBudget();
// appData.detectLevel();
// appData.checkSavings();
// appData.chooseOptExpenses();
//appData.chooseIncome();
console.log("Наша программа включает в себя данные: ");
for (let i in appData) {
    console.log(i + " - " + appData[i]);
}
//console.dir(appData);