var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let dis = parseFloat(lines[0]);
let litter = parseFloat(lines[1]);
let km = (dis / litter).toFixed(3);
console.log(km + " km/l");
