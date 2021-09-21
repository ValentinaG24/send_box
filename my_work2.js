class Employee {
    constructor(name, oldSalary, newSalary) {
        this.name = name;
        this.oldSalary = oldSalary;
        this.newSalary = newSalary
    }
}

let workTime = calculationSalary(
    new Employee("Буба", 60000, 90000),
    22,
    21
)

console.log("h = " + workTime.hour + " m = " + workTime.min)

function calculationSalary(employee, newMonth, oldMonth) {
    let workTime = {
        min: 0,
        hour: 0,
        money: 0,
    }
    let salaryDayInOldMonth = employee.oldSalary / oldMonth
    let salaryMinInNewMonth = employee.newSalary / newMonth / 480 // рабочий день 8 часов в минутах
    for (; salaryMinInNewMonth <= salaryDayInOldMonth;) {
        workTime.money
        workTime.min++
        if (workTime.min === 60) {
            workTime.hour++
            workTime.min = 0
        }
    }
    return workTime
}

