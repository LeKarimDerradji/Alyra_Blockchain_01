let list = ['Alice', 'Bob', 'Charlie', 'Craig', 'Eva']
for (let j = 0; j < list.length; j++) {
  switch (list[j]) {
    case 'Alice':
      console.log('Alice want to exchange with Bob')
      break;
    case 'Bob':
      console.log('Bob want to exchange with Alice')
      break;
    case 'Charlie':
      console.log('Charlie is a generic third participant')
      break;
    case 'Craig':
      console.log('Craig is a password cracker')
      break;
    case 'Eva':
      console.log('Eva is an eavesdropper')
      break;
  }
}