var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

const values = lines[0].split(" ");
function large(value) {
  let largenumber = Math.max(...value);
  console.log(`${largenumber} eh o maior`);
}

large(values);
