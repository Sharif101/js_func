var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

// let a = parseInt(lines[0]);
// let b = parseInt(lines[1]);
// let c = parseInt(lines[2]);
// let d = parseInt(lines[3]);
// let e = parseInt(lines[4]);

// function highpos(...arg) {
//   let highestNumber = Math.max(...arg);
//   let highValueIndex = arg.indexOf(highestNumber);
//   console.log(highestNumber);
//   console.log(highValueIndex + 1);
// }

// highpos(2, 113, 45, 34565, 62342, 8);

function highest(numbers) {
  const max = Math.max(...numbers);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === max) {
      return `${max} \n${i + 1}`;
    }
  }
}

const numbers = [2, 113, 45, 34565, 6, 8];
const result = highest(numbers);

console.log(result);
