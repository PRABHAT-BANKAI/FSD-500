"use strict"; // keyword variable store krane k liyae

//Javascript
// javascript is a single threaded language  and interpreted language
// case sensitive
// async operation handle
// dynamic type language

// DATA TYPES & VARIABLES
//what is variables understanding data types declaring and initialization variables

// Primitive
// Non primitive

// Primitive

// Number
// String "hello",'hello', `hello`
// boolean// true ,false
// Bigint // 123340834095083460908098n
// Undefined  // undefiend throw by  javascript
// Null // empty value ,just look like undefined, user can defined null

// Non Primitive
// Array [1,2,3,4,5,6,7] collection multple data types
// object   {name:"batman"} key value pairs
// function

// let , const ,var keyword of javascript which is help in store variable name

let userName = "batman";
userName = 1234; // dynamic update
userName = "superman";

let number = 12354;

console.log(userName, number);

let boolean = false;
console.log(boolean);

console.log(123123123123123123123123n);

let marvel;

console.log(marvel);

let game = null;

console.log(game);

//array
let arr = [12, false, "string", null]; // array index start from 0
console.log(arr[2]);
console.log(arr);


//object
let avengers = {
  captain: "crish evans",
  ironman: "tony",
  thor: "hemswrot",
  spiderman: "peter parker",
};

console.log(avengers)
console.log(avengers.thor)

//function  block of code 

{

  // block
}


function add(){
  console.log(4+4)
}

add()// function call 
add()

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

function show1(){
  console.log("1")
}
function show2(){
  console.log("2")
}
function show3(){
  console.log("3")
}
function show4(){
  console.log("4")
}
function show5(){
  console.log("5")
}


show5()
show1()
show4()


console.log( typeof 5)
console.log( typeof true)
console.log( typeof "str")
console.log( typeof null)// data type always object

console.log( typeof undefined)
console.log( typeof 234n)

console.log(typeof [12,2,4])

console.log( typeof {userName:"batman"})



// camel case  userName    userData  userDataOfAll
// snake case  user_name    user_data user_data_all
// css main-container  //box-main