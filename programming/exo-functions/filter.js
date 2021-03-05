isEven = (number) => {
    return number % 2 === 0 ? true : false
}




const filter = (func, array) => {
    const filteredTab = []
    for (const elem of array) {
        if (func(elem)) {
            filteredTab.push(elem)
        } 
    }
    return filteredTab
}


numbers = [12, 1, 43, 3, 8, 9, 22, 6, 19, 88, 76]


//let newTab = numbers.filter(isEven)
//console.log(newTab)
console.log(filter(isEven, numbers))