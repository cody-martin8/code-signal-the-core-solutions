// Create a function that determines the number of ways that a given integer can
// be represented as a sum of two other integers that fit within a range of
// given integers

function countSumOfTwoRepresentations(n, l, r) {
  const first = n % 2 === 0 ? n / 2 : Math.floor(n / 2) + 1;
  let count = 0;
  while (first - count >= l && first + count <= r) {
    count++;
  }
  return count;
}

// Example

countSumOfTwoRepresentations(6, 2, 4);
// Expected return: 2
