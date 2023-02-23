// Create a function that takes a two-digit number and adds the digits together

function addTwoDigits(n) {
  return n.toString().split('').reduce((count, n) => count + Number(n), 0);
}

// Example

addTwoDigits(29);
// Expected return: 11
