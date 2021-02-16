let str = `C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar.`

for (let i = 0; i < str.length; i++) {
  if (str[i] !== ' ') {
    console.log(`${str[i]} is at index ${i}`)
  }
};
