//  Write a function that takes an array of numbers and returns how many are even and how many are odd.
//  Input 1: [2, 3, 4, 5]
//  Output 1: { even: 2, odd: 2 }
//  Input 2: [11, 14, 16, 17, 19]
//  Output 2: { even: 2, odd: 3 }

// const greet = (array) => {
//   const obj = { even: 0, odd: 0 };

//   for (i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//       obj.even++;
//     } else {
//       obj.odd++;
//     }
//   }
//   return obj;
// };
// console.log(greet([1, 2, 3, 4, 5]));

// const checkNumber = (array) => {
//   for (i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(checkNumber([1, 2, 3, -4, 5]));

// const array = [1, 2, 3, 4, 5];

// const isPositive = array.every((item) => {
//   if (item < 0) {
//     return false;
//   } else {
//     return true;
//   }
// });
// console.log(isPositive);

// function diagonalsum(array) {
//   let sum = 0;
//   const n = array.length;

//   for (let i = 0; i < n; i++) {
//     sum += array[i][i];

//     sum += array[i][n - 1 - i];
//   }

//   // If odd matrix size, subtract the center (counted twice)
//   if (n % 2 === 1) {
//     sum -= array[Math.floor(n / 2)][Math.floor(n / 2)];
//   }

//   return sum;
// }

// console.log(
//   diagonalsum([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// function reverseArray(array) {
//   let i = 0;
//   let j = array.length - 1;

//   while (i < j) {
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//     i++;
//     j--;
//   }
//   return array;
// }
// console.log(reverseArray([1, 2, 3]));
//
// for (i = 1; i <= 3; i++) {
//   let str = "";

//   for (k = 3 - i; k >= 0; k--) {
//     str = str + " ";
//   }

//   for (j = 1; j <= i * 2 - 1; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

// Count zeros and ones

// let arr = [
//   [1, 0, 1],
//   [1, 1, 0],
//   [0, 0, 1],
// ];

// let obj = { zeros: 0, ones: 0 };
// for (i = 0; i < arr.length; i++) {
//   for (j = 0; j < arr[0].length; j++) {
//     if (arr[i][j] == 0) {
//       obj.zeros += 1;
//     } else if (arr[i][j] == 1) {
//       obj.ones += 1;
//     }
//   }
// }

// console.log(obj);

// let arr = [
//   [2, 5, 7],
//   [1, 8, 3],
// ];
// let count = 0;

// for (i = 0; i < arr.length; i++) {
//   for (j = 0; j < arr[0].length; j++)
//     if (arr[i][j] > 5) {
//       count++;
//     }
// }
// console.log(count);

// function isPrime(n) {
//   let prime = true;

//   for (i = 1; i < n; i++) {
//     if (n % i == 0) {
//       prime = false;
//     }
//   }
//   if (prime) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPrime(11))

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let top = 0;
// let bottom = arr.length - 1;
// let left = 0;
// let right = arr[0].length - 1;

// while (top <= bottom && left <= right) {
//   // Traverse from Left to Right (Top Row)
//   for (let i = left; i <= right; i++) {
//     console.log(arr[top][i]);
//   }
//   top++;

//   // Traverse from Top to Bottom (Right Column)
//   for (let i = top; i <= bottom; i++) {
//     console.log(arr[i][right]);
//   }
//   right--;

//   // Traverse from Right to Left (Bottom Row)
//   if (top <= bottom) {
//     for (let i = right; i >= left; i--) {
//       console.log(arr[bottom][i]);
//     }
//     bottom--;
//   }

//   // Traverse from Bottom to Top (Left Column)
//   if (left <= right) {
//     for (let i = bottom; i >= top; i--) {
//       console.log(arr[i][left]);
//     }
//     left++;
//   }
// }

// const firstNonrepeating = (str) => {
//   let freq = {};

//   for (let char of str) {
//     freq[char] = (freq[char] || 0) + 1;
//   }
//   for (let char of str) {
//     if (freq[char] === 1) return char;
//   }

//   return freq;
// };

// console.log(firstNonrepeating("sstrrp"));

// rightshift by 2

// let arr = [1, 2, 3, 4];
// let k = 7;
// k = k % arr.length;
// rightShift(0, k - 1);
// rightShift(k, arr.length - 1);
// rightShift(0, arr.length - 1);
// console.log(arr);

// function rightShift(i, j) {
//   while (i < j) {
//     var temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }

// let arr1 = [1, 3, 5, 7];
// let arr2 = [2, 4, 6, 8, 10, 11];
// let i = k = j = 0;
// let merge = [];
// while (i < arr1.length - 1 && j < arr2.lenght - 1) {
//   if (arr1[i] > arr2[j]) {
//     merge[k] = arr2[j];
//     k++;
//     j++;
//   } else {
//     merge[k] = arr1[i];
//     k++;
//     i++;
//   }
// }

// while (i < arr1.length) {
//   merge[k] = arr1[i];
//   k++;
//   i++;
// }
// while (j < arr2.length - 1) {
//   merge[k] = arr2[j];
//   k++;
//   j++;
// }

// console.log(merge);

// let arr = [0, 1, 1, 0, 3, 0];

// let i = 0;
// let j = 0;
// while (i < arr.length) {
//   if (arr[i] == 0) {
//     if (i != j) {
//       var temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//     j++;
//   }
//   i++;
// }
// console.log(arr);
