// Problem:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// Solve:
function findShort(s) {
  return Math.min(
    ...s.split(" ").map(function (ele) {
      return ele.length;
    })
  );
}

// Test:
console.log(findShort("Ias amhgf Youssef Mahmoud"));
