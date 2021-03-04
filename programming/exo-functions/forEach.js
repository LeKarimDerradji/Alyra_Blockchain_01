
isOdd = (num) => {
    return num % 2 !== 0 ? true : false
 }


let foreach = (func, array) => {
    let booleanTab = []
    for (let i = 0; i < array.length; i++) {
        booleanTab.push(func(array[i])) 
    }
    return booleanTab.toString()
}


numbers = [12, 1, 43, 3, 8, 9, 22, 6, 19, 88, 76]

console.log(foreach(isOdd, numbers))

