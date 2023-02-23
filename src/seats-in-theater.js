// Create a function that counts all the seats behind and to the left of the
// given seat coordinates, given the number of rows and columns

function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - col + 1) * (nRows - row);
}

// Example

seatsInTheater(16, 11, 5, 3);
// Expected return: 96
