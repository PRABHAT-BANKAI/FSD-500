//hoisting (behaviour of javascript)

console.log(heroname);
var heroname = "batman";
console.log(heroname);

show();
function show() {
  // console.log(heroname);
let heroname = "superman";
  console.log(heroname);
}
