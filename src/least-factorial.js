// Create a function that finds the smallest factorial that's bigger than a
// given integer

function leastFactorial(n) {
  for (let i = 1; i <= n; i++) {
    let m = 1;
    let factorial = 1;
    while (m <= i) {
      factorial *= m;
      m++;
    }
    if (factorial >= n) {
      return factorial;
    }
  }
}

// Example

leastFactorial(17);
// Expected return: 24
