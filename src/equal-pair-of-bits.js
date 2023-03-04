// Create a function that compares the binary representation of two integers and
// returns the position of the first matching pair of digits, counting from the
// right, in the 2^n format

function equalPairOfBits(n, m) {
  return (function (int1, int2) {
    const [min, max] = [Math.min(int1, int2), Math.max(int1, int2)];
    const [arr1, arr2] = [min.toString(2).split('').reverse(), max.toString(2).split('').reverse()];
    while (arr1.length !== arr2.length) {
      arr1.push('0');
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        return Math.pow(2, i);
      }
    }
  })(n, m);
}

// Example

equalPairOfBits(10, 11);
// Expected return: 2
