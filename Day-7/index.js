//1. Find the second highest number in an array without sorting it.

var array = [-1, -5, -8];
var lastnum = -Infinity;
var secondLargest = -Infinity;

for (let i = 0; i < array.length; i++) {
  if (array[i] > lastnum) {
    secondLargest = lastnum;
    lastnum = array[i];
  }
  console.log("secondLargest", secondLargest);

  if (array[i] > secondLargest && array[i] < lastnum) {
    secondLargest = array[i];
  }
}
console.log(secondLargest);

// 2. Character Frequency in a String

let str = "hello world";

for (let i = 0; i < str.length; i++) {
  let count = 0;
  for (let j = i; j < str.length; j++) {
    if (str[i] == str[j]) {
      count++;
    }
  }
  console.log(str[i] + " : " + count);
}

//3. Reverse only words in an array of strings.

var array = ["hello", "world"];
let newArray = [];

for (let i = 0; i < array.length; i++) {
  let reversedWord = "";
  for (let j = array[i].length - 1; j >= 0; j--) {
    reversedWord += array[i][j];
  }
  newArray[i] = reversedWord;
}
console.log(newArray);

//4. Check even or odd using map.

var array = [1, 2, 3, 4];

let result = array.map((item) => item % 2 == 0 ? "even" : "odd");

console.log(result)

//5. Flatten a nested array (1 level deep).

let arr4 = [1, 2, [3, 4], 5, 7, 9];
let flatArr = [];

for (let i = 0; i < arr4.length; i++) {
  if (arr4[i].length >= 1) {
    for (let j = 0; j < arr4[i].length; j++) {
      flatArr.push(arr4[i][j]);
    }
  } else {
    flatArr.push(arr4[i]);
  }
}

console.log(flatArr);

//6. Print Prime no between 10 and 50

for (let i = 10; i < 50; i++) {
    let isPrime = true;

    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log("the prime number is : " + i);
    }
  }

// 7.Filter names start with vowels

let Input = ["Alice", "Bob", "Eve", "Uma", "Charlie"];

for (let i = 0; i < Input.length; i++) {
  let firstChar = Input[i].charAt(0).toLowerCase();

  if (
    firstChar === "a" ||
    firstChar === "e" ||
    firstChar === "i" ||
    firstChar === "o" ||
    firstChar === "u"
  ) {
    console.log("Yes it starts with vowel: " + Input[i]);
  }
}

// 8.Rotate the Array by 1 to the Right

let arr5 = [1, 2, 3, 4];
let rotateArr = [];

for (let i = 0; i < arr5.length; i++) {
  if (i < arr5.length - 1) {
    rotateArr[i + 1] = arr5[i];
  } else {
    rotateArr[0] = arr5[i];
  }
}

console.log(rotateArr);

//9.Check if all items are greater than 10

let arr6 = [12, 13, 14, 15, 6];
result = [];

arr6.forEach((item) => {
  if (item > 10) {
    result.push(true);
  } else {
    result.push(false);
  }
});
console.log(result);

//10.Filter numbers divisible by 3 and 5

let arr7 = [10, 15, 30, 20, 45];

let filtered = arr7.filter((item) => {
  if (item % 3 == 0 && item % 5 == 0) {
    return item;
  }
});
console.log(filtered);

//11.Print Fibonacci upto 15

let a = 0;
let b = 1;
let sum = 0;
console.log(a);
console.log(b);

for (let i = 0; i <= 15; i++) {
  sum = a + b;
  a = b;
  b = sum;
  console.log(sum);
}

//12.Occurrences of value in Array

let arr8 = [1, 2, 1, 3, 1, 4];

for (let i = 0; i < arr8.length; i++) {
  let count = 0;
  for (let j = i; j < arr8.length; j++) {
    if (arr8[i] == arr8[j]) {
      count = count + 1;
    }
  }
  console.log(arr8[i] + " Appears : " + count + " times");
}

//13.Sum of Even numbers using reduce

let arr9 = [1, 2, 3, 4, 5, 6];

