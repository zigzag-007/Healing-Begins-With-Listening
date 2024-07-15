document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Change header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Close hamburger menu when a nav link is clicked
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    var navbarCollapse = document.querySelector('.navbar-collapse');
    var navbarToggler = document.querySelector('.navbar-toggler');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close the hamburger menu
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
            
            // Smooth scroll to the target section
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});