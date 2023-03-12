// Create a function that takes a number of candles, as well as the number of
// candle leftovers needed to produce a new candle, and calculates the total
// number of candles that can be used

function candles(candlesNumber, makeNew) {
  let [burned, count] = [0, 0];
  for (let i = 1; i <= candlesNumber; i++) {
    burned++;
    if (burned === makeNew) {
      burned = 0;
      i--;
    }
    count++;
  }
  return count;
}

// Example

candles(5, 2);
// Expected return: 9
