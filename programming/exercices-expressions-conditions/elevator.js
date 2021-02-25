let currentFloor = 0
let targetFloor = 6

if (currentFloor !== targetFloor && currentFloor > 0) {
    console.log('Veuillez selectionner un étage...')
    switch (targetFloor) {
        case 1 :
            console.log(`Vous êtes à l'étage numero ${currentFloor} et vous allez au première étage`)
            break;
        case 2 :
        case 3 :
        case 4 :
        case 5 :
        case 6 :
        case 7 :
            console.log(`Vous êtes à l'étage numero ${currentFloor} et vous allez à l'étage numéro ${targetFloor}`)
            break;
        case -1:
            console.log(`Vous êtes à l'étage numero ${currentFloor} et vous descendez au sous-sol de premier niveau`)
            break;
        case -2:
            console.log(`Vous êtes à l'étage numero ${currentFloor} et vous descendez au sous-sol de deuxième niveau`)
            break;
    } 
}       else if (currentFloor !== targetFloor && currentFloor === 0) {
        switch (targetFloor) {
            case 1 :
                console.log(`Vous êtes au rez de chaussez et vous allez au première étage`)
                break;
            case 2 :
            case 3 :
            case 4 :
            case 5 :
            case 6 :
            case 7 :
                console.log(`Vous êtes au rez de chaussez et vous allez à l'étage numéro ${targetFloor}`)
                break;
            case -1:
                console.log(`Vous êtes au rez de chaussez et vous descendez au sous-sol de premier niveau`)
                break;
            case -2:
                console.log(`Vous êtes au rez de chaussez et vous descendez au sous-sol de deuxième niveau`)
                break;
    }
}   else if (currentFloor !== targetFloor && targetFloor === 0) {
    switch (currentFloor) {
        case 1 :
            console.log(`Vous êtes au première étage et vous allez au rez de chaussez`)
            break;
        case 2 :
        case 3 :
        case 4 :
        case 5 :
        case 6 :
        case 7 :
            console.log(`Vous êtes à l'étage numéro ${currentFloor} et vous allez au rez de chaussez`)
            break;
        case -1:
            console.log(`Vous êtes à l'étage numéro ${currentFloor}  et vous descendez au sous-sol de premier niveau`)
            break;
        case -2:
            console.log(`Vous êtes à l'étage numéro ${currentFloor} et vous descendez au sous-sol de deuxième niveau`)
            break;
}

}