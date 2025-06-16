// nested functions Closure concepts variables as a function arrow function IIFE

// function outer() {
//   // console.log("outerfunction");
//   const a = 14;
//   const b = 16;
//   inner();
//   function inner() {
//     // console.log("innerfunction");

//     console.log(a + b);
//   }
// }

// outer();

//CLOSURE
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

/* function outer() {
  let a = 10;
  let b = 5;

  function inner() {
    console.log(a + b);
  }

  a = 20;
  b = 1;

  return inner;
}

// console.log(outer())

const innerFun = outer();

innerFun(); */

// function inFun() {
//   console.log(a + b);
// }
// inFun();

// IIFE(immedietly invoked function expression )

/* (() => {
  console.log("iife");
})()(
  // iife with invoked with arrow function

  function show() {
    console.log("iife");
  }
)(); // but cannot invoked with normal function */

// globally create variables 
let num1 = 12;
let num2 = 13;
let value = 111


function show(num1,num2,value){
  console.log(num1 - num2);
  console.log(value)
}

show(1,23,5)