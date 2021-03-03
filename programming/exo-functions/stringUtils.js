let stringUtils = (str) => {
    return str.split("").reverse().join("");
}

console.log(stringUtils('Des chutes de neige sur la planète Alyra_91929    o o ooooo o espace sss'))

let isPallindrome = (str) => {
    return str === stringUtils(str) ? true : false
}

strPal = 'AbbA'

console.log(`${strPal} ${isPallindrome(strPal) ? 'est un pallindrome' : 'n\'est pas un pallindrome'}`)