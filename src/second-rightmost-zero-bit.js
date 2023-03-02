// Create a function that finds the 0-based position of the second-rightmost
// zero bit in the binary representation of a given integer, counting right to
// left. Return the value of 2^(that value)

function secondRightmostZeroBit(n) {
  return (
    1 <<
    (n.toString(2).length -
      n.toString(2).lastIndexOf('0', n.toString(2).lastIndexOf('0') - 1) -
      1)
  );
}

// Example

secondRightmostZeroBit(37);
// Expected return: 8
