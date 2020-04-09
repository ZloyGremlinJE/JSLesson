let money, time;



function start() {
    money = +prompt("Ваш бюджет ?", '');
    
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет ?", '');
    }

    time = prompt("Введите дату в формате YYYY-MM-DD: ", "2020-01-01");
}

function chooseExpenses() {

    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = +prompt("Во сколько обойдется?", '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }

}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true
};

chooseExpenses();



appData.moneyPerDay = (appData.budget / 30).toFixed();



alert("Ежедневный бюджет: " + appData.moneyPerDay);
if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Вы поймали глюк!");
}

function checkSavings(){
    if (appData.saving){
     let  money = +prompt("Ваши накопления ?", ''),
          percent = +prompt("Процент ?", '');

        appData.monthIncome = save/100/12*percent;
        alert("Доход с депозита : " + appData.monthIncome);
    }

    checkSavings();
}