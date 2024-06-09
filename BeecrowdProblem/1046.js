var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let values = lines[0].split(" ");
let a = parseFloat(values[0]);
let b = parseFloat(values[1]);

function hour(start, end) {
  let duration = end - start;
  if (duration <= 0) {
    console.log(`O JOGO DUROU ${duration + 24} HORA(S)`);
  } else {
    console.log(`O JOGO DUROU ${duration} HORA(S)`);
  }
}

hour(a, b);
