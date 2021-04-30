let view = document.getElementById("view-button");
let close = document.getElementById("close-button");
let codey = document.getElementById("codey");

let open = function () {
  codey.style.display = "block";
  close.style.display = "block";
};

let hide = function () {
  codey.style.display = "none";
  close.style.display = "none";
};

view.addEventListener("click", open);
close.addEventListener("click", hide);

let textChange = function () {
  view.innerHTML = "Hello Codey!";
};

view.onclick = textChange;

let textBack = function () {
  view.innerHTML = "View";
};

close.onclick = textBack;
