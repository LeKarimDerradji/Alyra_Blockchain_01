

let biggest = (array) => {
    let biggest = 0
    for (let i = 0; i < array.length; i++) {
        array[i] > biggest ? biggest = array[i] : ''
    }
    return biggest
}

console.log(biggest([1, 2, 101, 3, 4]))


// Array.sort, prends tout les élements d'un array et les trie selon un ordre 
// défini dans les paramètre de la méthode. 

let sortAscend  = (array) => {
    return array = array.sort((a, b) => a - b);
}

console.log(sortAscend([1, 3, 45, 11, 27, 39, 88, 13]))

// Set est un objet qui prends en compte seulement des valeurs uniques.

let makeUnique = (array) => {
    return arrayClean = [...new Set(array)]
}

console.log(makeUnique([1, 2, 3, 2, 3, 2, 3]))

console.log(makeUnique('Abracadabra'))



