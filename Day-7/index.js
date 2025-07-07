// Find the second highest number in an array without sorting it.
// Input: [10, 5, 20, 8, 15]
// Output: 15

// var array = [-1, -5, -8];
// var lastnum = -Infinity;
// var secondLargest = -Infinity;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] > lastnum) {
//     secondLargest = lastnum;
//     lastnum = array[i];
//   }
//   console.log("secondLargest", secondLargest);

//   if (array[i] > secondLargest && array[i] < lastnum) {
//     secondLargest = array[i];
//   }
// }
// console.log(secondLargest);

// Reverse only words in an array of strings.
// Input: ["hello", "world"]
// Output: ["olleh", "dlrow"]

// var array = ["hello", "world"];
// let newArray = [];

// for (let i = 0; i < array.length; i++) {
//   let reversedWord = "";
//   for (let j = array[i].length - 1; j >= 0; j--) {
//     reversedWord += array[i][j];
//   }
//   newArray[i] = reversedWord;
// }
// console.log(newArray);


// 4. Check even or odd using map.
// Input: [1, 2, 3, 4]
// Output: ["odd", "even", "odd", "even"]

// var array = [1, 2, 3, 4];

// let result = array.map((item) => item % 2 == 0 ? "even" : "odd");

// console.log(result)
