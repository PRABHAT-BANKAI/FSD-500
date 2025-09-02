// //Array and Object Intro
// //Available methods

// //array

// let arr = [12, 34, 5, 6, 7, 5, 6]; // store multiple element

// // index    0,1,2,3,4,5,6

// console.log(arr.length);

// //arr.map
// //arr.foreach
// //arr.push
// // arr.pop
// // arr.split()
// //arr.reduce

// //map
// // new array then update new array then return update array

// let result = arr.map((element, index) => {
//   return element + " " + index;
// });

// console.log(result);

// /// spread and rest operator

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr4 = [...arr1];
// let arr3 = [...arr2, ...arr1];
// console.log(arr3);

// console.log(arr1 == arr4);

// // non primitive (store the reference)
// // let arr1 = [1, 2, 3]; // asd334

// // let arr2 = arr1// ljg34

// // arr2.push(45)

// // console.log(arr1)

// // console.log(arr1 == arr2);

// let obj = {
//   // object is a key value pair // non primitive(reference)
//   userName: "batman",
//   age: 12,
//   city: "gotham city",
//   power: "billionare",
// };

// let obj2 = { ...obj };

// obj2.userName = "superman";

// console.log(obj);

// let objKeys = Object.keys(obj);

// console.log(objKeys);

// let objValue = Object.values(obj);

// console.log(objValue)

// destructuring
// let [city, power, userName, age, suite] = [
//   "batman",
//   "23",
//   "gotham city",
//   "billionare",
// ];

// console.log(userName, age, city, power, suite);

// let { userName, age, suite, city, power , batman } = {
//   userName: "superman",
//   age: 12,
//   city: "new york",
//   power: "solid",
//   suite: "super",
// };

let object2 = {
  userName: "superman",
  age: 12,
  city: "new york",
  power: "solid",
  suite: "super",
};

// console.log(userName, age, suite, city, power, batman);

const Product = ({ userName, age, city, power, suite }) => {// in object formate we have props jo parents sae child mae pass krte hai
  return [userName, age, city, power, suite];
};

let result2 = Product(object2);
console.log(result2);
