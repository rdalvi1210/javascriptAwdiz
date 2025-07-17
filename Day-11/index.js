// 1. Ternary Operator

let age1 = 20;

if (age1 >= 18) {
  console.log("Yes you can vote.");
} else {
  console.log("No you cant vote.");
}

let age3 = 100;

const canVote = age3 >= 18 ? "Yes" : "No";
console.log(canVote, "canVote");

const strictCheckVote = age3 >= 18 ? (age3 <= 80 ? "Yes" : "Over aged") : "No";
console.log(strictCheckVote, "strictCheckVote");

// 2. Template Literals

var userName = "Ram";
var userSurname = "Dalvi";

let greetingMessage = `Hello ${userName} ${userSurname}, Welcome to Institute.`;
console.log(greetingMessage, "greetingMessage");

// 3. Destructuring

let usersAge = [23, 25, 26];
const [firstValue, secondValue, thirdValue] = usersAge;
console.log(firstValue, secondValue, thirdValue, "1,2,3");

const userData = { name: "Awdiz", age: 10, surname: "Institute" };
const { name, age, surname } = userData;
console.log(name, age, surname, "name , age");

// 4. Callback Function

function greet(name, callback) {
  console.log("Welcome ", name);
  callback();
}

function afterGreetingUserAskPermission() {
  console.log("Please accept privacy policy.");
}

greet("Awdiz", afterGreetingUserAskPermission);

//  Voting Example callback function
let userAge = 15;
function canVote1(age, yesFunction, noFunction) {
  if (age >= 18) {
    yesFunction();
  } else {
    noFunction();
  }
}

const successMessage = () => {
  console.log("You can vote.");
};

function failorMessage() {
  console.log("You cant vote.");
}

canVote1(userAge, successMessage, failorMessage);

// 5 . Promise

let age2 = 15;
const canVote2 = (age) => {
  return new Promise((resolve, reject) => {
    if (age > 18) {
      resolve("Yes can vote.");
    } else {
      reject("No cant vote.");
    }
  });
};

canVote2(age2)
  .then((response) => {
    console.log(response, "response");
  })
  .catch((error) => {
    console.log(error, "error");
  });
