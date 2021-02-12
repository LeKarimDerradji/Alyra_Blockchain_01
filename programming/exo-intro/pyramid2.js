function pyramid(n) {

  for(let i=1; i<= n; i++){
    let str = ' '.repeat((n-i)*2);
    let str2 = '*'.repeat(i -1)
    console.log(str2 + str + str2);
  }
}

pyramid(16);
