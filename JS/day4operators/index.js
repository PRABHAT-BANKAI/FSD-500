// Arithmetic operators + - * /  the exponentiation operator(power)**   % modulus return remainder
// Assignment operators
// Comparison operators
// Logical operators
// conversion with console.log and innerHTML

let a = 12; // = is assign operator
let b = 18;

let sum = a + b;

console.log("sum =>", sum);

let sub = a - b;
console.log("sub=>", sub);

let mul = a * b;

console.log("mul = >", mul);

let div = 50 / 3;

console.log(div);

let number = 3;

console.log(number ** 3);

let result = 15 % 4; // modolus return remainder;
console.log(result);

// Assignment operators
// +=
// -=
// %=
// /=
// *=
// **=

let sum1 = 0;

sum1 = sum1 + 6;
sum1 += 8;

sum1 -= 2;

console.log(sum1);

// Comparison operators
// ==
// === strickly
// <
// >
// <=
// >=
// !=
// !==

console.log(12 == 12); // True
console.log("12" == 12); // True
console.log("12" === 12); //false
console.log(13 === 12);
console.log(11 != 12);
console.log("com", 55 < 4);
console.log("com", 55 > 4);
console.log("com", 55 >= 4);
console.log("com", 55 <= 4);

console.log("12" !== 12);

// Logical operators
// && and    || or

// && and operators return falsy value

console.log(55 < 88 && 0 && 43 == 44); // left to right

// || or  operators return truty value

console.log(55 > 88 || 0 || 1);

// conversion and corciean with console.log and innerHTML

// implicit
// explicit

let value2 = 12;
console.log(value2);
console.log(typeof value2);

value2 = String(value2);
console.log(value2);
console.log(typeof value2);

let str2 = "25";

str2 = Number(str2);

console.log(str2);

let str3 = "25a";

str3 = Number(str3);

console.log(str3); //datatype is number(NaN) NaN not a number

let bool = true;

let result3 = Number(bool);

console.log(result3);




// implicit// javascript corciean   javascript convert datatypes by own 

console.log("12"+3+1+5+6)// concatenation left to right 
console.log(3+1+5+6+"12"+3)

console.log("12"-4)