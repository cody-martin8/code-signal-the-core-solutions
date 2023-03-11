// Create a function that tallies the number of apples in k number of boxes,
// where each box has an increasing area up to k * k. The odd-width boxes have
// red apples and the even-width boxes have yellow apples. Return the difference
// between the red apples and the yellow apples

function appleBoxes(k) {
  let [red, yellow] = [0, 0];
  for (let i = 1; i <= k; i++) {
    if (i % 2 !== 0) {
      red += (Math.pow(i, 2));
    }
    if (i % 2 === 0) {
      yellow += (Math.pow(i, 2));
    }
  }
  return yellow - red;
}

// Example

appleBoxes(5);
// Expected return: -15
