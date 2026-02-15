/**
 * Professional Scroll Animations
 * Uses Intersection Observer for performance-optimized, smooth fade/slide effects.
 * Replaces the "bouncy" animations with professional easing.
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize Animation Observer
    const animatedElements = document.querySelectorAll('.home-content, .heading, .about-img, .about-content, .skills-box, .portfolio-box, .contact form');

    // Add base class for animation
    animatedElements.forEach(el => {
        el.classList.add('fade-up');
    });

    const observerOptions = {
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visualized for a "play once" effect
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));

    // 2. Smooth Link Scrolling with Offset for Sticky Header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetDisplay = document.querySelector(targetId);

            if (targetDisplay) {
                const headerOffset = 80;
                const elementPosition = targetDisplay.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 3. Skills Progress Animation Trigger
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.bar span');

    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    bar.style.width = bar.getAttribute('data-width'); // Animate to width
                });
            }
        });
    }, { threshold: 0.5 });

    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
});
