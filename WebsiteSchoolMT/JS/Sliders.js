// sliders

//Colorslider
const hueSlider = document.getElementById("hue-slider");
const colorBox = document.getElementById("color-box");
const hueValueText = document.getElementById("hue-value");
const body = document.body;

hueSlider.addEventListener("input", function () {
  const hue = hueSlider.value;
  
  // Update color-box and body background color
  colorBox.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
  body.style.backgroundColor = `hsl(${hue}, 100%, 50%)`; // Lighter version for the background
  
  // Update the hue value text
  hueValueText.textContent = `Hue: ${hue}°`;
});
