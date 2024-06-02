// var কীওয়ার্ড ফাংশন স্কোপ মেইন্টেইন করে
// let ও const ব্লক(Block) স্কোপ মেইন্টেইন করে

//var example
function test() {
  if (true) {
    var a = 5;
  }
  console.log(a);
}
test(); //karon var func scope maintain kre tai if block er bahireo var variable access kra jaccce.

// let or const example
function test2() {
  if (true) {
    let b = 5;
  }
  console.log(b);
}
test2(); // akhne b ke access kra jabe na karon let or const block scope maintain kre
