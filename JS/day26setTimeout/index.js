// // SETTIMEOUT Modal show web page load setInterval, clearinterval Automatic slider

// //syncrounous
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

// // asyncrounous
// setTimeout(() => {
//   console.log(5);
// }, 1000);
// console.log(11);
let count = 1;
let id = setInterval(() => {
  console.log("hello", ++count);

  if (count == 10) {
    clearInterval(id);
  }
}, 2000);
