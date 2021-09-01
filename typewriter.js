"use strict";

let maxLimit;
let myString;
let myLine;
let i;
let audioX = 2;
let noTextos;
let noTimes = 1;
let textIndex = 0;

const myTextos = document.querySelectorAll(".typewritten");
const myButton = document.querySelector("#startType");
const paper = document.querySelector(".paper");

//----------sounds-------------------
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
//---------------------------------

initV2();

function initV2() {
  noTextos = myTextos.length;
  console.log("initV2 no. textos " + noTextos);
  let elementIndex = 1;
  myTextos.forEach((eText) => {
    localStorage.setItem(`myString${elementIndex}`, `${eText.textContent}`);
    let h1 = document.createElement("H1");
    h1.classList.add(`line${elementIndex}`);
    paper.appendChild(h1);
    eText.textContent = "";
    elementIndex++;
  });

  myButton.addEventListener("click", initTyping);
}

function initTyping() {
  console.log("initTyping");
  textIndex++;
  myString = localStorage.getItem(`myString${textIndex}`);
  console.log(myString);
  maxLimit = myString.length;
  console.log(maxLimit);
  myLine = document.querySelector(`.line${textIndex}`);
  i = 0;
  myLoop();
}

function myLoop() {
  playSound();
  console.log(myString[i]);

  myLine.textContent += myString[i];

  i++;

  if (i < maxLimit) {
    setTimeout(myLoop, 150);
  } else {
    typelast.play();
    typelast.addEventListener("ended", cleanLocalStorage);
  }
}

function playSound() {
  audioX = Math.floor(Math.random() * 8) + 1;

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
}

function cleanLocalStorage() {
  localStorage.removeItem(`maxLimit${textIndex}`);
  localStorage.removeItem(`myString${textIndex}`);
  if (textIndex < noTextos) {
    initTyping();
  }
}
