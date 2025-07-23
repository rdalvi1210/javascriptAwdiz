// 1. closure

function outerfunction() {
  let count = 0;

  function innerFunction() {
    count++;
    console.log(count);
  }

  return innerFunction;
}

const counter = outerfunction();
console.log("innerFunction access the property outside itself : ");
counter();

// 2. inheritance

class Students {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class SchoolStudent extends Students {
  getDatafromStudentClass() {
    return this.name + " " + this.age;
  }
}

const student1 = new SchoolStudent("Ram", 21);
console.log(
  "this class extends Student class : ",
  student1.getDatafromStudentClass()
);

// 3. 2D Array

const arr0 = [
  [1, 2, 3],
  [6, 9, 8],
  [7, 4, 5],
];
let spiral = [];
let top = 0;
let bottom = arr0.length - 1;
let left = 0;
let right = arr0[0].length - 1;

while (top <= bottom && left <= right) {
  for (let i = left; i <= right; i++) {
    spiral.push(arr0[top][i]);
  }
  top++;

  for (let i = top; i <= bottom; i++) {
    spiral.push(arr0[i][right]);
  }
  right--;

  if (top <= bottom) {
    for (let i = right; i >= left; i--) {
      spiral.push(arr0[bottom][i]);
    }
    bottom--;
  }

  if (left <= right) {
    for (let i = bottom; i >= top; i--) {
      spiral.push(arr0[i][left]);
    }
    left++;
  }
}

// Z pattern
const arrz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let resultz = [];
const rowz = arrz.length;
const colz = arrz[0].length;

for (let i = 0; i < colz; i++) {
  resultz.push(arrz[0][i]);
}

for (let i = 1; i < rowz - 1; i++) {
  resultz.push(arrz[i][colz - 1 - i]);
}

for (let i = 0; i < colz; i++) {
  resultz.push(arrz[rowz - 1][i]);
}

console.log("z pattern :", resultz);

// Reverse Z pattern
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let resultReversez = [];

const row = arr.length;
const col = arr[0].length;

for (let c = 0; c < col; c++) {
  resultReversez.push(arr[row - 1][c]);
}

for (let r = row - 2; r > 0; r--) {
  resultReversez.push(arr[r][row - 1 - r]);
}

for (let c = 0; c < col; c++) {
  resultReversez.push(arr[0][c]);
}

console.log("reverzpattern :", resultReversez);

// N pattern
const arr1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const n = arr.length;
const result = [];

for (let i = n - 1; i >= 0; i--) {
  result.push(arr1[i][0]);
}

for (let i = 1; i < n - 1; i++) {
  result.push(arr1[i][i]);
}

for (let i = n - 1; i >= 0; i--) {
  result.push(arr1[i][n - 1]);
}

console.log("N pattern : ", result);

// reverse N pattern
const arr2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const n2 = arr2.length;
let result2 = [];

for (let i = n - 1; i >= 0; i--) {
  result2.push(arr2[i][n - 1]);
}

for (let i = n - 2; i > 0; i--) {
  result2.push(arr2[i][n - i - 1]);
}

for (let i = n - 1; i >= 0; i--) {
  result2.push(arr2[i][0]);
}

console.log("reverseNpattern :", result2);
