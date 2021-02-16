hexadecimalNumbers = [0x123, 0123, 0b10011001, 0xdeadbeef, 0xea7beef, 0b1111111111111111, 0777]

hexadecimalNumbers.forEach((numbers, i) => {
  console.log(parseInt(numbers, 10))
});
