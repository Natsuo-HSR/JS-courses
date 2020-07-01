'use strict';

// button
let calculateButton = document.querySelector('#start');

// values
let budget = document.querySelector('.budget-value');
let daybudget = document.querySelector('.daybudget-value');
let level = document.querySelector('.level-value');
let expenses = document.querySelector('.expenses-value');
let optionalexpenses = document.querySelector('.optionalexpenses-value');
let income = document.querySelector('.income-value');
let monthsavings = document.querySelector('.monthsavings-value');
let yearsavings = document.querySelector('.yearsavings-value');

// results
let year = document.querySelector('.year-value');
let month = document.querySelector('.month-value');
let day = document.querySelector('.day-value');

// expenses input fields ([n%2==0]-name; [n%2!=0]-cost)
let budgetInputs = document.querySelectorAll('.expenses-item');
let budgetBtn = document.querySelector('.expenses-item-btn');

// oprional expenses inputs fields ([n] - name)
let budgetOptInputs = document.querySelectorAll('.optionalexpenses-item');
let budgetOptBtn = document.querySelector('.optionalexpenses-btn');

let dailyBudgetBtn = document.querySelector('.count-budget-btn');


// possible income filed (names in ,)
let chooseIncome = document.querySelector(".choose-income");

// addiction income box
let savingsCheck = document.querySelector('#savings');
let savingSum = document.querySelector('.choose-sum');
let savingPercent = document.querySelector('.choose-percent');

// begin calculations btn
let beginCalc = document.querySelector('.start');


let money, time;
const appData = {
    money,
    time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};


beginCalc.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.money = money;
    appData.time = time;
    budget.textContent = money;
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
});

budgetBtn.addEventListener('click', function() {
    let sum = 0;
     
    for(let i = 0; i < budgetInputs.length; i++) {
        let name = budgetInputs[i].value;
        let cost = budgetInputs[++i].value;

        if (typeof(name) === 'string' && typeof(cost) === 'string' &&
        name != '' && cost != '') {
            appData.expenses[name] = cost;
            sum += +cost;
        } else {
            i -= 2;
        }
    }

    expenses.textContent = sum;
});

budgetOptBtn.addEventListener('click', function() {
    for (let i = 0; i < budgetOptInputs.length; i++) {
        let answ = budgetOptInputs[i].value;
        if (typeof(answ) === 'string' && answ != '') {
            appData.optionalExpenses[i] = answ;
            optionalexpenses.textContent += answ;
            if (i + 1 < budgetOptInputs.length) {
                optionalexpenses.textContent += ' ';
            }
        }
    }
});

dailyBudgetBtn.addEventListener('click', function() {
    if (appData.money) {
        appData.moneyPerDay = (money / 30).toFixed();
        daybudget.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 500) {
            level.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay < 3000) {
            level.textContent = "Средний уровень достатка";
        } else {
            level.textContent = "Высокий уровень достатка";
        }
    } else {
        daybudget.textContent = 'Ошибка: Бюджет не введен';
    }
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    income.textContent = items;
    appData.income.length = 0;
    items.split(", ").forEach(elem => {
        if (typeof(elem) === 'string') {
            appData.income.push(elem);
        }
    });
});

savingsCheck.addEventListener('click', function() {
    appData.savings = !appData.savings;
});

savingSum.addEventListener('input', function() {
    if (appData.savings) {
        let sum = +savingSum.value,
            percent = +savingPercent.value;
        if (sum && percent) {
            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;
            monthsavings.textContent = appData.monthIncome.toFixed(1);
            yearsavings.textContent = appData.yearIncome.toFixed(1);
        }
    }
});

savingPercent.addEventListener('input', function() {
    if (appData.savings) {
        let sum = +savingSum.value,
        percent = +savingPercent.value;
        if (sum && percent) {
            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;
            monthsavings.textContent = appData.monthIncome.toFixed(1);
            yearsavings.textContent = appData.yearIncome.toFixed(1);
        }
    }
});
