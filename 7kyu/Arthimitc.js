// Problem:
// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// examples:(Input1, Input2, Input3 --> Output)
// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

// Solve:

function arithmetic(a, b, operator) {
  if (operator === "add") {
    return a + b;
  }
  if (operator === "subtract") {
    return a - b;
  }
  if (operator === "multiply") {
    return a * b;
  }
  if (operator === "divide") {
    return a / b;
  }
}

// Test:

console.log(arithmetic(5, 2, "add"));