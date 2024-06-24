var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let a = parseInt(lines[0]);

function multi(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${n} = ${i * n}`);
  }
}

multi(a);
