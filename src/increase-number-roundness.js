// Create a function to determine if the number of consecutive zeros in an
// integer can be increased by switching a pair of digits

function increaseNumberRoundness(n) {
  const round = n.toString().split('').reverse();
  for (let i = 0; i < round.length; i++) {
    if (round[i] !== '0' && round[i + 1] === '0') {
      return true;
    }
  }
  return false;
}

// Example

increaseNumberRoundness(902200100);
// Expected return: true
