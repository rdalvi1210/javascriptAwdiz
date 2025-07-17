// let a = 10;

// function greet() {
//   let a = 20;
//   console.log(a);
// }
// console.log(a); // 10
// // greet(); // 20

// var numbers = [100, 100, 2, 3, 4, 5, 6, 1, 2, 3, 4, 2, 100, 100];
// hint - object
// 1 - 2;
// 2 - 3;
// 3 - 2;
// 4 - 2;
// 5 - 1;
// 6 - 1;
// output - 2;

// function maxNumberCount(numbers) {
//   var pairs = {};
//   for (var i = 0; i < numbers.length; i++) {
//     // console.log(numbers[i]);
//     if (pairs[numbers[i]]) {
//       pairs[numbers[i]]++;
//     } else {
//       pairs[numbers[i]] = 1;
//     }
//   }
//   console.log(pairs, "pairs");

//   let max = 0;
//   let value = null;

//   for (let key in pairs) {
//     console.log(key, pairs[key]);
//     if (pairs[key] > max) {
//       value = key;
//       max = pairs[key];
//       console.log(max, value, "max, value");
//     }
//   }
//   console.log(value);
// }

// maxNumberCount(numbers);

// setTimeout( , 1000) code will get execute after 1 sec

// setInterval( , 1000 ) code will get exectute after EVERY sec

// clearInterval

// setTimeout(() => {
//   console.log("Hello");
// }, 5000);

// // callback function
// //  - a function who pass as parameter
// var counter = 1;
// const myid = setInterval(() => {
//   console.log(counter, myid);
//   if (counter == 5) {
//     clearInterval(myid);
//   } else {
//     counter++;
//   }
// }, 2000);

// JS  - javascript
// JSON - javascript object notation

// JS => JSON
// JSON => JS

// { name : "Awdiz" } = JS
// { "name" : "Awdiz" } = JSON

// var myData = { name: "Awdiz" };
// console.log(myData);

// var stringifyData = JSON.stringify(myData);
// console.log(stringifyData,"stringifyData")

// console.log(JSON.parse(stringifyData));

function timeout() {
  let counter = 0;
  let time = setInterval(() => {
    counter++;
    if (counter <= 5) {
      console.log(counter);
    } else {
      clearInterval(time);
    }
  }, 2000);
}

timeout();
