let str = 'JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript'

function checkWord (searchWord, string) {
  if (string.search(searchWord) > 0) {
    console.log(`The string contain the word ${searchWord}`)
  } else {
    console.log(`The string do not contain the word ${searchWord}`)
  }
}

checkWord('Javascript', str)
checkWord('LISP', str)
