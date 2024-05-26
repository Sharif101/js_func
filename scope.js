let a = "hello";
const global = () => {
  console.log(a);
};
global();

const local = () => {
  let a = "hi";
  console.log(a);
};
local();

const auto_global = () => {
  c = "auto global";
};
auto_global();
console.log(c);
