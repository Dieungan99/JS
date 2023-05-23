// var promise = new Promise(function (resolve, reject) {
//     const x = 1;
//     const y = 1;
//     if (x === y) {
//         resolve();
//     } else {
//         reject();
//     }
// });
// promise.then(
//     function (value) {
//         console.log('True')
//     },
//     function (error) {
//         console.log('False')
//     }
// );


// var promise = new Promise(function (resolve, reject) {
//     const x = 1;
//     const y = 2;
//     if (x === y) {
//         resolve();
//     } else {
//         reject();
//     }
// });
// promise
//     .then(
//     function (value) {
//         console.log('True')
//     })
//     .catch(
//     function (error) {
//         console.log('False')
//     });


// async function async() {
//     return Promise.resolve("Hello");   //return "Hello";
// };
// async().then(
//     function (value) {
//         console.log(value)
//     },
//     function (error) {
//         console.log(error)
//     }
// );


// async function await() {
//     var promise = new Promise(function (resolve, reject) {
//         const x = 1;
//         const y = 1;
//         if (x === y) {
//             resolve('True');
//         } else {
//             reject('False');
//         }
//     });
//     var result = await promise;
//     console.log(result);
// };
// await();


// function increaseNumber(number) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (number < 5) {
//           resolve(number + 1);
//         } else {
//           reject("Số đã đạt giá trị tối đa.");
//         }
//       }, 1000);
//     });
//   }
  
//   let currentNumber = 0;
  
//   function increaseNumberConsistently() {
//     increaseNumber(currentNumber)
//       .then((result) => {
//         currentNumber = result;
//         console.log(currentNumber);
//         increaseNumberConsistently();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
  
//   increaseNumberConsistently();

//   async try catch


