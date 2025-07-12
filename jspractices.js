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

//fibonacci series
// let n1 = 0;
// let n2 = 1;

// console.log(n1); // 1
// console.log(n2); // 1

// for (i =2; i < 10; i++) {
//   var temp = n1 + n2;
//   console.log(temp);
//   n1 = n2;
//   n2 = temp;
// }

// let num1 = 0;
// let num2 = 1;
// console.log(num1);
// console.log(num2);
// let temp = num1 + num2;

// while (num1 <= 10) {
//   console.log(temp);
//   num1 = num2;
//   num2 = temp;
//   temp = num1 + num2;
// }

// const getfibonacci = (limit) => {
//   let n1 = 0;
//   let n2 = 1;
//   console.log(n1);
//   console.log(n2);
//   let next = n1 + n2;

//   while (next <= limit) {
//     console.log(next);
//     n1 = n2;
//     n2 = next;
//     next = n1 + n2;
//   }
// };
// getfibonacci(12);

// const array = [1, 2, 3, 4];
// let lastElement = array[array.length - 1];

// for (i = array.length - 1; i >= 0; i--) {
//   array[i] = array[i - 1];
// }
// array[0] = lastElement;

// console.log(array);

// let num = 121;
// let reversed = 0;
// while (num > 0) {
//   let lastDigit = num % 10;
//   reversed = reversed * 10 + lastDigit;
//   num = (num - lastDigit) / 10;
// }
// // console.log(reversed)

// console.log(num === reversed);

// const array = [6, 5, 4, 3, 2];

// for (i = 0; i < array.length-1; i++) {
//   for (j = 0; j < array.length - 1 - i; j++) {
//     if (array[j] > array[j + 1]) {
//       var temp = array[j];
//       array[j] = array[j + 1];
//       array[j + 1] = temp;
//     }
//   }
// }

// console.log(array)

// var num = 5;
// let fact = 1;

// while (num > 1) {
//     fact = fact * num;
//     num--;
// }
// console.log(fact)

// let num = 5;
// let fact = 1;

// for (i = 1; i <= 5; i++)
// {
//     fact = fact * i;
// }
// console.log(fact)


// ================== armstrong ================

// let num = 9475;

// let count = 0;
// let temp = num;
// while (temp > 0) {
//   let digit = temp % 10;
//   temp = (temp - digit) / 10;
//   count++;
// }

// temp = num;
// let sum = 0;
// while (temp > 0) {
//   let digit = temp % 10;
//   let pow = 1;
//   for (i = 1; i <= count; i++) {
//     pow *= digit;
//     }
//     sum += pow;
//     temp = (temp - digit) / 10;
// }
// console.log(num==sum)
