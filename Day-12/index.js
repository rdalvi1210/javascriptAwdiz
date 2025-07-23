// const localStorage1 = () => {
//   localStorage.setItem("token", "sdsdfsdfsdfjijwre");

//   localStorage.getItem("token");

//   //   localStorage.removeItem("token");
// };
// localStorage1();

// // sessionStorage

// const sessionStorage1 = () => {
//   sessionStorage.setItem("token", "asfjdkjasndkjadjakjssdskjasba");

//   sessionStorage.getItem("token");

//   sessionStorage.removeItem("token");
// };
// sessionStorage1();

// traiangle star pattern

const triangleStarPattern = () => {
  let range = 5;
  for (let i = 1; i <= range; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "* ";
    }
    console.log(pattern);
  }
};
triangleStarPattern();
// Iteration 1 : i=1 (i <= range: T) -> j=1 (j <= i: T) -> j=2 (j <= i: F) | line 1: "* "
// Iteration 2 : i=2 (i <= range: T) -> j=1 (j <= i: T) -> j=2 (j <= i: T) -> j=3 (j <= i: F) | line 2: "* * "
// Iteration 3 : i=3 (i <= range: T) -> j=1 (j <= i: T) -> j=2 (j <= i: T) -> j=3 (j <= i: T) -> j=4 (j <= i: F) | line 3: "* * * "
// Iteration 4 : i=4 (i <= range: T) -> j=1 (j <= i: T) -> j=2 (j <= i: T) -> j=3 (j <= i: T) -> j=4 (j <= i: T) -> j=5 (j <= i: F) | line 4: "* * * * "
// Iteration 5 : i=5 (i <= range: T) -> j=1 (j <= i: T) -> j=2 (j <= i: T) -> j=3 (j <= i: T) -> j=4 (j <= i: T) -> j=5 (j <= i: T) -> j=6 (j <= i: F) | line 5: "* * * * * "
// Iteration 6 : i=6 (i <= range: F) -> loop ends with condition
