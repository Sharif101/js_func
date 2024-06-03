var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let R = parseFloat(lines[0]);
let pi = 3.14159;
let vol = ((4 / 3) * pi * Math.pow(R, 3)).toFixed(3);

console.log("VOLUME = " + vol);
