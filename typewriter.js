"use strict";

let maxLimit;
let myString;
let i = 0;

let myH1 = document.querySelector("#typewriter");

init();

function init() {
  maxLimit = myH1.textContent.length;
  myString = myH1.textContent;
  myH1.textContent = "";
  console.log(maxLimit);
  myLoop();
}

function myLoop() {
  myH1.textContent += myString[i];
  i++;
  if (i < maxLimit) {
    console.log(myString[i]);

    setTimeout(myLoop, 200);
  }
}
