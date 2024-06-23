var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let a = parseFloat(lines[0]);

function salary(x) {
  if (x <= 2000.0) {
    console.log("Isento");
  } else if (x <= 3000.0) {
    let tax = 0.08;
    let taxAm = (x - 2000.0) * tax;
    console.log(`R$ ${taxAm.toFixed(2)}`);
  } else if (x <= 4500.0) {
    let tax = 0.18;
    let taxAm = 1000 * 0.08 + (x - 3000) * tax;
    console.log(`R$ ${taxAm.toFixed(2)}`);
  } else {
    let tax = 0.28;
    let taxAm = 1000 * 0.08 + 1500 * 0.18 + (x - 4500) * tax;
    console.log(`R$ ${taxAm.toFixed(2)}`);
  }
}

salary(a);
