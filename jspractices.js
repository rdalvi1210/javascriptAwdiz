// const secondLargestNumber = (array) => {
//   let largestNum = -Infinity;
//   let secondLargestNumber = -Infinity;
//   for (i = 0; i < array.length; i++) {
//     if (array[i] > largestNum) {
//       secondLargestNumber = largestNum;
//       largestNum = array[i];
//     } else if (array[i] > secondLargestNumber && array[i] < largestNum) {
//       secondLargestNumber = array[i];
//     }
//     }
//     return secondLargestNumber;
// };
// console.log(secondLargestNumber([-2, -1, -1.5, 100]));

// const thirdLargestNum = (array) => {
//   let largestNum = -Infinity;
//   let secondLargestNumber = -Infinity;
//   let thirdLargestNum = -Infinity;

//   for (i = 0; i < array.length; i++) {
//     if (array[i] > largestNum) {
//       thirdLargestNum = secondLargestNumber;
//       secondLargestNumber = largestNum;
//       largestNum = array[i];
//     } else if (array[i] > secondLargestNumber && array[i] < largestNum) {
//       thirdLargestNum = secondLargestNumber;
//       secondLargestNumber = array[i];
//     } else if (array[i] > thirdLargestNum && array[i] < secondLargestNumber) {
//       thirdLargestNum = array[i];
//     }
//   }
//   return thirdLargestNum;
// };
// console.log(thirdLargestNum([-4, -1, -2, -13, 100]));

// const secondSmallestNum = (array) => {
//   let smallestNum = Infinity;
//   let secondSmallestNum = Infinity;
//   for (i = 0; i < array.length; i++) {
//     if (array[i] < smallestNum) {
//       secondSmallestNum = smallestNum;
//       smallestNum = array[i];
//     } else if (array[i] < secondSmallestNum && array[i] > smallestNum) {
//         secondSmallestNum = array[i];
//     }
//     }
//     return secondSmallestNum;
// };
// console.log(secondSmallestNum([-6, 2, 3, -5]));

// var array = [5, 1, 4, 2, 3, 4, 5];

// const sortingArray = (array) => {
//   for (i = 0; i < array.length - 1; i++) {
//     for (j = 0; j < array.length - 1 - i; j++) {
//       if (array[j] > array[j + 1]) {
//         var temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   console.log(array);
// };
// sortingArray(array);

// const flatenArray = (array) => {
//   let newArray = [];
//   for (i = 0; i < array.length; i++) {
//     if (typeof array[i] === "object") {
//       for (var j = 0; j < array[i].length; j++) {
//         newArray[newArray.length] = array[i][j];
//       }
//     } else {
//       newArray.push(array[i]);
//     }
//   }
//   console.log(newArray);
// };
// flatenArray([1, 2, [3, 4, 6], 5]);

// const isPrime = (num) => {
//   if (num <= 1) return false;
//   for (i = 2; i * i <= num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(isPrime(5));

// const primeNumbers = () => {
//   for (i = 10; i < 50; i++) {
//     var isPrime = true;

//     for (j = 2; j * j <= i; j++) {
//       if (i % j == 0) {
//         isPrime = false;
//       }
//     }
//     if (isPrime) {
//       console.log(i);
//     }
//   }
// };
// primeNumbers();

// const rightShiftArray = (array) => {
//   let lastElement = array[array.length - 1];
//   for (i = array.length - 1; i > 0; i--) {
//     array[i] = array[i - 1];
//   }
//   array[0] = lastElement;
//   console.log(array);
// };

// rightShiftArray([1, 2, 3, 4]);

