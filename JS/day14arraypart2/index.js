// Array With Functions (map ,filter, foreach, indexof, findindex ,includes, every, some)

//map

let array = [12, 43, 77, 56, 99, 1, 43, 55, 33, 11, 22];

//map
// 1step new array create
// update newarray with some result
// return new array with updated array

// map is a high order function (HOF) is take a function as an argument
// let store = array.map((item)=>{

//   return item *2

// })
// console.log(store)

//filter

let filterData = array.filter((item) => {
  return item % 2 == 0;
});
console.log(filterData);

let sum = 0;
let store = array.forEach((item) => {
  sum += item;
});

console.log(sum);

let data = [12, 88, 95, 4, 13, 45, 77, 56, 77, 89, 98];
/* for (let i = 0; i < data.length; i++) {
  if (data[i] % 2 == 1) {
    console.log(data[i]);
  }
}
 */

for (let i = data.length - 1; i >= 0; i--) {
  console.log(data[i]);
}

let result2 = array.indexOf(99);
console.log(result2);

let result3 = array.findIndex((item) => item > 55);
console.log(result3);

let string = "javascript";

let result5 = string.includes("avaj");
console.log(result5);
let result4 = array.includes(43);
console.log(result4);

let array2 = [12, 4, 5, 6, 8, 7, 28, 78, 88];

let result6 = array2.every((item) => item > 12);

console.log(result6);

let result7 = array.some((item) => item > 155);
console.log(result7);
