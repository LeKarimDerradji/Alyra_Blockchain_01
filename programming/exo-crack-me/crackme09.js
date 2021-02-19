let password = 'JustASimplePassword'

const crackme9 = (password) => {
  if (password.startsWith('Just') && password.endsWith('Password')) {
    let tmp1 = password.slice(4).slice(0, -8) // Enleve le Just et enleve le Password
    tmp1 = tmp1.split('').reverse().join('') // Inverse la chaine de caractère
    if (Number.isNaN(Number(tmp1))) {
      tmp1 += String.fromCharCode(35) // Rajoutes un diese.
      if (tmp1 === 'e' + 'l' + 'p' + 'm' + 'iSA#') {  //Si la chaîne est égal à 'elpmiSA#' LET
        console.log('OK')
      } else {
        console.log('BAD')
      }
    } else {
      console.log('BAD')
    }
  } else {
    console.log('BAD')
  }
}
crackme9(password)
