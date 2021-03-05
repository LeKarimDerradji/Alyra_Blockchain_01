let add = (n, n1) => {return n + n1}

let sub = (n, n1) => {return n - n1}

let mul = (n, n1) => {return n * n1}

let div = (n, n1) => {return n / n1}


let calc = (n, symbol, n1) => {
    return symbol === '+' ? n + n1 : symbol === '-' ? n - n1 : 
    symbol === '*' ? n * n1 : symbol === '/' ? n / n1 :  'please enter blabla'
}

console.log(calc(40, '+', 2))
console.log(calc(44, '-', 2))
console.log(calc(21, '*', 2))
console.log(calc(84, '/', 2))
console.log(calc(21, 'a', 2))