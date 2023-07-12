var modal = document.getElementById("myModal");
var openBtn = document.querySelector("button");
var body = document.getElementsByTagName("body")[0];

function openModal() {
  modal.style.display = "block";
  body.classList.add("modal-open");
}

function closeModal() {
  modal.style.display = "none";
  body.classList.remove("modal-open");
}

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    closeModal();
  }
});