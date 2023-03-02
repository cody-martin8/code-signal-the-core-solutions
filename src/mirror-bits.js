// Create a function that returns the binary reverse of a given integer

function mirrorBits(a) {
  return parseInt(a.toString(2).split('').reverse().join(''), 2);
}

// Example

mirrorBits(97);
// Expected return: 67
