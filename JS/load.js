
// Dark/Light mode switch and slider color change

document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;
    const clockElement = document.getElementById('clock');  // Clock element
    let sliderChanged = false;  // Track whether the slider has changed the background color

    // Check if a theme is stored in localStorage and apply it
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        bodyElement.classList.toggle('light-mode', savedTheme === 'light');
    }

    // Function to update the button's h1 text based on the current theme
    function updateButtonText() {
        const h1Element = themeToggleBtn.querySelector('#tabh1');
        if (bodyElement.classList.contains('light-mode')) {
            h1Element.textContent = 'Dark Mode';
        } else {
            h1Element.textContent = 'Light Mode';
        }
    }

    // Initial call to set the correct text when the page loads
    updateButtonText();

    // Function to toggle the theme and reset background color if slider was used
    function toggleTheme() {
        bodyElement.classList.toggle('light-mode');
        
        // Store the theme choice in localStorage
        localStorage.setItem('theme', bodyElement.classList.contains('light-mode') ? 'light' : 'dark');

        // Reset background color only if the slider has been used
        if (sliderChanged) {
            if (bodyElement.classList.contains('light-mode')) {
                bodyElement.style.backgroundColor = ''; // Reset to light theme default color
            } else {
                bodyElement.style.backgroundColor = ''; // Reset to dark theme default color
            }
            sliderChanged = false;  // Reset the flag to give priority back to the theme
        }

        updateButtonText();
    }

    // Add event listener to toggle theme when the button is clicked
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Add event listener to the clock to toggle theme when clicked
    clockElement.addEventListener('click', toggleTheme);

    // Hue slider logic
    const hueSlider = document.getElementById("hue-slider");
    const colorBox = document.getElementById("color-box");
    const hueValueText = document.getElementById("hue-value");

    hueSlider.addEventListener("input", function () {
        const hue = hueSlider.value;
        
        // Update color-box background and body's background color
        colorBox.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
        bodyElement.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;

        // Mark that the slider has changed the background
        sliderChanged = true;

        // Update the hue value text
        hueValueText.textContent = `Hue: ${hue}°`;
    });
});







