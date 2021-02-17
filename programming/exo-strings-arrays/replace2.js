let str = `In cryptography, Alice and Bob are fictional characters commonly used as placeholders in discussions about cryptographic protocols or systems.
As the use of Alice and Bob became more widespread, additional characters were added, sometimes each with a particular meaning.
The most common characters are Alice and Bob. Eve, Mallory, and Trent are also common names.`



function replaceAllOccurences (word1, word2, str) {
  let newString = str.replaceAll(word1,word2)
  console.log(newString)
}

replaceAllOccurences('Alice', 'Karim', str)
