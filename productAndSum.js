"use strict";

let productAndSum = function (n) {
  if (n === 0) {
    return console.log("Cannot Calculate");
  }
  let sum = 0;
  let product = 1;

  while (n > 0) {
    const temp = n % 10;
    sum += temp;
    product *= temp;
    n = Math.floor(n / 10);
  }
  if (product % sum === 0) {
    return console.log(`Quotient is ${product / sum}`);
  } else {
    return console.log(`Remainder is ${product % sum}`);
  }
};

productAndSum(1233);
productAndSum(5);
productAndSum(0);
productAndSum(455);
