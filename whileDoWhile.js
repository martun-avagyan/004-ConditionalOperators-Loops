"use strict";
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < a.length; i++) {
  console.log("for", i, a[i]);
}

let j = 0;
while (j < a.length) {
  console.log("for", i, a[j]);
  j++;
}

let h = 0;
do {
  console.log("for", h, a[h]);
  h++;
} while (h < a.length);
