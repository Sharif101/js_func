var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let totaldays = lines[0];

function wholeyr(days) {
  let yr = Math.floor(days / 365);
  let months = Math.floor((days % 365) / 30);
  let day = (days % 365) % 30;
  console.log(`${yr} ano(s)\n${months} mes(es)\n${day} dia(s)`);
}
wholeyr(totaldays);
