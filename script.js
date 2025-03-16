// JavaScript Statement Example
let welcomeMessage = "Hello! Welcome to Namaste Nepal.";
console.log(welcomeMessage);

// Function to Toggle the Hamburger Menu using ID
function toggleMenu() {
    let nav = document.getElementById("navLinks");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}
 
// Function to update text when "Get Started" button is clicked
function getStarted() {
    document.getElementById("outputs").innerHTML = "Let's get started!";
}

// Function to update text when "Start Planning" button is clicked
function startPlanning() {
    document.getElementById("output").innerHTML = "Your trip planning has started!";
}


