let btnRight = document.querySelector(".btn_right");
let btnLeft = document.querySelector(".btn_left");
let btnUp = document.querySelector(".btn_up");
let btnDown = document.querySelector(".btn_down");
let content = document.getElementById("content");

btnRight.addEventListener("mousedown", function () {
  content.innerText = "Right";
  btnRight.firstChild.classList.add("active");
});

btnRight.addEventListener("mouseup", function () {
  content.innerText = "";
  btnRight.firstChild.classList.remove("active");
});

btnLeft.addEventListener("mousedown", function () {
  content.innerText = "Left";
  btnLeft.firstChild.classList.add("active");
});

btnLeft.addEventListener("mouseup", function () {
  content.innerText = "";
  btnLeft.firstChild.classList.remove("active");
});

btnUp.addEventListener("mousedown", function () {
  content.innerText = "Up";
  btnUp.firstChild.classList.add("active");
});

btnUp.addEventListener("mouseup", function () {
  content.innerText = "";
  btnUp.firstChild.classList.remove("active");
});

btnDown.addEventListener("mousedown", function () {
  content.innerText = "Down";
  btnDown.firstChild.classList.add("active");
});

btnDown.addEventListener("mouseup", function () {
  content.innerText = "";
  btnDown.firstChild.classList.remove("active");
});

document.addEventListener("keydown", function (event) {
  if (event.key == "ArrowUp") {
    content.innerText = "Up";
    btnUp.firstChild.classList.add("active");
  }
  if (event.key == "ArrowDown") {
    content.innerText = "Down";
    btnDown.firstChild.classList.add("active");
  }
  if (event.key == "ArrowRight") {
    content.innerText = "Right";
    btnRight.firstChild.classList.add("active");
  }
  if (event.key == "ArrowLeft") {
    content.innerText = "Left";
    btnLeft.firstChild.classList.add("active");
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key == "ArrowUp") {
    content.innerText = "";
    btnUp.firstChild.classList.remove("active");
  }
  if (event.key == "ArrowDown") {
    content.innerText = "";
    btnDown.firstChild.classList.remove("active");
  }
  if (event.key == "ArrowRight") {
    content.innerText = "";
    btnRight.firstChild.classList.remove("active");
  }
  if (event.key == "ArrowLeft") {
    content.innerText = "";
    btnLeft.firstChild.classList.remove("active");
  }
});
