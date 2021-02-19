const caesar = (text, shift) => {
  return String.fromCharCode(
    ...text.split('').map(char => ((char.charCodeAt() - 65 + shift) % 26) + 65),
  );
};
for (var i = 0; i < 26; i++) {
  console.log(caesar('VGQGMTWDAWNWAFHSJJSDWDMFANWJKW?', 26 + i))
}
