let a = [123, 332, 43, 4535, 2, 3];
for (let i of a) {
  console.log(i);
}
// for In show values on array

let obj = { a: "1", b: "1" };
for (let i of Object.entries(obj)) {
  console.log(i);
}
// an object for in return object keys and values indivual array

let ob = [
  { a: "1", b: "1" },
  { x: "11", y: "b" },
];
for (let i of Object.entries(ob)) {
  console.log(i);
}
