var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);

function oddSum(a, b) {
  let sum = 0;
  let min = Math.min(a, b) + 1;
  let max = Math.max(a, b);

  for (let i = min; i < max; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  console.log(sum);
}

oddSum(a, b);
