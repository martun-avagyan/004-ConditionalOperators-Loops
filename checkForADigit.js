"use strict";

let checkForADigit = function (digit, number) {
  if ((number + "").indexOf(digit) > -1) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

checkForADigit(5, 2463);
checkForADigit(4, 6);
checkForADigit(8, 45689);
