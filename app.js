/* -----------------------------------------------
Первое задание
*/

let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let a3 = prompt('Введите обязательную статью расходов в это месяце?','');
let a4 = prompt('Во сколько обойдется?','');

let appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savingis: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в это месяце?',''),
        b = prompt('Во сколько обойдется?','');

        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
         && a != '' && b != '' && a.length < 50 ) {
            console.log('done');
            appData.expenses[a] = b;
        } else {

        }



};

        appData.moneyPerDay = appData.money / 30;

        alert("Твои пожитки на день " + appData.moneyPerDay);

        if(appData.moneyPerDay < 100) {
            console.log('Вы бимж');
        } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Можно и покушать');
        }else if ( appData.moneyPerDay > 2000) {
            console.log('Мажор ебатб');
        } else {
            console.log('Шо то поломато');
        }


