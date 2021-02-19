"use strict";

const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");
const c4 = document.querySelector(".c4");
const dropzone = document.querySelector(".dropzone");
var el;

c1.addEventListener("mousedown", hold);
c2.addEventListener("mousedown", hold);
c3.addEventListener("mousedown", hold);
c4.addEventListener("mousedown", hold);

function hold() {
  el = this;
}

dropzone.addEventListener("mouseover", droped);

function droped() {
  el.style.margin = "2px";
  dropzone.append(el);
}
