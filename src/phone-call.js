// Create a function that calculates the maximum number of minutes that can be
// purchased with a given amount of money, and given rates for minutes

function phoneCall(min1, min210, min11, s) {
  let cost = s - min1;
  let min = cost >= 0 ? 1 : 0;
  while (cost > 0) {
    if (min < 10) {
      cost -= min210;
    } else {
      cost -= min11;
    }
    if (cost >= 0) {
      min++;
    }
  }
  return min;
}

// Example

phoneCall(3, 1, 2, 20);
// Expected return: 14
