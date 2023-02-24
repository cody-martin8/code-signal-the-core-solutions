// Create a function that finds the largest multiple of a given divisor that is still
// less than the given bound

function maxMultiple(divisor, bound) {
  return bound - bound % divisor;
}

// Example

maxMultiple(3, 10);
// Expected return: 9
