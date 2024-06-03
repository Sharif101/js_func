var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

const values = lines[0].split(" ");

let A = parseFloat(values[0]);
let B = parseFloat(values[1]);
let C = parseFloat(values[2]);

let triangle = ((1 / 2) * A * C).toFixed(3);
let circle = (3.14159 * Math.pow(C, 2)).toFixed(3);
let trapizod = (((A + B) / 2) * C).toFixed(3);
let square = (B * B).toFixed(3);
let rectangle = (A * B).toFixed(3);

console.log("TRIANGULO: " + triangle);
console.log("CIRCULO: " + circle);
console.log("TRAPEZIO: " + trapizod);
console.log("QUADRADO: " + square);
console.log("RETANGULO: " + rectangle);
