// Create a function that determines the number of days you will have on your
// next metro card if you know the number of days you had on your current one

function metroCard(lastNumberOfDays) {
  return lastNumberOfDays === 31 ? [28, 30, 31] : [31];
}

// Example

metroCard(30);
// Expected return: [31]
