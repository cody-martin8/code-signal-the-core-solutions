// Create a function that puts together all the integers between two given
// numbers (inclusive), and counts the number of 1's in their binary represention

function rangeBitCount(a, b) {
  const arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i.toString(2));
  }
  const count = arr.join('').split('').filter(num => num === '1');
  return count.length;
}

// Example

rangeBitCount(2, 7);
// Expected return: 11
