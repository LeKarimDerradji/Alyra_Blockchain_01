const chalk = require('chalk')

isOdd = (num) => {
    return num % 2 !== 0 ? true : false
 }

isEven = (number) => {
    return isOdd(number) === true ? false : true
}

 

    for (let i = 0; i < 100; i++) {
        console.log(`${i} ${isEven(i) ? chalk.yellowBright('est pair') : chalk.redBright('est impair')}`)
    }
