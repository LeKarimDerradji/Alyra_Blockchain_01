/*
let basis = ''

for (i = 0; i < 8; i++) {
  basis += '*';
  console.log(pyramid);
}

*/

/*
function displayPyramid(row) {
  for (let i = 0; i < row; i++) {
    let str = '';
    for (let j = 1; j < row-i; j++) {
      str = str + ' ';
    }
    for (let k = 1; k <= (2*i+1); k++) {
      str = str + '*';
    }
    console.log(str);
  }
}

displayPyramid(8);

*/

function pyramid(n) {

  for(let i=1; i<= n; i++){
    let str = ' '.repeat(n-i);
    let str2 = '*'.repeat(i*2 -1)

    console.log(str + str2 + str);
  }
}

pyramid(8);
