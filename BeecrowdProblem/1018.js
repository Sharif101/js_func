var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let tk = parseInt(lines[0]);
let banknotes = [100, 50, 20, 10, 5, 2, 1];

function banknotespos(note, value) {
  for (let i = 0; i < note.length; i++) {
    const element = note[i];
    let notecount = Math.floor(value / element);
    value -= element * notecount;
    console.log(`${notecount} nota(s) de R$ ${element.toFixed(2)}`);
  }
}
banknotespos(banknotes, tk);
