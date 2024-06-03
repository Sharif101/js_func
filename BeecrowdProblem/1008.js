var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let c = parseFloat(lines[2]);
let sum = (b * c).toFixed(2);
console.log("NUMBER = " + a);
console.log("SALARY = U$ " + sum);
