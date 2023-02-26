// Create a function that determines whether two given values makes the following
// pseudocode an infinite loop:
// while a is not equal to be do
//    increase a by 1
//    decrease b by 1

function isInfiniteProcess(a, b) {
  return a > b || (b - a) % 2 !== 0;
}

// Example

isInfiniteProcess(2, 6);
// Expected return: false
