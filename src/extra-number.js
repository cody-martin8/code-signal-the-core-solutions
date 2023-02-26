// Create a function that figures out which of three given integers is not the
// same as the other two

function extraNumber(a, b, c) {
  const arr = [a, b, c].sort();
  return arr[0] === arr[1] ? arr[2] : arr[0];
}

// Example

extraNumber(1, 2, 2);
// Expected return: 1
