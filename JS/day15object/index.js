// JS Objects ( PPT) Object Property Object Methods
//object is a key value pairs
let hero = {
  name: "batman",
  age: 44,
  power: "billionare",
  show: function () {
    console.log("I am batman");
  },
  // supernaturalPower: false,
};
// dot notation
// bracket notation

console.log(hero.name);
console.log(hero["age"]);
console.log(typeof hero);

let array = ["name", "age", "power"];

console.log(hero[array[0]]);

for (let i = 0; i < array.length; i++) {
  console.log(hero[array[i]]);
}


hero.show()