"use strict";
let findingTheSign = function (a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    console.log("+");
  } else if (a > 0 && b > 0 && c < 0) {
    console.log("-");
  } else if (a > 0 && b < 0 && c > 0) {
    console.log("-");
  } else if (a > 0 && b < 0 && c < 0) {
    console.log("+");
  } else if (a < 0 && b > 0 && c > 0) {
    console.log("-");
  } else if (a < 0 && b > 0 && c < 0) {
    console.log("+");
  } else if (a < 0 && b < 0 && c > 0) {
    console.log("+");
  } else if (a < 0 && b < 0 && c < 0) {
    console.log("-");
  } else {
    console.log("unsigned");
  }
};

findingTheSign(-14, 5, 0);
findingTheSign(-8, 9, -6);
findingTheSign(4, 19, -2);
