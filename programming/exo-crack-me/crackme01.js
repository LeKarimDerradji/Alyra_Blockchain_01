let password = 'password1234'

const crackme1 = (password) => {
  if (password === 'password1234') {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme1(password)
