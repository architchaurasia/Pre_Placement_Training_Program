function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var date = document.getElementById("date").value;
    var color = document.getElementById("color").value;


    var nameRegex = /^[A-Za-z\s]+$/;
    if (!name.match(nameRegex)) {
      displayError("name", "Please enter a valid name (only letters and spaces).");
      return;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      displayError("email", "Please enter a valid email address.");
      return;
    }
    var phoneRegex = /^[\d-]+$/;
    if (!phone.match(phoneRegex)) {
      displayError("phone", "Please enter a valid phone number (only digits and dashes).");
      return;
    }
    if (password.length < 8) {
      displayError("password", "Please enter a password with a minimum of 8 characters.");
      return;
    }
    var ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum < 18 || ageNum > 99) {
      displayError("age", "Please enter a valid age (between 18 and 99).");
      return;
    }
    if (!gender) {
      displayError("gender", "Please select a gender.");
      return;
    }
    var currentDate = new Date().toISOString().split("T")[0];
    if (date > currentDate) {
      displayError("date", "Please select a date in the past.");
      return;
    }

    if (!color) {
      displayError("color", "Please select a color.");
      return;
    }


    alert("Form submitted successfully!");
    document.getElementById("myForm").reset();
  }

  function displayError(fieldId, errorMsg) {
    var errorElement = document.createElement("p");
    errorElement.classList.add("error");
    errorElement.textContent = errorMsg;
    var field = document.getElementById(fieldId);
    field.insertAdjacentElement("afterend", errorElement);
  }