var timeSpentOnGames = [2, 2, 3, 3, 1, 4, 5];
var totalTime = 0;
var totalExceedGameTimeLimit = 0;

for (var i = 0; i < timeSpentOnGames.length; i++) {
  totalTime += timeSpentOnGames[i];
  if (timeSpentOnGames[i] > 2) {
    totalExceedGameTimeLimit += 1;
  }
}

console.log("Total time spent on games: " + totalTime + " hours");
console.log(
  "Number of days exceeding game time limit: " +
    totalExceedGameTimeLimit +
    " days"
);
