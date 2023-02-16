"use strict";

function mobileNavShow() {
  var x = document.querySelector("header nav ul");

  if (x.style.opacity === "1") {
    x.style.opacity = "0";
  } else {
    x.style.opacity = "1";
  }
}