let add = (n, n1) => {
    return n + n1
}


let sub = (n, n1) => {
    return n - n1
}

let mul = (n, n1) => {
    return n * n1
}

let div = (n, n1) => {
    return n / n1
}


let calc = (n, symbol, n1) => {
   return symbol === '+' ? n + n1 : ''
   return symbol === '-' ? n - n1 : ''
   return symbol === '*' ? n * n1 : ''
}

console.log(2 - 2)