let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

let sanitizedStr = str.trim()
sanitizedStr = sanitizedStr.toUpperCase()
console.log(sanitizedStr)
let sanitizedArray = sanitizedStr.split(' ')
console.log(sanitizedStr)
sanitizedArray.forEach((elem) => console.log(`mot: ${elem}`))
