"use strict";

let reversingFirstAndLastDigits = function (n) {
  let numberToString = n + "";
  let firstDigit = numberToString[0];
  let lastDigit = numberToString[numberToString.length - 1];
  let firstDigitRemoved = numberToString.substring(1);
  let firstAndLastDigitRemoved = firstDigitRemoved.substring(
    0,
    firstAndLastDigitRemoved.length - 1
  );
  let finalString = lastDigit + firstAndLastDigitRemoved + firstDigit;
  console.log(finalString);
};

reversingFirstAndLastDigits(45);
reversingFirstAndLastDigits(123);
