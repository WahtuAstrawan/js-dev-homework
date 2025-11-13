var random = Math.floor(Math.random() * 10);

var adjectives = [
  "brave",
  "smart",
  "funny",
  "strong",
  "happy",
  "kind",
  "fast",
  "clever",
  "bold",
  "lucky",
];

var nouns = [
  "lion",
  "tiger",
  "eagle",
  "dragon",
  "wolf",
  "panda",
  "shark",
  "fox",
  "bear",
  "whale",
];

var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "+"];

var newUsername;
var newPassword;
var userOption;

function generate(option) {
  if (option === 1) {
    newUsername = adjectives[random] + nouns[random];
    console.log(`Your generated username is: ${newUsername}`);
    alert(`Your generated username is: ${newUsername}`);
  } else if (option === 2) {
    newPassword =
      adjectives[random].toUpperCase() +
      nouns[random] +
      random +
      symbols[random];

    console.log(`Your generated password is: ${newPassword}`);
    alert(`Your generated password is: ${newPassword}`);
  }
}

do {
  userOption = prompt(
    "Which one do you want to generate? (1 = Username, 2 = Password)"
  );
} while (userOption != 1 && userOption != 2);

if (userOption == 1 || userOption == 2) {
  generate(parseInt(userOption));
}
