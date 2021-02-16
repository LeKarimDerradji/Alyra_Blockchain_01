let str = `Je suis le ténébreux, - le veuf, - l'inconsolé,
Le prince d'Aquitaine à la tour abolie :
Ma seule étoile est morte, - et mon luth constellé
Porte le soleil noir de la Mélancolie.

Dans la nuit du tombeau, toi qui m'as consolé,
Rends-moi le Pausilippe et la mer d'Italie,
La fleur qui plaisait tant à mon cœur désolé,
Et la treille où le pampre à la rose s'allie.

Suis-je Amour ou Phébus ? ... Lusignan ou Biron ?
Mon front est rouge encor du baiser de la reine ;
J'ai rêvé dans la grotte où nage la sirène...

Et j'ai deux fois vainqueur traversé l'Achéron ;
Modulant tour à tour sur la lyre d'Orphée
Les soupirs de la sainte et les cris de la fée.`

let sum = 0
let vowel = ['a', 'e', 'i', 'o', 'u', 'y']
for (var i = 0; i < str.length; i++) {
  for (var j = 0; j < vowel.length; j++) {
    if(str[i].toLowerCase() === vowel[j])
    sum++
  }
}

console.log(`Il y a ${sum} voyelles dans ce poème`)
