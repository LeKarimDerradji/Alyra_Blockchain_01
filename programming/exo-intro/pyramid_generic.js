let letter = 'K'
let espace = [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
let letterVictory = ''

for (let i = 0; i < 15; i++){
   console.log(letterVictory + espace.join(' ') + letterVictory)
   letterVictory += letter
   espace.pop()
}
