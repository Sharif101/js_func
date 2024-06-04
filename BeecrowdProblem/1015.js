var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

const p1 = lines[0].split(" ");
const p2 = lines[1].split(" ");

let x1 = parseFloat(p1[0]).toFixed(2);
let y1 = parseFloat(p1[1]).toFixed(2);
let x2 = parseFloat(p2[0]).toFixed(2);
let y2 = parseFloat(p2[1]).toFixed(2);

let rslt = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(4);
console.log(rslt);
