var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let values = lines[0].split(" ");
let x = values[0];
let y = values[1];
let z = values[2];

function bhaskara(a, b, c) {
  let delta = Math.pow(b, 2) - 4 * a * c;

  if (delta > 0 && a != 0) {
    let r1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(5);
    let r2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(5);
    console.log(`R1 = ${r1}\nR2 = ${r2}`);
  } else {
    console.log("Impossivel calcular");
  }
}
bhaskara(x, y, z);
