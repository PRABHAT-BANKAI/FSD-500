// Array With Functions (map ,filter, foreach, indexof, findindex ,includes, every, some)

//map

let array = [12, 43, 77, 56, 99, 1, 66, 55, 33, 11, 22];

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

let data = [12, 88, 95, 4, 13,45,77,56,77,89,98];
/* for (let i = 0; i < data.length; i++) {
  if (data[i] % 2 == 1) {
    console.log(data[i]);
  }
}
 */

for(let i = data.length-1; i >= 0; i--){
  console.log(data[i]);
}