"use strict";

let lastDigitToTheFront = function (n) {
  if (n % 10 === 0) {
    console.log(n);
  } else if (n / 10 < 1) {
    console.log(n);
  } else if (n % 10 != 0) {
    let lastDigit = n % 10;
    let numberToBeChanged = (n - lastDigit) / 10;
    let finalNumber = +(lastDigit + (numberToBeChanged + ""));
    console.log(finalNumber);
  }
};

lastDigitToTheFront(367);
lastDigitToTheFront(1002);
lastDigitToTheFront(250);
lastDigitToTheFront(8);
