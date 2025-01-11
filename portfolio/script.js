// Game variables
let score = 0;

// DOM elements
const scoreDisplay = document.getElementById("score");
const logo = document.getElementById("logo");
const resetButton = document.getElementById("reset-button");
const tokenomicsSection = document.getElementById("tokenomics");

// Initialize score display
if (scoreDisplay) {
    scoreDisplay.textContent = score;
} else {
    console.error("Score display element not found");
}

// Check if logo element exists
if (logo) {
    // Click event to increase score
    logo.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent = score;
        logo.style.transform = "scale(1.1)";
        setTimeout(() => (logo.style.transform = "scale(1)"), 100); // Animation effect
    });
} else {
    console.error("Logo element not found");
}

// Check if reset button exists
if (resetButton) {
    // Reset button event
    resetButton.addEventListener("click", () => {
        score = 0;
        scoreDisplay.textContent = score;
    });
} else {
    console.error("Reset button element not found");
}

// Function to handle the theme change based on scroll position
function handleScroll() {
    const scrollPosition = window.scrollY + window.innerHeight; // Current scroll position

    if (tokenomicsSection) {
        // Check if the scroll position has passed the Tokenomics section
        if (scrollPosition >= tokenomicsSection.offsetTop) {
            // Add Linux theme when scroll position passes the Tokenomics section
            document.body.classList.add("linux");
            changeNavColor("green"); // Change navbar text to green when in Linux theme
        } else {
            // Remove Linux theme when scrolling back up
            document.body.classList.remove("linux");
            changeNavColor("black"); // Change navbar text to black when not in Linux theme
        }
    } else {
        console.warn("Tokenomics section not found");
    }
}

// Function to change navbar text color
function changeNavColor(color) {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
        link.style.color = color;
    });
}

// Listen for the scroll event
window.addEventListener("scroll", handleScroll);

// Initial check in case the page loads with some scroll already
document.addEventListener("DOMContentLoaded", () => {
    // Initial scroll check
    handleScroll();

    const navLinks = document.querySelectorAll(".nav-link");

    // Smooth scrolling and navigation active state
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Scroll to target section
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });

                // Highlight active link
                navLinks.forEach((l) => l.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });
});
