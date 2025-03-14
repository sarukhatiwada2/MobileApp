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

// JavaScript Output Example using ID
function showMessage() {
    document.getElementById("output").innerHTML = "JavaScript is working!";

   
}
