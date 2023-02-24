// Create a function that finds the radially opposite number from a given number
// in a circle of size n

function circleOfNumbers(n, firstNumber) {
  return firstNumber < n / 2 ? firstNumber + n / 2 : firstNumber - n / 2;
}

// Example

circleOfNumbers(10, 2);
// Expected return: 7
