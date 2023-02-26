// Create a function that checks whether a (+, -, *, or /) b = c

function arithmeticExpression(a, b, c) {
  return a + b === c || a - b === c || a * b === c || a / b === c;
}

// Example

arithmeticExpression(2, 3, 5);
// Expected return: true
