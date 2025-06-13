// FUNCTION WITH FOUR WAYS RECURSION

// 1. normal function
// 2. variable function
// 3. arrow function
// 4. anonymous function

// sum(223,1) cannot call before initialzation for variable function //errors

let sum = function (a, b) {
  // variable function
  return a + b;
};

console.log(sum(12, 3));

sub(12, 7);

function sub(a, b) {
  // normal function
  console.log(a - b);
}

sub(15, 5);

// arrow function

// let mul =(a,b)=>{// arrow function with variable function // anonymous function

// console.log(a*b)

// }

// shortcut 2
// let mul =(a,b)=>{// arrow function with variable function // anonymous function

// return a*b

// }

// shortcut 3
let mul = (a, b) => a * b; // arrow function with variable function // anonymous function

console.log(mul(128, 3)); //arguments

// normal function

// showmessage

function showmessage() {
  console.log("welcome to city");
}

showmessage();

//variable function

let even = (num) => {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "odd";
  }
};

console.log(even(22));

//ternory operator
51 % 2 == 0 ? console.log("even") : console.log("odd");
