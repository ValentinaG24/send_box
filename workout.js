// //объект
// let employee = {
//     name: "KisaMyrisa",
//     salary: 1000
// }
//
//
// //замыкание
// function calcMoney(employee) {
//     return function (precent) {
//         console.log(employee.name + " увеличит свой доход на " + precent + "% и ее " + "Итоговый доход стоставит:" + (employee.salary + (employee.salary/100*precent)))
//     }
// }
// const calc = calcMoney(employee)
// calc(25)
//
// //немедленно вызываемая фун-ция
// (function (num) {
//     if (num >= 5) {
//         num++
//     }
//     else {
//         num--
//     }
//     return num
// }(5))
//
//паттерн модуль
let bus = (function () {
    let passengers = 0
    const min = 0
    const max = 30
    return{
        howMany: function () {
            return passengers
        },
        addPassengers: function () {
            if (passengers > min) {
               passengers++
                if (passengers===min){
                    return "Автобус пуст"
                }
                if (passengers===max) {
                    return "Автобус заполнен"
                }
            }

        },
        deletePassengers: function () {
            if (passengers <= max) {
                passengers--
            }
        }
    }

})()
console.log(bus.howMany())
console.log(bus.addPassengers())
console.log(bus.howMany())
console.log(bus.addPassengers())
console.log(bus.howMany())
console.log(bus.deletePassengers())
console.log(bus.howMany())
