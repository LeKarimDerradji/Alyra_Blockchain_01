let password = ''

let charCode = [73, 67, 79, 68, 69, 52, 70, 79, 79, 68]

for (var i = 0; i < 10; i++) {
  password += String.fromCharCode(charCode[i]);
}

console.log(password)


const crackme7 = (password) => {
  if (password.length === 10) {
    if (password[0].charCodeAt() === 73) {
      if (password[1].charCodeAt() === 67) {
        if (password[2].charCodeAt() === 79) {
          if (password[3].charCodeAt() === 68) {
            if (password[4].charCodeAt() === 69) {
              if (password[5].charCodeAt() === 52) {
                if (password[6].charCodeAt() === 70) {
                  if (password[7].charCodeAt() === 79) {
                    if (password[8].charCodeAt() === 79) {
                      if (password[9].charCodeAt() === 68) {
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
                } else {
                  console.log('BAD')
                }
              } else {
                console.log('BAD')
              }
            } else {
              console.log('BAD')
            }
          } else {
            console.log('BAD')
          }
        } else {
          console.log('BAD')
        }
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

crackme7(password)
