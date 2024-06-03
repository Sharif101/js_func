var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let a = parseFloat(lines[1]);
let b = parseFloat(lines[2]);
let dis = b * 0.15;
let total = (a + dis).toFixed(2);
console.log("TOTAL = R$ " + total);
