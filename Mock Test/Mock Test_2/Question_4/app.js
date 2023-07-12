var hamburger = document.querySelector(".hamburger");
var menu = document.getElementById("menu");

hamburger.addEventListener("click", function() {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});