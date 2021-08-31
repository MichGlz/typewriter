"use strict";

let maxLimit;
let myString;
let i = 0;
let audioX = 2;

let myH1 = document.querySelector("#typewriter");
let myTextos = document.querySelectorAll(".typewritten");
const myButton = document.querySelector("#startType");
const typekey1 = document.querySelector("#typekey1");
const typekey2 = document.querySelector("#typekey2");
const typekey3 = document.querySelector("#typekey3");
const typekey4 = document.querySelector("#typekey4");
const typekey5 = document.querySelector("#typekey5");
const typekey6 = document.querySelector("#typekey6");
const typekey7 = document.querySelector("#typekey7");
const typekey8 = document.querySelector("#typekey8");
const typespace = document.querySelector("#typespace");
const typelast = document.querySelector("#typelast");

myButton.addEventListener("click", init);

maxLimit = myH1.textContent.length;
myString = myH1.textContent;
myH1.textContent = "";

// initV2();

// function initV2() {
//   myTexts.forEach((eText) => {
//     maxLimit = eText.textContent.length;
//     myString = eText.textContent;
//     eText.textContent = "";
//     console.log(maxLimit);
//     myLoop();
//   });
// }

function init() {
  console.log(maxLimit);
  typekey1.currentTime = 0.2;
  typekey1.play();
  myLoop();
}

function myLoop() {
  audioX = Math.floor(Math.random() * 8) + 1;
  console.log(audioX);
  if (myString[i] === " ") {
    typespace.play();
  } else if (audioX === 1) {
    typekey1.currentTime = 0;
    typekey1.play();
  } else if (audioX === 2) {
    typekey2.currentTime = 0;
    typekey2.play();
  } else if (audioX === 3) {
    typekey3.currentTime = 0;
    typekey3.play();
  } else if (audioX === 4) {
    typekey4.currentTime = 0;
    typekey4.play();
  } else if (audioX === 5) {
    typekey5.currentTime = 0;
    typekey5.play();
  } else if (audioX === 6) {
    typekey6.currentTime = 0;
    typekey6.play();
  } else if (audioX === 7) {
    typekey7.currentTime = 0;
    typekey7.play();
  } else {
    typekey8.currentTime = 0;
    typekey8.play();
  }

  myH1.textContent += myString[i];
  i++;

  if (i < maxLimit) {
    console.log(myString[i]);

    setTimeout(myLoop, 200);
  } else {
    typelast.play();
  }
}
