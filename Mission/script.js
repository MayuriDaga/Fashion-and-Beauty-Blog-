// Register function
function register() {
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields.");
        return;
    }

    // Save user data to localStorage
    const user = { name, email, password };
    localStorage.setItem(email, JSON.stringify(user));

    alert("Registration successful!");
    window.location.href = "index.html"; // Redirect to login page
}

// Login function
function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", email); // Store logged in user
        window.location.href = "home.html"; // Redirect to home page
    } else {
        alert("Invalid email or password.");
    }
}

// Logout function
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");
    window.location.href = "index.html"; // Redirect to login page
}

// Check if user is logged in
function checkLogin() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        window.location.href = "index.html"; // Redirect to login if not logged in
    }
}

// Call checkLogin on home page load
if (window.location.pathname === "/home.html") {
    checkLogin();
}
