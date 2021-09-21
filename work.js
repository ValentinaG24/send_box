let employee = {
    name: "A",
    oldSalary: 10000,
    newSalary: 15000
}

let oldMonth = 22
let newMonth = 21

function calculations(oldMonth, newMonth, employee) {
    let salDayOldM = employee.oldSalary / oldMonth
    let oneDayNewSalNewM = employee.newSalary / newMonth / 480 //480 = 8h * 60 m
    let timeAndMoney = {
        h: 0,
        m: 0,
        money: 0
    }
    for (; timeAndMoney.money <= salDayOldM;) {
        if (timeAndMoney.m === 60) {
            timeAndMoney.h++
            timeAndMoney.m = 0
        }
        timeAndMoney.money += oneDayNewSalNewM
        timeAndMoney.m++
    }
    return timeAndMoney

}

let resultCalculations = calculations(oldMonth, newMonth, employee)

let a = 1