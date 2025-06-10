// For loop
// Some reasoning programming

// for(initialization;condtion;increment ,decrement){

//   code will be execute base condtion of true

// }

// for(let i=1;i<=100;i++){
//   console.log(i)
// }

for (let i = 5; i > 0; i--) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  //2<=10
  if (i % 2 == 0) {
    console.log("even", i); //2
  }
}

console.log("121" + 9); //concatenate

// 12345 // 15

let str = "";

let sum = 0; //15
for (let i = 1; i <= 5; i++) {
  //2//3//4//5//6

  // sum = sum +i//1)+5
  // sum += i;
  str+= i
}

// console.log(sum);
console.log(str)
