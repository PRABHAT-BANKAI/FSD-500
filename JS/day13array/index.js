// let array = [12, 4, 3, 5, 77, 8, 9, -2, -6];

// console.log(array.length);
// // console.log(array[4]);

// let max = -Infinity;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] > max) {
//     max = array[i];
//   }
//   if(array[i]%2==0){
//     console.log(`EVEN is ${array[i]}`)//"" '' `${}` template literals
//   }
// }

// console.log(max)

//
// Array With Functions(methods) Push ,Pop, shift, upshifts, Splice ,string function

let arr = [22, 44];

let length = arr.push(55); //Appends new elements to the end of an array, and returns the new length of the array.

console.log(arr, length);

let popValue = arr.pop(); //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr, arr.length, popValue);
console.log(arr);

arr.shift(); //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

console.log(arr);

arr.unshift(12); //Inserts new elements at the start of an array, and returns the new length of the array
console.log(arr);

let game = ["pubg", "csgo", "volrent", "gta6", "uncharted "];// splice changes original array directly is only method for array .

// game.splice(startingIndex,deleteCount,optional (add elements)))
game.splice(1,2,"freefire","Mortal combat","tekken")  //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

console.log(game)




// String.methods "hello world"