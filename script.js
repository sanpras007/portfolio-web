let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let skillBars = document.querySelectorAll('.skill-bar .bar');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) {
                activeLink.classList.add('active');
            }

            // Trigger the bar animations when the skills section is in view
            if (id === 'skills') {
                skillBars.forEach(bar => {
                    bar.style.width = bar.getAttribute('data-skill') + '%';
                });
            }
        }
    });
};
