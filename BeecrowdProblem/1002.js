var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let π = 3.14159;
let R = Number(lines.shift());
let A = (π * Math.pow(R, 2)).toFixed(4);
console.log("A=", A);
console.log("\n");
