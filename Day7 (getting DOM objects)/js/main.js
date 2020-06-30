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
let savingsCheck = document.querySelector('.savings');
let savingSum = document.querySelector('.choose-sum');
let savingPercent = document.querySelector('.choose-percent');

// begin calculations btn
let beginCalc = documnet.querySelector('.start');


