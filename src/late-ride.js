// Create a function that takes n number of minutes and returns the sum of the
// digits if the minutes were converted to hh:mm format

function lateRide(n) {
  const arr = (parseInt(n / 60).toString().split('').concat((n % 60).toString().split('')));
  return arr.reduce((count, n) => count + Number(n), 0);
}

// Example

lateRide(808);
// Expected return: 14 or (1 + 3 + 2 + 8)
