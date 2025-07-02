//do While

let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 50);

// break

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

let fruits = ["apple", "banana", "mango", "grape"];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "mango") {
    console.log("Found mango!");
    break;
  }
}

//continue

for (let i = 1; i <= 7; i++) {
  if (i === 5) {
    continue; // skip 5
  }
  console.log(i);
}

for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

//push

var fruits1 = ["apple", "banana"];
fruits.push("mango");
console.log(fruits1); // ["apple", "banana", "mango"]

// pop

var fruits1 = ["apple", "banana", "mango"];
fruits.pop();
console.log(fruits1);

// slice
let numbers = [10, 20, 30, 40, 50];
let part = numbers.slice(1, 4);
console.log(part);
console.log(numbers);

//splice
let colors = ["red", "green", "blue", "yellow"];
colors.splice(1, 2); // remove 2 items from index 1
console.log(colors); // ["red", "yellow"]
