"use strict";

let n = 125;

if (n % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

n = 35;

if (n % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

n = 20;

if (n % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

let oddEven = function (n) {
  if (n % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
};

oddEven(125);
oddEven(25);
oddEven(20);
