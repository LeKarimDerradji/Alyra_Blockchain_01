let biggest = (array) => {
    let biggest = 0
    for (let i = 0; i < array.length; i++) {
        array[i] > biggest ? biggest = array[i] : ''
    }
    return biggest
}

console.log(biggest([1, 2, 101, 3, 4]))




let sortAscend  = (array) => {
    return array = array.sort((a, b) => a - b);
}

console.log(sortAscend([1, 3, 45, 11, 27, 39, 88, 13]))


