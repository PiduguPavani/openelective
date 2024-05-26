document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    var registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    var user = registeredUsers.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (user) {
        document.getElementById("loginMessage").textContent = "Login successful!";
    } else {
        document.getElementById("loginMessage").textContent = "Invalid email or password!";
    }
});