var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let c = parseFloat(lines[2]);
let d = parseFloat(lines[3]);
let e = parseFloat(lines[4]);
let f = parseFloat(lines[5]);

// let arrays = [
//   parseFloat(lines[0]),
//   parseFloat(lines[1]),
//   parseFloat(lines[2]),
//   parseFloat(lines[3]),
//   parseFloat(lines[4]),
//   parseFloat(lines[5]),
// ];

function positive(...arg) {
  let posArray = [];
  for (let i = 0; i < arg.length; i++) {
    const element = arg[i];
    if (element > 0) {
      posArray.push(element);
    }
  }
  console.log(`${posArray.length} valores positivos`);
}

positive(a, b, c, d, e, f);
