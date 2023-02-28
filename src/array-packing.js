// Create a function that combines an array of integers into one big integer
// that is the combination of each of their binary representations

function arrayPacking(a) {
  const bit = a.map(num => num.toString(2));
  for (let i = 0; i < bit.length; i++) {
    const arr = bit[i].split('').reverse();
    while (arr.length < 8) {
      arr.push('0');
    }
    bit[i] = arr.reverse().join('');
  }
  return parseInt(bit.reverse().join(''), 2);
}

// Example

arrayPacking(24, 85, 0);
// Expected return: 21784
