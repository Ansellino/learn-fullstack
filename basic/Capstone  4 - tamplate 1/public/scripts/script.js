// import axios from "axios";

// let startButton = document.querySelector("#start")
// if (startButton) {
//   startButton.addEventListener("click", () => {
//     window.location.href = "/weather"


//   })
// }

// let weatherButton = document.querySelector("#weather-icon");
// let settingsButton = document.querySelector("#settings-icon");

// if(){
//     weatherButton.
// }


// Get the current page path (e.g., "/", "/weather", "/settings")
const currentPath = window.location.pathname;

// Map the paths to their respective icon selectors
const iconMap = {
  '/weather': '#weather-icon',
  '/settings': '#settings-icon',
};

// Remove the "active" class from all icons
Object.values(iconMap).forEach(selector => {
  const icon = document.querySelector(selector);
  if (icon) {
    icon.classList.remove('active');
  }
});

// Add the "active" class to the corresponding icon for the current path
if (iconMap[currentPath]) {
  const activeIcon = document.querySelector(iconMap[currentPath]);
  if (activeIcon) {
    activeIcon.classList.add('active');
  }
}



