// Problem:
// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:
//* 'abc' =>  ['ab', 'c_']
//* 'abcdef' => ['ab', 'cd', 'ef']

// Solve 1:
function solution(str) {
  let result = [];
  if (str.length % 2 !== 0) {
    str += "_";
  }
  for (let i = 0; i < str.length; i++) {
    result.push(str[i] + str[i + 1]);
    i += 1;
  }
  return result;
}

// Solve2:
function solution(str) {
  return str
    .split("")
    .map(function (e, i) {
      if (i % 2 === 0) {
        return e + (str[i + 1] || "_");
      }
    })
    .filter(function (e) {
      return e;
    });
}

// Test:

console.log(solution("Youssef"));
console.log(solution("Any other string"));

// Output:
// ["Yo", "us", "se", "f_"]
// [("An", "y ", "ot", "he", "r ", "st", "ri", "ng")]
