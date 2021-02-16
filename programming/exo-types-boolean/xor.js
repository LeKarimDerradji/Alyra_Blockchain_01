let a = Math.random() < 0.5
let b = Math.random() < 0.5

function xor(a, b) {
  if ((a && !b) || (!a && b)) {
    return true
  } else {
    return false
  }
}

console.log(a, b)
