var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let values = lines[0].split(" ");

let x = values[0];
let y = values[1];
let z = values[2];

function assending(a, b, c) {
  let arry = [a, b, c];
  let assing = arry.sort((a, b) => a - b);

  let finalAssing = assing.join("\n");
  let input = `\n${a}\n${b}\n${c}`;

  console.log(`${finalAssing} \n${input}`);
}
assending(x, y, z);
