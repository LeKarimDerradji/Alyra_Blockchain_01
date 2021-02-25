const chalk = require('chalk')

let currentFloor = 0
let targetFloor = 1

console.log(chalk.blue('Bievenue, '));

if (currentFloor !== targetFloor && currentFloor > 0) {
    console.log('Veuillez selectionner un étage...')
    switch (targetFloor) {
        case 1 :
            console.log(chalk`Vous êtes à l'étage numero {blue.bold ${currentFloor}} et vous allez au première étage`)
            break;
        case 2 :
        case 3 :
        case 4 :
        case 5 :
        case 6 :
        case 7 :
            console.log(chalk.yellow`Vous êtes à l'étage numero {blue.bold ${currentFloor}} et vous allez à l'étage numéro {green.bold ${targetFloor}}`)
            break;
        case -1:
            console.log(chalk.yellow`Vous êtes à l'étage numero {blue.bold ${currentFloor}} et vous descendez au sous-sol de premier niveau`)
            break;
        case -2:
            console.log(chalk.yellow`Vous êtes à l'étage numero {blue.bold ${currentFloor}} et vous descendez au sous-sol de deuxième niveau`)
            break;
    } 
}       else if (currentFloor !== targetFloor && currentFloor === 0) {
        switch (targetFloor) {
            case 1 :
                console.log(chalk.greenBright`Vous êtes au {cyanBright.bold rez de chaussez} et vous allez au {yellow.bold première étage}`)
                break;
            case 2 :
            case 3 :
            case 4 :
            case 5 :
            case 6 :
            case 7 :
                console.log(`Vous êtes au {cyanBright.bold rez de chaussez} et vous allez à l'étage numéro ${targetFloor}`)
                break;
            case -1:
                console.log(chalk`Vous êtes au {cyanBright.bold rez de chaussez} et vous descendez au sous-sol de premier niveau`)
                break;
            case -2:
                console.log(chalk`Vous êtes au {cyanBright.bold rez de chaussez} et vous descendez au sous-sol de deuxième niveau`)
                break;
    }
}   else if (currentFloor !== targetFloor && targetFloor === 0) {
    switch (currentFloor) {
        case 1 :
            console.log(chalk`Vous êtes au première étage et vous allez au {cyanBright.bold rez de chaussez}`)
            break;
        case 2 :
        case 3 :
        case 4 :
        case 5 :
        case 6 :
        case 7 :
            console.log(chalk`Vous êtes à l'étage numéro ${currentFloor} et vous allez {cyanBright.bold rez de chaussez}`)
            break;
        case -1:
            console.log(chalk`Vous êtes à l'étage numéro ${currentFloor}  et vous descendez au sous-sol de premier niveau`)
            break;
        case -2:
            console.log(chalk`Vous êtes à l'étage numéro ${currentFloor} et vous descendez au sous-sol de deuxième niveau`)
            break;
}

}