var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let values = lines[0].split(" ");
let a = parseFloat(values[0]);
let b = parseFloat(values[1]);
let c = parseFloat(values[2]);

function bigtosmall(...args) {
  let stortedarry = args.sort((a, b) => b - a);
  const [A, B, C] = stortedarry;
  return { A, B, C };
  // console.log({ A, B, C });
}

function types(x, y, z) {
  const { A, B, C } = bigtosmall(x, y, z);
  if (A >= B + C) {
    console.log("NAO FORMA TRIANGULO");
  } else {
    if (Math.pow(A, 2) === Math.pow(B, 2) + Math.pow(C, 2)) {
      console.log("TRIANGULO RETANGULO");
    }
    if (Math.pow(A, 2) > Math.pow(B, 2) + Math.pow(C, 2)) {
      console.log("TRIANGULO OBTUSANGULO");
    }
    if (Math.pow(A, 2) < Math.pow(B, 2) + Math.pow(C, 2)) {
      console.log("TRIANGULO ACUTANGULO");
    }
    if (A === B && B === C) {
      console.log("TRIANGULO EQUILATERO");
    }
    if ((A === B && A !== C) || (A === C && A !== B) || (B === C && B !== A))
      console.log("TRIANGULO ISOSCELES");
  }
}

types(a, b, c);
