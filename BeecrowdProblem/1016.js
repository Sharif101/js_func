var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let a = parseInt(lines[0]);
function car(x) {
  let rslt = x * 2;
  console.log(rslt + " minutos");
}
car(a);
