
const pyramid = (nbBase, reverse, str) => {
    if (!reverse) {
      for (let i = 1; i <= nbBase; ++i) {
        console.log(str.repeat(i))
      }
    } else {
      for (let i = nbBase; i >= 1; --i) {
        console.log(str.repeat(i))
      }
    }
  }
  
  pyramid(5, true, '*')
  
  pyramid(10, false, '*')
  
  const nbBase = 15
  
pyramid(nbBase, true, '*')