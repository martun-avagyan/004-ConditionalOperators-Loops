"use strict";

let sortingFunction = function (firstNumber, secondNumber, thirdNumber) {
  if (
    firstNumber > secondNumber &&
    secondNumber > thirdNumber &&
    firstNumber > thirdNumber
  ) {
    console.log(thirdNumber, secondNumber, firstNumber);
  } else if (
    firstNumber > secondNumber &&
    thirdNumber > secondNumber &&
    firstNumber > thirdNumber
  ) {
    console.log(secondNumber, thirdNumber, firstNumber);
  } else if (
    secondNumber > firstNumber &&
    firstNumber > thirdNumber &&
    secondNumber > thirdNumber
  ) {
    console.log(thirdNumber, firstNumber, secondNumber);
  } else if (
    secondNumber > thirdNumber &&
    thirdNumber > firstNumber &&
    secondNumber > thirdNumber
  ) {
    console.log(firstNumber, thirdNumber, secondNumber);
  } else if (
    thirdNumber > firstNumber &&
    firstNumber > secondNumber &&
    thirdNumber > secondNumber
  ) {
    console.log(secondNumber, firstNumber, thirdNumber);
  } else if (
    thirdNumber > secondNumber &&
    secondNumber > firstNumber &&
    thirdNumber > secondNumber
  ) {
    console.log(firstNumber, secondNumber, thirdNumber);
  } else {
    console.log("Two of the numbers are repeating!");
  }
};

sortingFunction(45, 26, 78);
sortingFunction(-26, -456, 0);
