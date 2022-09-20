// Problem:
// Complete the solution so that it reverses the string passed into it.
// like:
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// Solve:

// First Way
function reverse(str) {
  return str.split("").reverse().join("");
}

// Sconed Way
function reverse(str) {
  let r = "";
  for (let i = str.length - 1; i >= 0; i--) {
    r += str[i];
  }
  return r;
}

// Test:

console.log(reverse("Reham"));
