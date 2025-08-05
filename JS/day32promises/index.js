// promise is an object which is return three statement
// fullfilled
// pending
// rejected

let promise = new Promise((resolve, reject) => {
  let number = 5;
  if (number % 2 == 0) {
    resolve("even");
  } else {
    reject("odd");
  }
});

// promise
//   .then((res) => {
//     console.log(res);// resolve catch krta hai
//   })
//   .catch((err) => {
//     console.log("error", err);// reject value catch krta hai
//   });

// The async and await keywords in JavaScript provide a modern, more readable way to handle asynchronous operations, building upon the foundation of Promises. comes in es8

async function show() {
  try {
    let response = await promise;
    console.log(response,"output");
  } catch (err) {
    console.log(err,"error");
  }
}

show();
