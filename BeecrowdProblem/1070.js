var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let a = parseInt(lines[0]);

function odd(x) {
  let count = 0;
  let number = x;

  while (count < 6) {
    if (number % 2 !== 0) {
      count++;
      console.log(number);
    }
    number++;
  }
}

odd(a);
