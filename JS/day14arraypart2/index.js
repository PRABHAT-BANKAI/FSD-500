// Array With Functions (map ,filter, foreach, indexof, findindex ,includes, every, some)

//map 

let array = [12,43,77,56,99,1];

//map
// 1step new array create
// update newarray with some result 
// return new array with updated array 

// map is a high order function (HOF) is take a function as an argument 
let store = array.map((item)=>{

  return item *2

})
console.log(store)