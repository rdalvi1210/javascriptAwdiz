var nums = [1, 2, 3];
var output = [];
for (var i = 0; i < nums.length; i++) {
  output.push(nums[i] * 5);
}

console.log(output, "output");

// Q given an array of Element, find count of even numbers

var numbers = [3, 45, 67, 33, 55, 88, 324, 575, 234, 674, 346];
let evenCount = 0;
for (let i = 0; i < numbers.length; i++) {
  //   console.log(numbers[i], i);
  if (numbers[i] % 2 == 0) {
    evenCount++;
  }
}
console.log(evenCount, "evenCount");

// Given an array check given age from end side of array if found then return index

let usersAge = [23, 32, 45, 65, 23, 56, 24, 23];
let targetAge = 24;

for (let i = usersAge.length - 1; i >= 0; i--) {
  if (targetAge == usersAge[i]) {
    console.log(i);
    break;
  }
}

//map return a new array

let numbers1 = [1, 2, 3];
let newArray = numbers1.map((number) => number * 5);

console.log(newArray, "newArray");

let students1 = ["virat", "rohit", "rahul"];
let updatedStudentsName = students1.map((student) => student + " kohli");
console.log(updatedStudentsName, "updatedStudentsName");

// foreach - to run function on each element and doesn't return new array
let students = ["virat", "rohit", "rahul"];
students.forEach((student) => greetWithName(student));

function greetWithName(name) {
  console.log("Welcome! ", name);
}

// Sum all numbers in an array forEach

const numbers2 = [1, 2, 3, 4, 5];
let total = 0;

numbers2.forEach((num) => {
  total += num;
});

console.log(total);


// fitler - its return new array of elements if element pass the condition

let numbers3 = [2, 3, 4, 5, 6];
let evenNumbers = numbers3.filter((num) => num % 2 == 0);
console.log(evenNumbers);

const words = ["pen", "notebook", "apple", "cup", "bottle"];
const longWords = words.filter((word) => word.length > 4);
console.log(longWords);
