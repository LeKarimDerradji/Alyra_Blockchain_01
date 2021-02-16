let bitcoinPrice = Math.floor(Math.random() * (250000 - 1)) + 1

if (bitcoinPrice < 40000 || bitcoinPrice > 250000) {
  console.log('You should sell your bitcoins!')
} else {
  console.log('Keep buying a little amount, and hodl')
}
