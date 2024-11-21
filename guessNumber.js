function checkNumber(maxAttempts, randomNumber, userNumber) {
  if (userNumber + "" === "NaN") {
    console.log("Invalid input! Please enter a number.");
    takeInput(maxAttempts, randomNumber);
  }
}

function takeInput(maxAttempts, randomNumber) {
  const userNumber = +prompt("Guess the number : ");

  return checkNumber(maxAttempts, randomNumber, userNumber);
}

function startGame(rangeStart, rangeEnd, maxAttempts) {
  console.log("Welcome to Guess the Number!");
  console.log("The secret number is between " + rangeStart + " and " + rangeEnd);
  console.log("You have " + maxAttempts + " attempts to find it.");
  const end = (rangeEnd - rangeStart) + rangeStart;
  const randomNumber = Math.round(Math.random() * end);

  takeInput(maxAttempts, randomNumber);
}

startGame(100, 200, 6);
