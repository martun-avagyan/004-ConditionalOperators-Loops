"use strict";

let firstNumber = 0;
let secondNumber = 1;
let temp;
const fibonacciSequence = function (n) {
  if (n == 1) {
    console.log(firstNumber);
  } else if (n == 2) {
    console.log(secondNumber);
  } else {
    for (let i = 2; i < n; i++) {
      temp = firstNumber + secondNumber;
      firstNumber = secondNumber;
      secondNumber = temp;
    }
    console.log(temp);
    return temp;
  }
};

fibonacciSequence(6);
