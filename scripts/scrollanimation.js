document.addEventListener("DOMContentLoaded", function() {
    const scrollElements = document.querySelectorAll('.about-image-container, .about-content, .about, .service, .testimonial, .team-member, .donation-animation, .contact-animation, .contact-info img.contact-icon, .contact-info strong, .contact-info p, #donations .img-responsive, #donations h2, #donations p, #donations .cta-button, .about-image, .about h2, .about p, #point1, #point2, #point3');

    const elementInView = (el, offset = 0) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) - offset)
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 150)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    handleScrollAnimation(); // To check on page load if elements are in view
});
