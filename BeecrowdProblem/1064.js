var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let c = parseFloat(lines[2]);
let d = parseFloat(lines[3]);
let e = parseFloat(lines[4]);
let f = parseFloat(lines[5]);

function positive(...arg) {
  let posArray = [];
  let sum = 0;
  for (let i = 0; i < arg.length; i++) {
    const element = arg[i];
    if (element > 0) {
      posArray.push(element);
    }
  }
  for (let j = 0; j < posArray.length; j++) {
    // const element = posArray[j];
    sum += posArray[j];
  }

  console.log(`${posArray.length} valores positivos`);
  console.log((sum / posArray.length).toFixed(1));
}

positive(a, b, c, d, e, f);
