// Create a function that converts a given integer to binary form, switches each
// pair of bit numbers, and returns the parsed integer from the new order

function swapAdjacentBits(n) {
  return (function (input) {
    const arr = input.toString(2).split('');
    if (arr.length % 2 !== 0) {
      arr.unshift('0');
    }
    const even = [];
    const odd = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        even.push(arr[i]);
      } else {
        odd.push(arr[i]);
      }
    }
    const newArr = [];
    for (let i = 0; i < even.length; i++) {
      if (odd[i] !== undefined) {
        newArr.push(odd[i]);
      }
      newArr.push(even[i]);
    }
    return parseInt(newArr.join(''), 2);
  })(n);
}

// Example

swapAdjacentBits(13);
// Expected return: 14
