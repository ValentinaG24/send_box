function isFibonacci(num) {
    let firstNum = 0
    let secondNum = 1
    let result = 0
    while (result <= num) {
        result = firstNum + secondNum
        firstNum = secondNum
        secondNum = result
        if (result === num) {
            return true
        }
    }
    return false
}

for (let i = 100; i >= 0; i--) {
    if (isFibonacci(i)) {
        console.log(i + " это фибоначи")
        continue
    }
    console.log(i + " это не фибоначи")
}

