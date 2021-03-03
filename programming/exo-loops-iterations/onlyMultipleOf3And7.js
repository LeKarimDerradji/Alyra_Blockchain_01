const chalk = require('chalk')


for (let i = 1; i < 1001; i++) {
    if (i % 3 == 0) {
        console.log(chalk.cyanBright(`${i} est un multiple de trois`))
    }
    if (i % 5 == 0) {
        console.log(chalk.yellowBright(`${i} est un multiple de cinq`))
    }
    if (i % 7 == 0) {
        console.log(chalk.magentaBright(`${i} est un multiple de sept`))
    }
}