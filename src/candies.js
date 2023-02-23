// Create a function that takes a number of children and a number of candies and
// determines the maximum number of candies that can be eaten with every kid
// having the same number of candies

function candies(n, m) {
  return (m - (m % n));
}

// Example

candies(3, 10);
// Expected return: 9
