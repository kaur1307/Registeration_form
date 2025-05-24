/*
    Name: Prabhsimran Kaur
    Student Number: 041119310
    Description: This HTML document demonstrates the validation for my registration webpage.
*/

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", validate);

    document.getElementById("newsletter").addEventListener("change", function () {
        if (this.checked) {
            alert("Warning: You may receive a lot of spam emails!");
        }
    });
});

function validate(event) {
    let isValid = true;

    // Email validation
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        showError("email", "❌ Email must be in the format xyz@xyz.xyz.");
        isValid = false;
    } else {
        clearError("email");
    }

    // Login validation
    const login = document.getElementById("login");
    const loginValue = login.value.trim();
    if (loginValue === "" || loginValue.length > 30) {
        showError("login", "❌ Username must be non-empty and max 30 characters.");
        isValid = false;
    } else {
        login.value = loginValue.toLowerCase();
        clearError("login");
    }

    // Password validation
    const password = document.getElementById("pass").value.trim();
    if (password.length < 8) {
        showError("pass", "❌ Password must be at least 8 characters.");
        isValid = false;
    } else {
        clearError("pass");
    }

    // Confirm password validation
    const confirmPassword = document.getElementById("pass2").value.trim();
    if (confirmPassword !== password || confirmPassword === "") {
        showError("pass2", "❌ Passwords must match.");
        isValid = false;
    } else {
        clearError("pass2");
    }

    // Terms validation
    const termsChecked = document.getElementById("terms").checked;
    if (!termsChecked) {
        showError("terms", "❌ Please accept the terms and conditions.");
        isValid = false;
    } else {
        clearError("terms");
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
}


// function to show errors
function showError(fieldId, message) {
    let errorSpan = document.getElementById(fieldId + "-error");
    if (!errorSpan) {
        errorSpan = document.createElement("span");
        errorSpan.id = fieldId + "-error";
        errorSpan.classList.add("error-message");
        document.getElementById(fieldId).parentNode.appendChild(errorSpan);
    }
    errorSpan.textContent = message;
    errorSpan.style.display = "inline";
}

// function to clear errors
function clearError(fieldId) {
    let errorSpan = document.getElementById(fieldId + "-error");
    if (errorSpan) {
        errorSpan.style.display = "none";
        errorSpan.textContent = "";
    }
}

