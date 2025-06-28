// 1. Write a program to check if a number is positive, negative, or zero using if-else.

var number = -1;
if (number == 0) {
  console.log("Number is zero");
} else if (number < 0) {
  console.log("Negative number");
} else {
  console.log("Positive number");
}

// 2. Check whether a number is even or odd using if-else.

var number = 2;
if (number % 2 == 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

// 3. Write a program that accepts age as input and prints:
// ○ "Child" if age < 13
// ○ "Teenager" if 13 ≤ age < 20
// ○ "Adult" if 20 ≤ age < 60
// ○ "Senior" if age ≥ 60

if (age < 13) {
  console.log("Child");
} else if (age >= 13 && age < 20) {
  console.log("Teenager");
} else if (age >= 20 && age < 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}

// 4. Create a program to print the grade of a student using if-else based on marks:
// ○ 90+ => A
// ○ 80–89 => B
// ○ 70–79 => C
// ○ 60–69 => D
// ○ below 60 => F

var marks = 20;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks > 80 && marks < 89) {
  console.log("Grade B");
} else if (marks > 70 && marks < 79) {
  console.log("Grade C");
} else if (marks > 60 && marks < 69) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}

// 5. Use a switch case to take a number between 1–7 and print the corresponding weekday.

var weekDay = 2;

switch (weekDay) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
}

// 6. Create a program using switch that takes a character input and prints whether it is a vowel (a, e, i, o, u) or consonant.

var vowel = "a";

switch (vowel) {
  case "a":
    console.log("It is a Vowel");
    break;
  case "e":
    console.log("It is a Vowel");
    break;
  case "i":
    console.log("It is a Vowel");
    break;
  case "o":
    console.log("It is a Vowel");
    break;
  case u:
    console.log("It is a Vowel");
    break;
  default:
    console.log("It is a constant");
    break;
}

// 7. Use if-else to check if a year is a leap year or not.

var year = 2004;

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("It is a leap year");
} else {
  console.log("It is not a leap year");
}

// 8. Use switch-case to perform basic arithmetic operations (+, -, *, /) based on the operator input.

var num1 = 2;
var num2 = 3;
var op = "+";

switch (op) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  default:
    console.log("Enter valid operator");
}

// 9. Write a program using if-else to check if a person is eligible to vote (age ≥ 18).

var age = 22;
if (age >= 18) {
  console.log("You are eligible for Voting");
} else {
  console.log("You are not eligible for voting");
}

// 10. Using if-else, check if three given sides can form a triangle or not.

var side1 = 2;
var side2 = 3;
var side3 = 4;

if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
  console.log("It's a triangle");
} else {
  console.log("Its not a triangle");
}

// Part 2: For Loop, While Loop with Conditions (10 Questions)

// 1. Print all even numbers from 1 to 50 using a for loop and if condition.

for (var i = 1; i <= 50; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// 2. Using a while loop, print numbers from 10 to 1 in reverse order.

var n = 10;

while (n >= 1) {
  console.log(n);
  n--;
}

// 3. Write a program that prints the multiplication table of a number (e.g., 7) using a forloop.

for (var i = 1; i <= 10; i++) {
  console.log(7 * i);
}

// 4. Using a for loop, print only the odd numbers from 1 to 100.

for (var i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// 5. Create a program to count how many numbers between 1 and 100 are divisible by both 3 and 5 using for and if.

var count = 0;
for (var i = 1; i < 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    count++;
  }
}
console.log(count);

//6. Print the factorial of a number using a while loop.

var num = 5;
var fact = 1;

while (num >= 1) {
  fact = fact * num;
  num--;
}
console.log(fact);

// 7.  Use a for loop to find the sum of all numbers from 1 to 100.

var sum = 0;

for (i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);

// !--8 Fizz Buzz

for (let i = 0; i < 50; i++) {
  switch (i) {
    case i % 3 == 0:
      console.log("Fizz");
      break;
    case i % 5 == 0:
      console.log("buzz");
      break;
    case i % 3 && i % 5 == 0:
      console.log("fizzbuzz");
      break;
    default:
      console.log(i);
      break;
  }
}

//!--9 fibonacci

let num6 = 0;
let num7 = 1;
let sum2 = 0;

for (let i = 0; i < 10; i++) {
  sum2 = num6 + num7;
  num6 = num7;
  num7 = sum2;

  console.log(sum2);
}

//!--10

let square = 1;

for (let i = 0; i < 10; i++) {
  square = square * i;
  square++;

  if (square < 20) {
    console.log("small");
  } else if (square > 20 && square < 50) {
    console.log("medium");
  } else {
    console.log("big");
  }
}
