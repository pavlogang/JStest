/* -----------------------------------------------
Первое задание
*/
let money, time;


function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '2020-00-00');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

let appData = {
    money: money,
    timeData: time,
    expenses: {

    },
    optionalExpenses: {

    },
    income: [],
    savingis: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let state = prompt('Введите обязательную статью расходов в это месяце?');
            let price = prompt('Во сколько обойдется?');

            if ((typeof (state)) === 'string' && (typeof (state)) != null && (typeof (price)) != null &&
                state != '' && price != '' && state.length < 50) {
                console.log('done');
                appData.expenses[state] = price;
            } else {
                i -= 1;
            }
        }
    },
    detectedDayBudget: () => {
        appData.moneyPerDay = Math.trunc(appData.money / 30);
        alert("Твои пожитки на день " + parseInt(appData.moneyPerDay));
    },
    detecteLevel: () => {
        if (appData.moneyPerDay < 100) {
            console.log('Вы бимж');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Можно и покушать');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Мажор ебатб');
        } else {
            console.log('Шо то поломато');
        }
    },
    checkSavings: () => {
        if (appData.savingis == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            
            appData.income = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита:" + appData.income);
        }
    },
    chooseOptExpenses: () => {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья необязатльных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: () => {
        let items = prompt ('Что принесет дополнительный доход? (Перечислите через запятую), ""')
        appData.income = items.split(', ');
        appData.income.push(prompt('Шо еще?'))ж
        appData.income.sort();
    }
    }