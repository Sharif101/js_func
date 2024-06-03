var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

const values = lines[0].split(" ");

let a = parseInt(values[0]);
let b = parseInt(values[1]);
let s = parseInt(values[2]);
let ab = (a + b + a * b * s * (a - b)) / 2;
console.log(ab);
