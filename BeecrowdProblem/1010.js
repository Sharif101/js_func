var input = require("fs").readFileSync("./BeecrowdProblem/input.txt", "utf8");
var lines = input.split("\n");

const product1 = lines[0].split(" ");
const product2 = lines[1].split(" ");

let p1_unit = parseInt(product1[1]);
let p1_price = parseFloat(product1[2]).toFixed(2);
let p2_unit = parseInt(product2[1]);
let p2_price = parseFloat(product2[2]).toFixed(2);

let pay = (p1_unit * p1_price + p2_unit * p2_price).toFixed(2);
console.log("VALOR A PAGAR: R$ " + pay);
