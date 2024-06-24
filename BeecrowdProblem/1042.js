var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let values = lines[0].split(" ");

let x = parseInt(values[0]);
let y = parseInt(values[1]);
let z = parseInt(values[2]);

function assending(a, b, c) {
  let arry = [a, b, c];
  let assing = arry.sort((a, b) => a - b);

  let finalAssing = assing.join("\n");
  let input = `\n${a}\n${b}\n${c}`;

  return `${finalAssing} \n${input}`;
}
console.log(assending(7, 21, -14));
