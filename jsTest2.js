// 1. Reverse an array
// Reverse the elements of an array manually (without using .reverse()).
// Input 1: [1, 2, 3]
// Output 1: [3, 2, 1]
// Input 2: [10, 20, 30]
// Output 2: [30, 20, 10]

const reverseArray = (array) => {
    let reversedArray = []
    let j = 0;
    for (i = array.length-1; i >= 0; i--)
    {
        reversedArray[j] = array[i];
        j++;
    }
    return reversedArray;
}
console.log(reverseArray([1, 2, 3, 4]))

// 2. Find second largest number in an array
// Return the second largest unique number from an array.
// Input 1: [10, 5, 20, 8]
// Output 1: 10
// Input 2: [1, 2, 2, 3]
// Output 2: 2

const secondLargest = (array) => {
  let largestNumber = -Infinity;
  let secondLargest = -Infinity;

  for (i = 0; i < array.length; i++) {
    if (array[i] > largestNumber) {
      secondLargest = largestNumber;
      largestNumber = array[i];
    } else if (array[i] > secondLargest && array[i] < largestNumber) {
      secondLargest = array[i];
    }
  }
  return secondLargest;
};
console.log(secondLargest([10, 22, 5, 20, 8]));

// 3. Remove duplicates from array
// Return a new array with all duplicates removed (no Set).
// Input 1: [1, 2, 2, 3]
// Output 1: [1, 2, 3]
// Input 2: [5, 5, 5, 1]
// Output 2: [5, 1]

let arr15 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let removed = [];

for (let i = 0; i < arr15.length; i++) {
  let flag = false;
  for (let j = 0; j < removed.length; j++) {
    if (arr15[i] === removed[j]) {
      flag = true;
      break;
    }
  }
  if (!flag) {
    removed.push(arr15[i]);
  }
}
console.log(removed);

// 4. Check if two arrays are equal
// Compare if two arrays have same elements in same order.
// Input 1: [1, 2, 3], [1, 2, 3]
// Output 1: true
// Input 2: [1, 2], [2, 1]
// Output 2: false

const checkTwoArrays = (array1, array2) => {
  for (i = 0; i < array1.length; i++) {

    for (j = 0; j < array2.length; j++) {
      if ((array1[i] == array2[j])) {
          return true;
      } else {
          return false;
      }
    }
  }
};
console.log(checkTwoArrays([1, 2, 3], [1, 2, 3]))

// 5. Rotate array k times to the right
// Rotate array elements k times to the right.
// Input 1: [1, 2, 3, 4], k = 2
// Output 1: [3, 4, 1, 2]
// Input 2: [10, 20, 30], k = 1
// Output 2: [30, 10, 20]

const rotateArray = () => {
    let lastSecondElement = array.length - 2;
    console.log(lastSecondElement)
    // for (i = array.length - 1; i >= 0; i--)
    // {

    // }
};
console.log(rotateArray([1, 2, 3, 4]));

// 6. Count vowels in a string
// Count number of vowels (a, e, i, o, u) in a given string.
// Input 1: "hello"
// Output 1: 2
// Input 2: "JAVASCRIPT"
// Output 2: 3

const countVowels = (word) => {
  let countVowels = 0;
  for (i = 0; i < word.length; i++) {
    if (
      word[i] == "a" ||
      word[i] == "A" ||
      word[i] == "E" ||
      word[i] == "e" ||
      word[i] == "I" ||
      word[i] == "i" ||
      word[i] == "o" ||
      word[i] == "O" ||
      word[i] == "u" ||
      word[i] == "U"
    ) {
      countVowels++;
    }
  }
  return countVowels;
};
console.log(countVowels("hello"));

// 7. Print triangle pattern using loops
// Write a loop to print * pattern based on number of rows.

const printTriangle = (n) => {
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      console.log("*");
    }
    console.log("\n");
  }
};
console.log(printTriangle(3));

// 8. Factorial using recursion
// Calculate factorial of a number using recursion

const recurFactorial = (n) => {
  if (n == 1) return 1;

  return n * recurFactorial(n - 1);
};
console.log(recurFactorial(5))

// 9. Check if number is prime
// Return true if number is prime (only divisible by 1 and itself).
// Input 1: 7
// Output 1: true
// Input 2: 9
// Output 2: false

const checkprimeNumber = (n) => {
  for (i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

console.log(checkprimeNumber(12));

// 10. Find Fibonacci number at Nth position
// Return the Nth Fibonacci number (0-indexed).

const findFibonacci = (n) => {
  let newArray = [];
  let num1 = 0;
  let num2 = 1;
  let temp = num1 + num2;
  while (temp <= 50) {
    num1 = num2;
    num2 = temp;
    temp = num1 + num2;

    newArray.push(temp);
  }
  return newArray[n];
};
console.log(findFibonacci(5));


// 11. Count frequency of array elements
// Return an object with count of each element in array.
// Input 1: [1, 2, 2, 3]
// Output 1: {1:1, 2:2, 3:1}
// Input 2: [4, 4, 4]
// Output 2: {4:3}

const checkFrequency = (array) => {
  let obj = {};
  for (i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      obj[array[i]]++;
    } else {
      obj[array[i]] = 1;
    }
  }
  return obj;
};
console.log(checkFrequency([1, 2, 2, 3]));

// 13. Merge two objects
// Combine two objects into one.
// Input 1: {a:1}, {b:2}
// Output 1: {a:1, b:2}
// Input 2: {x:10}, {x:20, y:30}
// Output 2: {x:20, y:30}

const mergeTwoObject = (obj1, obj2) => {
  let newObj = { ...obj1, ...obj2 };
  return newObj;
};
console.log(mergeTwoObject({ a: 1 }, { b: 2 }));


// 16. Check if string is palindrome
// Return true if string reads same forward and backward.
// Input 1: "madam"
// Output 1: true
// Input 2: "hello"
// Output 2: false

const checkPalindrome = (word) => {
  let reversed = "";
  for (i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
    if (word === reversed) {
        return true;
    }
    return false;
};
console.log(checkPalindrome("madam"));

// 18. Reverse a string manually
// Reverse a string without using .reverse().
// Input 1: "hello"
// Output 1: "olleh"
// Input 2: "JS"
// Output 2: "SJ"

const reversestring = (word) => {
    let reversed = ""
    for (i = word.length - 1; i >= 0; i--)
    {
        reversed += word[i];
    }
    return reversed;
}
console.log(reversestring("hello"));


// 19. Flatten nested array
// Convert a nested array into a single flat array.
// Input 1: [1, [2, [3]], 4]
// Output 1: [1, 2, 3, 4]
// Input 2: [[1], [2, 3]]
// Output 2: [1, 2, 3]

const flatArray = (array) => {
  let flattened = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array.length < 2) {
        flattened.push(array[i]);
      }
      flattened.push(array[i][j]);
    }
  }
  return flattened;
};
console.log(flatArray([[1, 3],3, [2, 3]]));


// 20. Group array of objects by a property
