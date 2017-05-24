var validation = function() {
    // Read field values.
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var isRegistrationSuccessful = true;

    // Validate that all fields have a value.
    if (firstName === "") {
        isRegistrationSuccessful = false;
        alert("First Name cannot be empty!");
    }

    if (lastName === "") {
        isRegistrationSuccessful = false;
        alert("Last Name cannot be empty!");
    }

    if (email === "") {
        isRegistrationSuccessful = false;
        alert("Email cannot be empty!");
    }

    if (password === "") {
        isRegistrationSuccessful = false;
        alert("Password cannot be empty!");
    }

    if (confirmPassword === "") {
        isRegistrationSuccessful = false;
        alert("Confirm Password cannot be empty!");
    }

    // Validate that Password and ConfirmPassword are equal.
    if (password !== confirmPassword) {
        isRegistrationSuccessful = false;
        alert("Passwords don't match!");
    }
    // If all values are correct, display alert with success message.
    if (isRegistrationSuccessful === true) {
        alert("Registration success!");
    }
};

