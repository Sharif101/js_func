var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let A = parseInt(lines[0]);
let B = parseInt(lines[1]);
let SOMA = A + B;
console.log("SOMA = " + SOMA);
