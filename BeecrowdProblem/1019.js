var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let value = parseInt(lines[0]);

function findtime(input) {
  let hour = Math.floor(input / 3600);
  let min = Math.floor((input % 3600) / 60);
  let second = input % 60;
  console.log(`${hour}:${min}:${second}`);
}
findtime(value);
