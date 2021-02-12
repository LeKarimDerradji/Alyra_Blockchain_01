// Declaration variable avec tableau vide.
let pyramid = []

/* Boucle d'itération allant juqu'à 8, a chaque itération, ajouter un "*"
au tableau et afficher le tableau, au bout de huit itération, le tableau aura
8 caractères, vu qu'a chaque iteration, l'on a ajouter 8 '*'.

*/
for (i = 0; i < 8; i++) {
  pyramid.push('*');
  console.log(pyramid);
}
