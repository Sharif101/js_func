var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let a = parseInt(lines[0]);

function dial() {
  if (a === 61) {
    return "Brasilia";
  } else if (a === 71) {
    return "Salvador";
  } else if (a === 11) {
    return "Sao Paulo";
  } else if (a === 21) {
    return "Rio de Janeiro";
  } else if (a === 32) {
    return "Juiz de Fora";
  } else if (a === 19) {
    return "Campinas";
  } else if (a === 27) {
    return "Vitoria";
  } else if (a === 31) {
    return "Belo Horizonte";
  } else {
    return "DDD nao cadastrado";
  }
}

console.log(dial(a));
