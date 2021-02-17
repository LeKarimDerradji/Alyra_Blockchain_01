let str = 'YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU'
let currentChar
let codedChar
for (var i = 0; i < str.length; i++) {
  currentChar = str[i]
  if (currentChar.match(/[a-z]/i)) {
    let codedChar = str.fromCharCode(+13)
  }
}

console.log(codedChar)
