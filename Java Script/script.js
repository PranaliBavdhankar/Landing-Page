function toggelhide() {
  let ul = document.getElementById("ul");
  let box1 = document.getElementById("box-1");
  let box2 = document.getElementById("box-2");
  let box3 = document.getElementById("box-3");

  if (ul.style.opacity != "0") {
    ul.style.opacity = "0";
    ul.style.transform = "translatex(123px)";
    ul.style.transition = "all 0.5s";
    box1.style.transform = "translate(0px) rotate(0deg)";
    box3.style.transform = "translate(0px) rotate(0deg)";
    box2.style.display = "block";
  } else {
    ul.style.opacity = "1";
    box1.style.transform = "translate(-9px) rotate(45deg)";
    box3.style.transform = "translate(-9px) rotate(135deg)";
    box2.style.display = "none";
    ul.style.transform = "rotate(0deg)";
    ul.style.transform = "translate(0px); ";
  }
}
