var area;
var circum;

function square(side) {
  area = side * side;
  circum = 4 * side;
  console.log("---Square-----");
  console.log(`Area : ${area} `);
  console.log(`Circumference : ${circum}`);
}

function rect(width, height) {
  area = width * height;
  circum = (width + height) * 2;
  console.log("---Rectangle-----");
  console.log(`Area :  ${area} `);
  console.log(`Circumference : ${circum}`);
}

rect(10, 5);
square(5);
