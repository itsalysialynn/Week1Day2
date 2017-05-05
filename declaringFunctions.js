
function getRandomValue() {
  var min = 1;
  var max = 6;
  min = Math.ceil(min);
  max = Math.floor(max);
  return " " + (Math.floor(Math.random() * (max - min)) + min);
}

function NumberOfRolls(number) {
  var results = [];
  for (var i = 0; i < number; i++) {
    results.push(getRandomValue());
  } //for bracket

console.log("Rolled " + number + " dice:" + results.toString());
} //function bracket 


NumberOfRolls(process.argv[2]);