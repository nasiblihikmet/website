// Check if the user has a preferred mode (light/dark) set in their browser settings
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

let sunIcon = document.querySelector(".sun-icon")
let moonIcon = document.querySelector(".moon-icon")
// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
    }
}

// Function to set the initial mode based on user preference
function setInitialMode() {
    if (prefersDarkMode) {
        toggleDarkMode();
    }
}

// Add event listener to the mode toggle button
const modeToggleBtn = document.getElementById('mode-toggle');
modeToggleBtn.addEventListener('click', toggleDarkMode);

// Set initial mode when the page loads
setInitialMode();
