let element = document.querySelector("button");
let par = document.getElementById("p");

element.style.backgroundColor = "blue";
element.style.color = "white";
element.innerHTML = "Blue Button";

function turnButtonRed() {
  element.style.backgroundColor = "red";
  element.style.color = "white";
  element.innerHTML = "Red Button";
  par.innerHTML = "Click the red button!";
}

function turnButtonBlue() {
  element.style.backgroundColor = "blue";
  element.style.color = "white";
  element.innerHTML = "Blue Button";
  par.innerHTML = "Click the blue button!";
}

function turnColor() {
  if (element.innerHTML === "Red Button") {
    turnButtonBlue();
  } else {
    turnButtonRed();
  }
}

element.onclick = turnColor;

// the original one

// function turnButtonRed(){
//     element.style.backgroundColor = "red";
//     element.style.color = "white";
//     element.innerHTML = "Red Button";
//     }

//   element.onclick = turnButtonRed;

// my first try

// function turnColor() {
//   element.innerHTML === "Red Button"
//     ? (element.onclick = turnButtonBlue)
//     : (element.onclick = turnButtonRed);
// }
