var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let values = lines[0].split(" ");
let a = values[0];
let b = values[1];
let c = values[2];
let d = values[3];

function check(A, B, C, D) {
  if (B > C && D > A && C + D > A + B && C > 0 && (D > 0) & (A % 2 == 0)) {
    console.log("Valores aceitos");
  } else {
    console.log("Valores nao aceitos");
  }
}
check(a, b, c, d);
