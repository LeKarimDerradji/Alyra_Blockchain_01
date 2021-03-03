const chalk = require('chalk')

 isOdd = (number) => {
    number % 2 !== ? true : false
}

for (let i = 0; i < 100; i++) {
    console.log(`${i} ${isOdd(i) ? chalk.yellowBright('est impair') : chalk.redBright('est pair')}`)
}

