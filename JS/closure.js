function main() {
  const name = "Virat";
  function sayMyName() {
    console.log(name);
  }
  sayMyName();
}
main();
console.log("-----------------");

function adder(num) {
  function add(b) {
    console.log(num + b);
  }
  return add;
}

const add5 = adder(5);
//console.log(add5);
add5(10) // 15
add5(6) //11
