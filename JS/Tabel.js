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