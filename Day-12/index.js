// // LocalStorage
//   localStorage.setItem("token", "sdsdfsdfsdfjijwre");
//   localStorage.getItem("token");
//   localStorage.removeItem("token");

// // sessionStorage
//  sessionStorage.setItem("token","asfjdkjasndkjadjakjssdskjasba");
//  sessionStorage.getItem("token");
//  sessionStorage.removeItem("token");

// traiangle star pattern
// *
// **
// ***
// ****
// *****
let range = 5;
for (let i = 1; i <= range; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}

// Iteration 1 : i=1 (i <= range: T) -> j=1 (j <= i: T) -> j=2 (j <= i: F) | line 1: "* "

// Iteration 2 : i=2 (i <= range: T) -> j=1 (j <= i: T) -> j=2 (j <= i: T) -> j=3 (j <= i: F) | line 2: "* * "
// Iteration 3 : i=3 (i <= range: T) -> j=1 (j <= i: T) -> j=2 (j <= i: T) -> j=3 (j <= i: T) -> j=4 (j <= i: F) | line 3: "* * * "

// Iteration 4 : i=4 (i <= range: T) -> j=1 (j <= i: T) -> j=2 (j <= i: T) -> j=3 (j <= i: T) -> j=4 (j <= i: T) -> j=5 (j <= i: F) | line 4: "* * * * "

// Iteration 5 : i=5 (i <= range: T) -> j=1 (j <= i: T) -> j=2 (j <= i: T) -> j=3 (j <= i: T) -> j=4 (j <= i: T) -> j=5 (j <= i: T) -> j=6 (j <= i: F) | line 5: "* * * * * "
// Iteration 6 : i=6 (i <= range: F) -> loop ends with condition




// Pyramid pattern
//   *
//  ***
// *****

let n = 3;

for (let i = 1; i <= n; i++) {
  let line = "";

  for (let space = 1; space <= n - i; space++) {
    line += " ";
  }

  for (let star = 1; star <= 2 * i - 1; star++) {
    line += "*";
  }

  console.log(line);
}

// Iteration 1 : i=1 (i <= n: T)
// -> space=1 (T) -> space=2 (T) -> space=3 (F)
// -> star=1 (T) -> star=2 (F) -> line 1: "  *"

// Iteration 2 : i=2 (i <= n: T)
// -> space=1 (T) -> space=2 (F)
// -> star=1 (T) -> star=2 (T) -> star=3 (T) -> star=4 (F) -> line 2: " ***"

// Iteration 3 : i=3 (i <= n: T)
// -> space=1 (F)
// -> star=1 (T) -> star=2 (T) -> star=3 (T) -> star=4 (T) -> star=5 (T) -> star=6 (F) -> line 3: "*****"

// Iteration 4 : i=4 (i <= n: F) -> loop ends




// 2
// 2 4
// 2 4 6
// 2 4 6 8


let r = 4;
for (let i = 1; i <= r; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += j * 2 + " ";
  }
  console.log(line);
}

// Iteration 1 : i=1 (i <= n: T) -> j=1 (j <= i: T) -> j=2 (F) -> line 1: "2"

// Iteration 2 : i=2 (T) -> j=1 (T) -> j=2 (T) -> j=3 (F) -> line 2: "2 4"

// Iteration 3 : i=3 (T) -> j=1 (T) -> j=2 (T) -> j=3 (T) -> j=4 (F) => line 3: "2 4 6"

// Iteration 4 : i=4 (T) -> j=1 (T) -> j=2 (T) -> j=3 (T) -> j=4 (T) -> j=5 (F) => line 4: "2 4 6 8"

// Iteration 5 : i=5 (F) -> loop ends
