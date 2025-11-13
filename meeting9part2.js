var randomNumber = Math.floor(Math.random() * 11);
var expectedNumber = 5;

do {
  randomNumber = Math.floor(Math.random() * 11);
  console.log("Random Number: " + randomNumber);
} while (randomNumber !== expectedNumber);

console.log("You found the expected number: " + randomNumber);
