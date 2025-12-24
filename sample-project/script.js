/**
 * Sample Project JavaScript
 * =========================
 * 
 * EXERCISES:
 * 1. Create a branch 'feature-smooth-scroll' and add smooth scrolling
 * 2. Create a branch 'feature-form-validation' and add form validation
 * 3. Practice resolving merge conflicts if both branches modify this file
 */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio loaded!');
    
    // Add your name here
    const yourName = 'Your Name Here';
    
    // Update the hero section with your name
    const heroSection = document.querySelector('#hero');
    if (heroSection) {
        const welcomeText = heroSection.querySelector('p');
        if (welcomeText) {
            welcomeText.textContent = `Hi, I'm ${yourName}! I'm learning Git and GitHub!`;
        }
    }
});

/**
 * EXERCISE: Create a branch and add smooth scrolling
 * Hint: Use this function
 */
function smoothScroll(target) {
    // TODO: Implement smooth scrolling to target element
    console.log('Scrolling to:', target);
}

/**
 * EXERCISE: Create a branch and add a theme toggle
 * Hint: Toggle a 'dark-mode' class on the body
 */
function toggleTheme() {
    // TODO: Implement dark mode toggle
    console.log('Theme toggled!');
}

/**
 * EXERCISE: Create a branch and add form validation
 */
function validateForm(form) {
    // TODO: Implement form validation
    console.log('Validating form...');
    return true;
}

// Add any additional functionality below
// Remember to create a branch before making major changes!

