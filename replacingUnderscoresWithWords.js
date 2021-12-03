"use strict";

const replacingUnderscoresWithWords = function (sentence, ...wordsArr) {
  let sentenceArr = sentence.split("");
  let wordsArrIndex = 0;
  for (let i = 0; i < sentenceArr.length; i++) {
    if (sentenceArr[i] === "_") {
      sentenceArr[i] = wordsArr[wordsArrIndex];
      wordsArrIndex++;
      if (sentenceArr[i + 1] === "_") {
        sentenceArr[i] += " ";
      }
    }
  }
  console.log(sentenceArr.join(""));
};
replacingUnderscoresWithWords("_, we have a _.", "Houston", "problem");
replacingUnderscoresWithWords(
  "If at _ you don`t _, try, try _.",
  "first",
  "succeed",
  "again"
);
replacingUnderscoresWithWords("May the _ _ _ _", "force", "be", "with", "you");
