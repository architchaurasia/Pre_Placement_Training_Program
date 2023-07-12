function submitText() {
    var input = document.getElementById("input-box").value;
    var paragraph = document.createElement("p");
    paragraph.textContent = input;
    document.getElementById("output").appendChild(paragraph);
    document.getElementById("input-box").value = "";
  }