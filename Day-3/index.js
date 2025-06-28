
// Conditional statement
var age = 10;

if (age == 18) {
  console.log("You are eligible for learning license");
} else if (age > 18 && age <= 80) {
  console.log("You are eligible for driver");
} else {
  console.log("You are not eligible for license");
}


// switch case 
var selectedFruit = "Orange";

switch (selectedFruit) {
  case "Apple":
    console.log("You selected Apple.");
    break;
  case "Banana":
    console.log("You selected Banana.");
    break;
  case "Orange":
    console.log("You selected Orange.");
    break;
  case "Mango":
    console.log("You selected Mango.");
    break;
  default:
    console.log("Selected fruit is not available.");
}
