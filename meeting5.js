// Task 1
var numbers = [-40, 50, 0];
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] == 0) {
    console.log("not negative or positive");
  } else if (numbers[i] > 0) {
    console.log("positive");
  } else {
    console.log("negative");
  }
}

// Task 2
var ages = [8, 17, 20];
for (var j = 0; j < ages.length; j++) {
  if (ages[j] >= 17) {
    console.log("eligible");
  } else {
    console.log("not eligible");
  }
}

// Task 3
var grade = 75;
if (grade > 90) {
  console.log("A");
} else if (grade > 75) {
  console.log("B");
} else if (grade > 60) {
  console.log("C");
} else {
  console.log("D");
}

// Task 4
var totalPayment = 200000;
var member = true;
if (member) {
  totalPayment = totalPayment - totalPayment * 0.1;
}
console.log("Total payment: " + totalPayment);

// Task 5
var choosenPlayer = "Knight";
if (choosenPlayer == "Knight") {
  console.log("Welcome, Knight the hero!");
} else if (choosenPlayer == "Wizard") {
  console.log("Welcome, Wizard the witch!");
} else {
  console.log("Unknown player");
}
