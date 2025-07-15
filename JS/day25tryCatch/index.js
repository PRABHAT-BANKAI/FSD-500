// 	JS Error Throw and try to catch Arrow functions

// console.log(1);

// console.log(2);

// try {
//   consol.log(3);
// } catch (error) {
//   console.log(error);
// }

// console.log(4);

// console.log(5);

console.log(1);

console.log(2);

try {
  let number = 5;
  if (number % 2 == 0) {
    console.log("even");
  } else {
    throw "odd error";
  }
} catch (error) {
  console.log("error");
  console.log(error);
}

console.log(4);

console.log(5);
