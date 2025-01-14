const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());


// Select the toggle button
const darkModeToggle = document.getElementById('darkModeToggle');

// Check for saved user preference in localStorage
const currentMode = localStorage.getItem('darkMode');

// Apply the saved mode
if (currentMode === 'enabled') {
  document.body.classList.add('dark-mode');
}

// Add event listener to the toggle button
darkModeToggle.addEventListener('click', () => {
  const isDarkMode = document.body.classList.toggle('dark-mode');

  // Save the user's preference
  if (isDarkMode) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

function submitted(){
  alert("Your message has been sent!!");
  document.getElementById("form-group").reset();
}

