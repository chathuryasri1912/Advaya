// JavaScript code for handling navigation and user authentication

// Function to show/hide sections based on navigation
function showSection(sectionId) {
    console.log(sectionId);
    const currentSection = document.getElementById(sectionId);
    
    currentSection.style.display = currentSection.style.display === "none" ? "block" : "none";
 
}
function hideSection(sectionId) {
    console.log(sectionId);
    const currentSection = document.getElementById(sectionId);
    
    currentSection.style.display = currentSection.style.display === "block" ? "block" : "none";
 
}

// Function to handle user authentication
function authenticateUser() {
    // Your authentication logic goes here
    // For simplicity, we will assume the user is always authenticated in this example

    //show form

    //validate form
    showSection("authentication");

    
    // Show the dashboard section after successful authentication
    
    


    //else 
    //alret
}

// Function to handle logout
function logout() {
    // Your logout logic goes here
    // For simplicity, we will assume the user is logged out and redirected to the authentication section
   
    // Show the authentication section after logout
    showSection("authentication");
    showSection("profile");
    showSection("dashboard");
    hideSection("profile");
    hideSection("dashboard");


   
}

// Add event listeners for navigation and form submission
document.addEventListener("DOMContentLoaded", function () {

   

    // Show the authentication section initially
    showSection("authentication");
    //call auth
    authenticateUser();
    showSection("authentication");
});

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", function () {
    logout();
});


const dashBtn = document.getElementById("dashBtn");
dashBtn.addEventListener("click", function () {
     showSection("dashboard");
     hideSection("dashboard");
     hideSection("profile");


});


const profileBtn = document.getElementById("profileBtn");
profileBtn.addEventListener("click", function () {
    showSection("profile");
    hideSection("profile");
    hideSection("dashboard");

});
function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Replace this part with actual authentication logic on the server-side
    // For demonstration purposes, we're using hardcoded credentials
    const validUsername = "user";
    const validPassword = "password";

    if (username === validUsername && password === validPassword) {
        document.getElementById("loginStatus").textContent = "Welcome, " + username + "!";
    } else {
        document.getElementById("loginStatus").textContent = "Invalid username or password. Please try again.";
    }

    // Prevent form submission to avoid page reload
    return false;
}
