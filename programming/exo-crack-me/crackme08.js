let password = 'Abcdefghijklmnopqrs42v'

const crackme8 = (password) => {
  let tmp1 = password.split('').slice(-3, -1).join('')
  console.log(tmp1)
  if (Number(tmp1) === 42) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}
crackme8(password)
