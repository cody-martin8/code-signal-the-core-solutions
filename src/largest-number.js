// Create a function that takes an integer "n" and produces the largest number
// with n number of digits

function largestNumber(n) {
  let x = '9';
  while (n > 1) {
    x += '9';
    n--;
  }
  return Number(x);
}

// Example

largestNumber(2);
// Expected return: 99
