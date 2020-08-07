document.getElementById("showTime").innerHTML = Date();

document.addEventListener("mouseenter", mouseEnter);
document.addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
  document.getElementsByTagName("A")[0].style.fontWeight = "bold";
  document.getElementsByTagName("A")[1].style.fontWeight = "bold";
  document.getElementsByTagName("A")[2].style.fontWeight = "bold";
  document.getElementsByTagName("A")[3].style.fontWeight = "bold";
  document.getElementsByTagName("A")[4].style.fontWeight = "bold";
  document.getElementsByTagName("A")[5].style.fontWeight = "bold";
  document.getElementsByTagName("A")[6].style.fontWeight = "bold";
  document.getElementsByTagName("A")[7].style.fontWeight = "bold";
}

function mouseLeave() {
  document.getElementsByTagName("A")[0].style.fontWeight = "normal";
  document.getElementsByTagName("A")[1].style.fontWeight = "normal";
  document.getElementsByTagName("A")[2].style.fontWeight = "normal";
  document.getElementsByTagName("A")[3].style.fontWeight = "normal";
  document.getElementsByTagName("A")[4].style.fontWeight = "normal";
  document.getElementsByTagName("A")[5].style.fontWeight = "normal";
  document.getElementsByTagName("A")[6].style.fontWeight = "normal";
  document.getElementsByTagName("A")[7].style.fontWeight = "normal";
}

window.alert("The prayer times shown will be for a whole month.");
