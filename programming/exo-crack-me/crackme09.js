let password = 'JustASimplePassword'

const crackme9 = (password) => {
  if (password.startsWith('Just') && password.endsWith('Password')) {
    let tmp1 = password.slice(4).slice(0, -8)
    console.log(tmp1)
    tmp1 = tmp1.split('').reverse().join('')
    console.log(tmp1)
    if (Number.isNaN(Number(tmp1))) {
      tmp1 += String.fromCharCode(35)
      console.log(tmp1)
      if (tmp1 === 'e' + 'l' + 'p' + 'm' + 'iSA#') {
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
