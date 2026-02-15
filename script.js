/* ================= toggle icon navbar ================= */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ================= scroll sections active link ================= */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* ================= sticky navbar ================= */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* ================= remove toggle icon and navbar when click navbar link (scroll) ================= */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* ================= scroll reveal ================= */
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* ================= typed js ================= */
const typed = new Typed('.multiple-text', {
    strings: ['Associate Software Engineer', 'Full Stack Developer', 'Tech Innovator', 'Problem Solver'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* ================= dark/light mode ================= */
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('#theme-icon');
const body = document.querySelector('body');

// Check for saved user preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'light-mode') {
        themeIcon.classList.remove('bx-moon');
        themeIcon.classList.add('bx-sun');
    }
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        themeIcon.classList.remove('bx-moon');
        themeIcon.classList.add('bx-sun');
        localStorage.setItem('theme', 'light-mode');
    } else {
        themeIcon.classList.remove('bx-sun');
        themeIcon.classList.add('bx-moon');
        localStorage.setItem('theme', 'dark-mode');
    }
});

/* ================= skil bar animation ================= */
const skillsSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.bar span');

function showProgress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.width;
        progressBar.style.opacity = 1;
        progressBar.style.width = value;
    });
}

function hideProgress() {
    progressBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    });
}

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    if (sectionPos < screenPos) {
        showProgress();
    } else {
        hideProgress();
    }
});

/* ================= vanilla tilt ================= */
VanillaTilt.init(document.querySelectorAll(".portfolio-box"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
});

/* ================= email js ================= */
// Initialize EmailJS (REPLACE WITH YOUR PUBLIC KEY)
emailjs.init("LcKEyTnRd20kslqZt");

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Send email
    const templateParams = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
    };

    // REPLACE WITH YOUR SERVICE ID AND TEMPLATE ID
    emailjs.send("service_mgxgs1j", "template_z6uxqj8", templateParams)
        .then(function (response) {
            alert('Message Sent Successfully!');
            contactForm.reset();
        }, function (error) {
            alert('Failed to send message. Please try again.');
            console.log('FAILED...', error);
        });
});
