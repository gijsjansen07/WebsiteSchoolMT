//animated divs
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        cons;ole.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.replace('show','hide');
        }
        
    });
});

const animatedElements = document.querySelectorAll('.animated-divs');
animatedElements.forEach((el) => observer.observe(el));


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


//Tabel

const table = document.getElementById('productTable');
const toggleBordersButton = document.getElementById('toggleBordersButton');
let bordersVisible = true; // Start with borders visible

toggleBordersButton.addEventListener('click', function() {
  if (bordersVisible) {
    // Smoothly hide borders and apply background color
    table.classList.add('no-borders');
    table.style.outline = 'none'; // Remove the table outline
    table.querySelectorAll('td').forEach(td => {
        td.style.outline = 'none'; // Remove cell outlines (borders)
    });
  } else {
    // Smoothly show borders (all borders will be 2px thick and black)
    table.classList.remove('no-borders');
    table.style.outline = '4px solid black'; // Apply black table border
    table.querySelectorAll('td').forEach(td => {
        td.style.outline = '2px solid black'; // Apply black cell borders
    });
  }
  bordersVisible = !bordersVisible; // Toggle the state
});
