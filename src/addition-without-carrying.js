// Create a function that calculates what the sum of two integers would be if
// an individual added them together without carrying the 1 for each place

function additionWithoutCarrying(param1, param2) {
  const [one, two] = [Math.max(param1, param2).toString().split('').reverse(), Math.min(param1, param2).toString().split('').reverse()];
  let sum = param1 + param2;
  for (let i = 0; i < one.length; i++) {
    if (Number(one[i]) + Number(two[i]) >= 10) {
      sum -= Math.pow(10, i + 1);
    }
  }
  return sum;
}

// Example

additionWithoutCarrying(456, 1734);
// Expected return: 1180
