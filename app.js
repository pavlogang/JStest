/* -----------------------------------------------
Первое задание
*/

let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');


let appData = {
    money: money,
    timeData: time,
    expenses: {

     },
    optionalExpenses: {

    },
    income: [],
    savingis: false
};

for (let i = 0; i < 2; i++) {
    let state = prompt('Введите обязательную статью расходов в это месяце?');
    let price = prompt('Во сколько обойдется?');

    if ( (typeof(state)) === 'string' && (typeof(state)) != null && (typeof(price)) != null
         && state != '' && price != '' && state.length < 50 ) {
            console.log('done');
            appData.expenses[state] = price;
        } else {
            i -= 1;
        }

};


    appData.moneyPerDay = appData.money / 30;

    alert("Твои пожитки на день " + parseInt(appData.moneyPerDay));

    if(appData.moneyPerDay < 100) {
        console.log('Вы бимж');
    } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Можно и покушать');
    }else if ( appData.moneyPerDay > 2000) {
        console.log('Мажор ебатб');
    } else {
        console.log('Шо то поломато');
    }


