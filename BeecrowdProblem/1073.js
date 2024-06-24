var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let a = parseInt(lines[0]);

function evensqure(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(`${i}^2 = ${Math.pow(i, 2)}`);
    }
  }
}

evensqure(a);
