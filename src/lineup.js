// Create a function that counts the number of times students will be facing
// the same direction after directions are given to turn

function lineup(commands) {
  let count = 0;
  let num = 1;
  let other = 1;
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === 'A') {
      num = num + 0.5;
      other = other - 0.5;
    } else if (commands[i] === 'L' || commands[i] === 'R') {
      num = num + 0.25;
      other = other - 0.25;
    }
    if ((num - other) - Math.floor(num - other) === 0) {
      count++;
    }
  }
  return count;
}

// Example

lineup('LLARL');
// Expected return: 3
