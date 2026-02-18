// Charp Web Studio – main scripts

// Hamburger menu toggle – click to open/close full-page menu
(function () {
  var hamburger = document.querySelector('.hamburger');
  var navbar = document.querySelector('.navbar');
  if (!hamburger || !navbar) return;

  hamburger.addEventListener('click', function () {
    var isOpen = navbar.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', isOpen);

    // When menu opens: float nav items down from the top (like the logo)
    if (isOpen && typeof gsap !== 'undefined') {
      var links = document.querySelectorAll('.nav-links a');
      // Small delay so the menu overlay is visible first, then items float down
      setTimeout(function () {
        gsap.from(links, {
          opacity: 0,
          y: -80,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out'
        });
      }, 50);
    }
  });

  // Close menu when a link is clicked (then the page navigates)
  var navLinks = document.querySelectorAll('.nav-links a');
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
      navbar.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  }
})();

// GSAP animation for logo (only runs if GSAP is loaded)
if (typeof gsap !== 'undefined') {
  var tl = gsap.timeline();
  tl.from('.navbar-brand, .navbar-button, .hamburger', { opacity: 0, y: -100, duration: 0.8 });
}
