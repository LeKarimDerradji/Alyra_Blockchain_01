let res1 = (true && false) || (false && true)
let res2 = 10 > 11 && 11 > 10
let res3 = (true || false) && true
let res4 = (!true && !false) || (!false && !false)
let res5 = 'Hello' === 'Hello' && 'World' == 'Word'
let res6 = (!(20 >= 20) && 7 === 7) || true
let res7 = '1' === 1 && '2' == 2 && '3' === 3
let res8 = !res7
let res9 = !res8
let res10 =
  (res1 && res2) || (res3 && res4) || (res5 && res6) || (res7 && res8 && res9)

let arrayOfBoolean = [res1, res2, res3, res4, res5, res6, res7, res8, res9, res10];

for (let i = 0; i < 10; i++) {
  if (arrayOfBoolean[i] === true) {
    console.log(`res${i + 1} is true`)
  } else {
    console.log(`res${i + 1} is false`)
  }
}
