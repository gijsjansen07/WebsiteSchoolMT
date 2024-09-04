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