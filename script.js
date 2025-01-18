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
  if(document.getElementById("name").value == "" ){
    alert("Please enter the name!!");
    return;
  }

  
  else if( document.getElementById("email").value == "")
    {
      alert("Please enter the email!!");
    }

  else if( document.getElementById("email").value.indexOf("@") == -1 
  || document.getElementById("email").value.indexOf(".") == -1)
    {
      alert("Please enter a valid email!!");
      return;
    }

  else if( document.getElementById("message").value == ""){
    alert("Please fill the message to send!!");
    return;
    }

  else{
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      alert("Your message has been sent!!");
      return;
    }
    
  }

