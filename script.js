let btn = document.querySelector("button");
let gotti = document.querySelector("#gotti");
let body = document.querySelector("body");

let click = false;

window.addEventListener("DOMContentLoaded", () => {
  let mode = localStorage.getItem("colorMode");
  if (mode == "dark") {
    gotti.style.transform = "translateX(85px)";
    body.style.backgroundColor = "black";
    localStorage.setItem("colorMode", "dark");
    click = true;
  } else {
    gotti.style.transform = "translateX(0px)";
    body.style.backgroundColor = "white";
    localStorage.setItem("colorMode", "light");
    click = false;
  }
});

btn.addEventListener("click", function () {
  if (!click) {
    gotti.style.transform = "translateX(85px)";
    body.style.backgroundColor = "black";
    localStorage.setItem("colorMode", "dark");
    click = true;
  } else {
    gotti.style.transform = "translateX(0px)";
    body.style.backgroundColor = "white";
    localStorage.setItem("colorMode", "light");
    click = false;
  }
});
