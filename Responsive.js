
// DOM Elements
const pages = document.querySelectorAll('.page');
const navbar = document.getElementById('navbar');
const languagePage = document.getElementById('language-page');
const authOptionsPage = document.getElementById('auth-options-page');
const signinPage = document.getElementById('signin-page');
const signupPage = document.getElementById('signup-page');
const homePage = document.getElementById('home-page');
const hotelPage = document.getElementById('hotel-page');
const itineraryPage = document.getElementById('itinerary-page');
const destinationsPage = document.getElementById('destinations-page');
const destinationDetailsPage = document.getElementById('destination-details-page');
const mapPage = document.getElementById('map-page');

// Buttons
const continueBtn = document.getElementById('continue-btn');
const signinBtn = document.getElementById('signin-btn');
const signupBtn = document.getElementById('signup-btn');
const loginBtn = document.getElementById('login-btn');
const forgotPassword = document.getElementById('forgot-password');
const goToSignup = document.getElementById('go-to-signup');
const createAccountBtn = document.getElementById('create-account-btn');
const goToSignin = document.getElementById('go-to-signin');
const bookHotelBtn = document.getElementById('book-hotel-btn');
const planItineraryBtn = document.getElementById('plan-itinerary-btn');
const viewDestinationsBtn = document.getElementById('view-destinations-btn');
const bookRideBtn = document.getElementById('book-ride-btn');
const viewPashupatinath = document.getElementById('view-pashupatinath');
const visitPashupatinath = document.getElementById('visit-pashupatinath');
const backToDestinations = document.getElementById('back-to-destinations');
const backFromMap = document.getElementById('back-from-map');

// Navigation Items
const navHome = document.getElementById('nav-home');
const navDestinations = document.getElementById('nav-destinations');
const navHotels = document.getElementById('nav-hotels');
const navItinerary = document.getElementById('nav-itinerary');

// Function to show a specific page
function showPage(pageToShow) {
    pages.forEach(page => {
        page.classList.remove('active');
    });
    pageToShow.classList.add('active');
    
    // Show navbar for all pages except the language and auth pages
    if (pageToShow === languagePage || pageToShow === authOptionsPage || 
        pageToShow === signinPage || pageToShow === signupPage) {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'flex';
    }
    
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    if (pageToShow === homePage) {
        navHome.classList.add('active');
    } else if (pageToShow === destinationsPage || pageToShow === destinationDetailsPage || pageToShow === mapPage) {
        navDestinations.classList.add('active');
    } else if (pageToShow === hotelPage) {
        navHotels.classList.add('active');
    } else if (pageToShow === itineraryPage) {
        navItinerary.classList.add('active');
    }
}

// Event Listeners
continueBtn.addEventListener('click', () => {
    showPage(authOptionsPage);
});

signinBtn.addEventListener('click', () => {
    showPage(signinPage);
});

signupBtn.addEventListener('click', () => {
    showPage(signupPage);
});

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(homePage);
});

forgotPassword.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Password reset functionality would be implemented here.');
});

goToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(signupPage);
});

createAccountBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(homePage);
});

goToSignin.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(signinPage);
});

bookHotelBtn.addEventListener('click', () => {
    showPage(hotelPage);
});

planItineraryBtn.addEventListener('click', () => {
    showPage(itineraryPage);
});

viewDestinationsBtn.addEventListener('click', () => {
    showPage(destinationsPage);
});

bookRideBtn.addEventListener('click', () => {
    alert('Ride booking functionality would be implemented here.');
});

viewPashupatinath.addEventListener('click', () => {
    showPage(destinationDetailsPage);
});

visitPashupatinath.addEventListener('click', () => {
    showPage(mapPage);
});

backToDestinations.addEventListener('click', () => {
    showPage(destinationsPage);
});

backFromMap.addEventListener('click', () => {
    showPage(destinationDetailsPage);
});

// Navbar navigation
navHome.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(homePage);
});

navDestinations.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(destinationsPage);
});

navHotels.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(hotelPage);
});

navItinerary.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(itineraryPage);
});

// Language selection
const languageBtns = document.querySelectorAll('.language-btn');
languageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        languageBtns.forEach(b => b.classList.remove('btn-light'));
        btn.classList.add('btn-light');
    });
});

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    showPage(languagePage);
});
