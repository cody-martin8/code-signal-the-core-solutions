// Create a function that returns true when "loved" is true and either
//  "beautiful" or "young" is false, or when "loved" is false and both
// "beautiful" and "young" are true

function willYou(young, beautiful, loved) {
  const arr = [young, beautiful];
  return loved === true && arr.includes(false);
}

// Example

willYou(true, false, true);
// Expected return: true
