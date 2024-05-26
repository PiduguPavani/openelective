// Function to check if the email is already registered
function isAlreadyRegistered(email) {
    var registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    return registeredUsers.some(function(user) {
        return user.email === email;
    });
}

// Event listener for registration form submission
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;

    if (isAlreadyRegistered(email)) {
        document.getElementById("registerMessage").textContent = "Email already registered!";
    } else {
        var registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
        registeredUsers.push({ email: email, password: password });
        localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
        document.getElementById("registerMessage").textContent = "Registration successful!";
    }
});
