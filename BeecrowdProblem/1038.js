var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

const values = lines[0].split(" ");
let a = values[0];
let b = values[1];

function snack(x, y) {
  if (x == 1) {
    let one = (4.0 * y).toFixed(2);
    console.log(`Total: R$ ${one}`);
  } else if (x == 2) {
    let two = (4.5 * y).toFixed(2);
    console.log(`Total: R$ ${two}`);
  } else if (x == 3) {
    let three = (5.0 * y).toFixed(2);
    console.log(`Total: R$ ${three}`);
  } else if (x == 4) {
    let four = (2.0 * y).toFixed(2);
    console.log(`Total: R$ ${four}`);
  } else if (x == 5) {
    let five = (1.5 * y).toFixed(2);
    console.log(`Total: R$ ${five}`);
  }
}

snack(a, b);
