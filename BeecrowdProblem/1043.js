var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let values = lines[0].split(" ");
let x = parseFloat(values[0]);
let y = parseFloat(values[1]);
let z = parseFloat(values[2]);

function result(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    // The sides form a triangle
    const perimeter = a + b + c;
    console.log(`Perimetro = ${perimeter.toFixed(1)}`);
  } else {
    // The sides form a trapezoid
    const area = ((a + b) * c) / 2;
    console.log(`Area = ${area.toFixed(1)}`);
  }
}
result(x, y, z);
