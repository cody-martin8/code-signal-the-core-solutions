// Create function that determines whether a given tennis score can be a valid
// winning score. 6 is a winning score unless the opponent reaches 5 points.
// Then the winning score is 7

function tennisSet(score1, score2) {
  const arr = [score1, score2].sort((a, b) => b - a);
  if (arr[0] === 6 && arr[1] < 5) {
    return true;
  } else if (arr[0] === 7 && arr[1] < arr[0] && arr[1] > 4) {
    return true;
  } else {
    return false;
  }
}

// Example

tennisSet(7, 5);
// Expected return: true
