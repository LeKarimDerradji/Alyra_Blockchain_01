let isRainy = Math.random() < 0.4 // Random Boolean
let temperature = Math.floor(Math.random() * 40)// temperature en celcius entre 0 et 40
let clothes = ''
let umbrella = 'et un parapluie'
let winterClothes = 'Un t-shirt, un pull, une veste et un manteau'
let autumnClothes = 'Un t-shirt, un pull, une veste, un manteau'
let springClothes = 'Un t-shirt et un pantalon'
let summerClothes = 'Un t-shirt et un short'
let sentence = 'Je vous recommande de porter/prendre '

if (temperature <= 4 && temperature <= 10 && isRainy) {
  console.log(`${sentence} ${winterClothes} ${umbrella}`)
} else if (temperature < 4 && temperature < 10) {
  console.log(`${sentence} ${winterClothes}`)
} else if (temperature >= 10 && temperature <= 15 && isRainy ) {
  console.log(`${sentence} ${autumnClothes} ${umbrella}`)
} else if (temperature >= 10 && temperature <= 15) {
  console.log(`${sentence} ${autumnClothes}`)
} else if (temperature >= 15 && temperature <= 18) {
  console.log(`${sentence} ${springClothes}`)
} else if (temperature > 18) {
  console.log(`${sentence} ${summerClothes}`)
}
