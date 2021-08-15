class Emploe {
    constructor(name, oldSalary, newSalary) {
        this.name = name
        this.oldSalary = oldSalary
        this.newSalary = newSalary
    }

    getName() {
        return this.name
    }
}

class EmploeCalculation {
    /**
     *
     * @param emploe Emploe
     * @param oldMountDays int
     * @param newMountDays int
     * @return money int, h int, m int
     */
    static MoneyUp(emploe, oldMountDays, newMountDays) {
        const minWork = 480 // 8h * 60m
        let oldMoneyInDay = emploe.oldSalary / oldMountDays
        let newMoneyInMin = emploe.newSalary / newMountDays / minWork
        let result = {
            money: 0,
            h: 0,
            m: 0
        }
        do {
            result.m++
            if (result.m === 60) {
                result.h++
                result.m = 0
            }
            result.money += newMoneyInMin
        } while (result.money <= oldMoneyInDay)

        return result
    }
}

let employee = [
    new Emploe("Трололо Барбоска", 21000, 26000),
    new Emploe("Рушка Шрюшка", 8000, 10000),
]


let oldM = 22
let newM = 20;
for (let i = 0; i < employee.length; i++) {
    let result = EmploeCalculation.MoneyUp(employee[i], oldM, newM)
    console.log("money " + Math.floor(result.money) + "; h  " + result.h + "; m " + result.m + "; name " + employee[i].getName())
}