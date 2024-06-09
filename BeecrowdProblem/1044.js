var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let values = lines[0].split(" ");
let x = parseInt(values[0]);
let y = parseInt(values[1]);

function multi(a, b) {
  if (a % b === 0 || b % a === 0) {
    console.log("Sao Multiplos");
  } else {
    console.log("Nao sao Multiplos");
  }
}

multi(x, y);
