var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

const v1 = lines[0].split(" ");
const v2 = parseFloat(lines[1]);

let a = parseFloat(v1[0]);
let b = parseFloat(v1[1]);
let c = parseFloat(v1[2]);
let d = parseFloat(v1[3]);

function avg3(n1, n2, n3, n4, exam) {
  let sum = n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1;
  let avg = sum / 10;
  let final = (avg + exam) / 2;

  console.log(`Media: ${avg.toFixed(1)}`);

  if (avg >= 7.0) {
    console.log("Aluno aprovado.");
  } else if (avg < 5.0) {
    console.log("Aluno reprovado.");
  } else {
    console.log("Aluno em exame.");
    console.log(`Nota do exame: ${exam.toFixed(1)}`);
    if (avg >= 5.0) {
      console.log("Aluno aprovado.");
    } else {
      console.log("Aluno reprovado.");
    }
    console.log(`Media final: ${final.toFixed(1)}`);
  }
}

avg3(a, b, c, d, v2);
