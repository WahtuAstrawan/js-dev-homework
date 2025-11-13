var x = 10;
var y = 20;

function isPositive(num) {
  return num > 0;
}

if (isPositive(x) && isPositive(y)) {
  console.log("TOP RIGHT");
} else if (isPositive(x) && !isPositive(y)) {
  console.log("BOTTOM RIGHT");
} else if (!isPositive(x) && isPositive(y)) {
  console.log("TOP LEFT");
} else {
  console.log("BOTTOM LEFT");
}
