let isRainy = true
let isWindy = false
let temperature = Math.floor(Math.random() * 40) // Génère une température entre 0 et 40
console.log(temperature)

if ((isRainy || isWindy) && temperature < 15) {
  console.log('Mettez votre manteau')
} else {
  console.log('Nous n\'avez pas besoin de manteau today')
}
