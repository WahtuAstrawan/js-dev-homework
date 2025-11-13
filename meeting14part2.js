function cmToMeter(cm) {
  var m = cm * 0.01;
  return `${cm} cm is ${m} meter `;
}

function cmToKm(cm) {
  var km = cm * 0.00001;
  return `${cm} cm is ${km} kilometer `;
}

function cmToMm(cm) {
  var mm = cm * 10;
  return `${cm} cm is ${mm} millimeter `;
}

console.log(cmToMeter(100));
console.log(cmToKm(10000));
console.log(cmToMm(100));
