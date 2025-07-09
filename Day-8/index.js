function action() {
  console.log("Hello World");
}
action();

// Given an two varibles print addition of them.
let a = 100;
let b = 40;

function AdditionOfTwoVaribles() {
  console.log(a - b);
}
AdditionOfTwoVaribles();

function SubtractionOfTwoVarible() {
  console.log(a - b);
}
SubtractionOfTwoVarible();

// Given an two varibles print addition of them by using parameters
let p = 20;
let q = 40;

function AdditionOfTwoVarible(number1, number2) {
  console.log(number1 + number2);
}
AdditionOfTwoVarible(p, q);
AdditionOfTwoVarible(50, 100);

// Given numbers write two functions for subtraction and additions

function addition(num1, num2, num3, num4) {
  console.log(num1 + num2 + num3 + num4);
}

function subtraction(num1, num2, num3, num4) {
  console.log(num1 - num2 - num3 - num4);
}

addition(50, 23, 100, 25);
subtraction(76, 45, 234, 458);

function AdditionOfTwoVarible(a, b) {
  console.log(a + b);
  return a + b; // return -  function stop
}
console.log(AdditionOfTwoVarible(100, 200));
console.log(AdditionOfTwoVarible(20, 40));

// Array parameter pass question
var fruits = ["Apple", "Pineapple", "Strawberry", "Jackfruit", "Cherry"];
var userSearch = "Jackfruit";

function getTypedSuggestions(fruits, userSearch) {
  let filteredData = fruits.filter((ele) => ele == userSearch);
  return filteredData;
}

console.log(getTypedSuggestions(fruits, userSearch));
