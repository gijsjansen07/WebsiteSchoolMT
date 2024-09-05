document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a');
    const currentPath = window.location.pathname.split("/").pop(); // Get the current page's filename

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.parentElement.classList.add('active'); // Add the class to the parent element
        }
    });
});
//Animate divs
const observer = new IntersectionObserver((entries) => 
    {entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
//Dark/Light mode switch
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;
    const clockElement = document.getElementById('clock');  // Clock element
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

    // Add event listener to toggle theme and update button text
    themeToggleBtn.addEventListener('click', function() {
        bodyElement.classList.toggle('light-mode');
        updateButtonText();
    });
     // Add the same event listener to the clock element
     clockElement.addEventListener('click', function() {
        bodyElement.classList.toggle('light-mode');
        updateButtonText()
    });
});