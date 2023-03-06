// Create a function that determines the sum of money when adding the product of
// two given integers for (n) number of items, and adding 1 to each integer for
// each time this is done

function magicalWell(a, b, n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += a * b;
    a++;
    b++;
  }
  return count;
}

// Example

magicalWell(1, 2, 2);
// Expected return: 8
