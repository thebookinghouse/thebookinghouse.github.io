document.addEventListener("DOMContentLoaded", function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  burgerMenu.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      body.classList.toggle('body-no-scroll'); // Disable scroll

      // Toggle blur effect for the background
      const blurElement = document.querySelector('.blur-bg');
      if (navLinks.classList.contains('active')) {
          blurElement.style.display = 'block'; // Show blur effect
      } else {
          blurElement.style.display = 'none'; // Hide blur effect
      }
  });
});


console.log('')