const chalk = require('chalk')


for (let i = 101; i > 0; i -= 2) {
     console.log(chalk.cyan(i))
}

let j = 101

do {

    console.log(chalk.yellow.bold(j))
    j -= 2
} while (j > 0);


let k = 101

while (k > 0) {
    console.log(chalk.magenta
        .bold(k))
    k -= 2
}

