
//Animate divs
const observer = new IntersectionObserver((entries) => 
    {entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        //else{
          //  entry.target.classList.remove('show');
        //}
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//darklightmode switch
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;
    const clockElement = document.getElementById('clock');  // Clock element

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

    // Function to toggle the theme and update localStorage
    function toggleTheme() {
        bodyElement.classList.toggle('light-mode');
        // Store the theme choice in localStorage
        localStorage.setItem('theme', bodyElement.classList.contains('light-mode') ? 'light' : 'dark');
        updateButtonText();
    }

    // Add event listener to toggle theme when the button is clicked
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Add event listener to the clock to toggle theme when clicked
    clockElement.addEventListener('click', toggleTheme);
});
