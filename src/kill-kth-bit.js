// Create a function that finds the kth bit from the right in a given number and
// change it to 0

function killKthBit(n, k) {
  return n & ~(1 << (k - 1));
}

// Example

killKthBit(37, 3);
// Expected return: 33
