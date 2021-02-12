let star = '*'
let space = [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
let victory = ''
for (let i = 0; i < 16; i++){
   console.log(victory + space.join(' ') + victory)
   victory += star
   space.pop()
}
