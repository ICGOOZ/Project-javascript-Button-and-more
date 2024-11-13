// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Get the button and click count elements
const button = document.getElementById("colorButton");
const clickCountDisplay = document.getElementById("clickCount");

// Initialize the click counter
let clickCount = 0;

// Add event listener for button clicks
button.addEventListener("click", function () {
  // Change the background color of the body to a random color
  document.body.style.backgroundColor = getRandomColor();

  // Increment the click count
  clickCount++;

  // Update the click count display
  clickCountDisplay.textContent = clickCount;
});
