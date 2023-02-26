// Create a function that calculates whether a given reward combined with a
// given experience level reaches a given threshold

function reachNextLevel(experience, threshold, reward) {
  return experience + reward >= threshold;
}

// Example
reachNextLevel(10, 15, 5);
// Expected return: true
