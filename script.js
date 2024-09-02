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

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 500; // The lower the speed, the faster the counter
  
    const countUp = (counter) => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
  
      const increment = target / speed;
  
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => countUp(counter), 10);
      } else {
        counter.innerText = target; // Ensure the final number matches the target
      }
    };
  
    const checkCountersInView = () => {
      const triggerPoint = window.innerHeight / 5 * 4;
  
      counters.forEach(counter => {
        const counterTop = counter.getBoundingClientRect().top;
  
        if (counterTop < triggerPoint) {
          countUp(counter);
        }
      });
    };
  
    window.addEventListener('scroll', checkCountersInView);
    checkCountersInView(); // Run on page load in case the counters are already in view
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    // Remove the "preload" class to trigger the fade-in effect
    document.body.classList.remove("preload");

    // Handle link clicks to apply the fade-out effect
    document.querySelectorAll("a").forEach(function(link) {
      link.addEventListener("click", function(event) {
        // Prevent default action of the link
        event.preventDefault();
        
        // Apply fade-out effect
        document.body.classList.add("fade-out");

        // After the fade-out animation ends, navigate to the target page
        setTimeout(function() {
          window.location.href = link.href;
        }, 500); // Match the duration of the fade-out animation (0.5s in this case)
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.remove("preload");

    document.querySelectorAll("a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            document.body.classList.add("fade-out");
            setTimeout(function() {
                window.location.href = link.href;
            }, 500);
        });
    });
});



console.log('')