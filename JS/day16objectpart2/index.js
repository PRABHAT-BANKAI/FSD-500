// let array = [
//   { userName: "batman", age: 44, subject: ["science", "maths"] },
//   { userName: "superman", age: 55, subject: ["history", "politcal science"] },
//   { userName: "spiderman", age: 15, subject: ["chemistry", "physics"] },
//   { userName: "thor", age: 193, subject: ["english", "gujarati"] },
// ];

// console.log(array[0].userName);

// let i = 0;

// while (i < array.length) {
//   console.log(
//     `Name:${array[i].userName}  age: ${array[i].age} subject: ${array[i].subject}`
//   );

//   i++;
// }

// let student = {
//   studentName: "henil",
//   subjects: { math: 45, science: 87, coding: 56 },
//   result: function () {
//     console.log("congratulation for passing ");

//     return 15 + 15;
//   },
// };

// let array2 = ["math", "science", "coding"];
// let totalSum = 0;

// for (let i = 0; i < array2.length; i++) {
//   totalSum += student.subjects[array2[i]];
// }

// let add = student.result();
// console.log(add);
// console.log(totalSum);

// let array4 = ["audi", "suzuki", "hundai", "bmw", "bugati", "farrari", "ford"];

// for (let elements of array4) {
//   // of keyword for array
//   console.log(elements);
// }

// let game = {
//   gameName: "csgo",
//   price: 1500,
//   mode: "acrade or multiplayer",
//   review: "5 stars",
// };

// for (let key in game) {// in keyword for object
//   console.log(key , game[key]);
// }

let numbers = [12, 44, 3, 5, 6];

for (let i = 0; i < numbers.length; i++) {
  if (i % 2 == 1) {
    console.log(numbers[i]);
  }
}
