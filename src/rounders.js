// Create a function that tail-rounds a given integer until there is only one
// non-zero digit

function rounders(n) {
  let num = n;
  for (let i = 0; i < num.toString().length - 1; i++) {
    const round = num.toString().split('').reverse();
    if (Number(round[i]) > 4) {
      num += Math.pow(10, i + 1) - Number(round[i]) * Math.pow(10, i);
    } else {
      num -= Number(round[i]) * Math.pow(10, i);
    }
  }
  return num;
}

// Example

rounders(101);
// Expected return: 100
