let str = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

function findBob (str, word) {
  let count = str.search(word)
  if (count) {
    console.log(`The word "${word}" is present`)
  }
}

findBob(str, 'bob')
