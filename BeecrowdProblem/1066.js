var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let c = parseFloat(lines[2]);
let d = parseFloat(lines[3]);
let e = parseFloat(lines[4]);

function positive(...arg) {
  let evenArry = [];
  let oddArry = [];
  let posArray = [];
  let negArray = [];

  for (let i = 0; i < arg.length; i++) {
    const element = arg[i];
    if (element % 2 === 0) {
      evenArry.push(element);
    }
    if (element % 2 !== 0) {
      oddArry.push(element);
    }
    if (element > 0) {
      posArray.push(element);
    }
    if (element < 0) {
      negArray.push(element);
    }
  }

  console.log(`${evenArry.length} valor(es) par(es)`);
  console.log(`${oddArry.length} valor(es) impar(es)`);
  console.log(`${posArray.length} valor(es) positivo(s)`);
  console.log(`${negArray.length} valor(es) negativo(s)`);
}

positive(a, b, c, d, e);
