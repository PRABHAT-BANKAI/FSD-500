//if statment

let studentMarks = 10;

// if(codition){

// }

if (studentMarks >= 90) {
  //false
  console.log("you will get bike ");
} else {
  console.log("pitai");
}

if (studentMarks >= 70) {
  console.log("you will get better college");
} else {
  console.log("you will not get better college");
}

let number = 13;

if (number % 2 == 0) {
  console.log("even", number);
} else {
  console.log("odd", number);
}

if (number % 2 != 0) {
  console.log("odd");
} else {
  console.log("even");
}

let num1 = 55;

let num2 = 66;

if (num1 > num2) {
  // if conditon is true if block will execute other condition false else block will execute
  console.log("num1 is greater than num2");
} else {
  console.log("num1 is not greater than num2 ");
}

// nested if else

let email = "asd@gmail.com";

let password = 12345;

if (email === "asd@gmail.com") {
  //nested ifelse
  if (password === 12345) {
    console.log("login successfully");
  } else {
    console.log("password is not vaild");
  }
} else {
  console.log("email is not vaild");
}

//Nested if else Statement min, ,max

let a = 115;

let b = 120;

let c = 30;

if (a > b) {
  if (a > c) {
    console.log("a is greater than ");
  } else {
    console.log("c is greater than ");
  }
} else {
  if (b > c) {
    console.log("b is greater than");
  } else {
    console.log("c is greater than ");
  }
}



if(email== "asd@gmail.com" && password == 2345){

  console.log("login successfull")
}else{
  console.log("invalid credetials")
}