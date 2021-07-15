let money = prompt("Ваш бюджет на месяц?", "")
let date = prompt("Введите дату в формате YYYY-MM-DD", "")
let rashod1 = prompt("Введите обязательную статью расходов в этом месяце", "")
let rashod2 = prompt("Во сколько обойдется?", "")
let mounth = money / 30
let appData = {
   money: money,
   timeData: date,
   expenses: {rashod1,rashod2 },
   optionalExpenses: 0,
   income: [0, 1, 2, 3],
   saving: false
}
let mounth = money / 30