let sum2 = arr9.reduce((acc, sum) => {
  sum = sum + acc;
  return sum;
});

console.log(sum2);

//14.Check if String is palindrome

let str1 = "madam";
let rev2 = "";

for (let i = 0; i < str1.length; i++) {
  rev2 = rev2 + str1.charAt(str1.length - 1 - i);
}

if ((rev2 = str1)) {
  console.log("Yes a palindrome : " + str1);
}

//15. Return grade based on marks using switch

let marks = 85;
let grade = "";

switch (true) {
  case marks >= 90:
    grade = "A";
    break;
  case marks >= 80:
    grade = "B";
    break;
  case marks >= 70:
    grade = "C";
    break;
  case marks >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}
console.log("Grade is: " + grade);



//17. Remove duplicates from array without Set

let arr10 = [1, 2, 2, 3, 4, 1];
let uniqueArr = [];

for (let i = 0; i < arr10.length; i++) {
  for (let j = i + 1; j < arr10.length; j++) {
    if (arr10[i] == arr10[j]) {
      break;
    } else {
      uniqueArr.push(arr10[i]);
      break;
    }
  }
}

console.log("uniqueArr : " + uniqueArr);

//18.Slice first 3 elements of array

let arr11 = [10, 20, 30, 40, 50];

let sliced = arr11.slice(0, 3);

console.log("sliced : " + sliced);

//19. Find intersection of two arrays

let arr12 = [1, 2, 3, 2, 2, 2, 3];
let arr13 = [2, 3, 4];
let intersection = [];
let finalIntersection = [];

for (let i = 0; i < arr12.length; i++) {
  for (let j = 0; j < arr13.length; j++) {
    if (arr12[i] == arr13[j]) {
      intersection[intersection.length] = arr12[i];
    }
  }
}

for (let i = 0; i < intersection.length; i++) {
  let found = false;
  for (let j = 0; j < finalIntersection.length; j++) {
    if (intersection[i] == finalIntersection[j]) {
      found = true;
      break;
    }
  }
  if (!found) {
    finalIntersection[finalIntersection.length] = intersection[i]; // assignment, no push
  }
}

console.log("Intersection : ", finalIntersection);

//20.Reverse array using while loop (into new array)

let arr14 = [1, 2, 3, 4];
let rev3 = [];
let count2 = arr14.length - 1;

while (count2 >= 0) {
  rev3.push(arr14[count2]);
  count2--;
}

console.log("The reverse : " + rev3);

//21. Check if all elements are positive using flag

let arr15 = [1, 4, 6, 9];
let allPositive = true;

for (let i = 0; i < arr15.length; i++) {
  if (arr15[i] < 0) {
    allPositive = false;
    break;
  }
}
console.log(allPositive);

//22. Check if string has both uppercase and lowercase letters

let str2 = "HelloWorld";
let hasUpper = false;
let hasLower = false;

for (let i = 0; i < str2.length; i++) {
  if (str2[i] >= "A" && str2[i] <= "Z") {
    hasUpper = true;
  }
  if (str2[i] >= "a" && str2[i] <= "z") {
    hasLower = true;
  }
}

console.log(hasUpper && hasLower);

//23. Determine if a number is prime using flag

let num = 16;
let isPrime2 = true;

for (let i = 2; i * i <= num; i++) {
  if (num % i === 0) {
    isPrime2 = false;
    break;
  }
}
console.log(isPrime2);

//24. Check if array is sorted in ascending order

let arr16 = [2, 5, 8, 9];
let isSorted = true;

for (let i = 0; i < arr16.length - 1; i++) {
  if (arr16[i] > arr16[i + 1]) {
    isSorted = false;
    break;
  }
}
console.log(isSorted);

//25. Check if a word has repeating characters

let word = "coding";
let charMap = {};
let hasRepeat = false;

for (let i = 0; i < word.length; i++) {
  if (charMap[word[i]]) {
    hasRepeat = true;
    break;
  } else {
    charMap[word[i]] = true;
  }
}
console.log(hasRepeat);
