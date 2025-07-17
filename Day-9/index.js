

// function expression

const Greeeting = function () {
  console.log("Hi");
};

Greeeting();

function Addition(num1 = 20, num2 = 30) {
  console.log(num1 + num2);
}

Addition(1, 2);

function Greeting(name = "Awdiz") {
  console.log("Hi", name);
}
Greeting("Virat");



// Arrow function

const addition = (num1, num2) => {
  console.log(num1 + num2);
};
addition(1, 2);

const addition1 = (num1, num2) => num1 + num2;
const addition2 = num1 => num1 + num1;

let a = 10;

function greet() {
  let a = 20;
  console.log(a);
}
console.log(a); // 10
greet(); // 20


var numbers = [1, 2, 3, 4, 5];

// Object  { key1 : value1 , key2 : value2, key3 : value3 }
// object is an collection of key and values


var myInfo = {
  name: "Awdiz",
  age: 10,
  students: ["Virat", "Rohit", "Rahul"],
  isOpen: true,
  courses: { courseName: "Full Stack", batchStrength: 10 },
};


var info = { name: "Awdiz",
            age: 10,
            course: { name: "Full stack", batch: 1 }
    };


console.log(info.course.name)
console.log(info.age);
console.log(info.name);

console.log(info["name"]);
console.log(info["age"]);

info.name = "Swaraj";
info["age"] = 25;

info.surname = "Jadhav";

delete info.age;
delete info.surname;
console.log(info);


const data = { name: "Awdiz", age: 10, location: "Vashi" };

for (let key in data) {
  console.log(key, "key", data[key]);
}
