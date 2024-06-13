var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

let a = parseFloat(lines[0]);

function salary(sl) {
  if (sl <= 400.0) {
    let earn = sl * 0.15;
    let new_salary = sl + earn;
    return `Novo salario: ${new_salary.toFixed(
      2
    )}\nReajuste ganho: ${earn.toFixed(2)}\nEm percentual: 15 %`;
  } else if (sl >= 400.01 && sl <= 800.0) {
    let earn = sl * 0.12;
    let new_salary = sl + earn;
    return `Novo salario: ${new_salary.toFixed(
      2
    )}\nReajuste ganho: ${earn.toFixed(2)}\nEm percentual: 12 %`;
  } else if (sl >= 800.01 && sl <= 1200.0) {
    let earn = sl * 0.1;
    let new_salary = sl + earn;
    return `Novo salario: ${new_salary.toFixed(
      2
    )}\nReajuste ganho: ${earn.toFixed(2)}\nEm percentual: 10 %`;
  } else if (sl >= 1200.01 && sl <= 2000.0) {
    let earn = sl * 0.07;
    let new_salary = sl + earn;
    return `Novo salario: ${new_salary.toFixed(
      2
    )}\nReajuste ganho: ${earn.toFixed(2)}\nEm percentual: 7 %`;
  } else if (sl > 2000.0) {
    let earn = sl * 0.04;
    let new_salary = sl + earn;
    return `Novo salario: ${new_salary.toFixed(
      2
    )}\nReajuste ganho: ${earn.toFixed(2)}\nEm percentual: 4 %`;
  }
}

console.log(salary(a));
