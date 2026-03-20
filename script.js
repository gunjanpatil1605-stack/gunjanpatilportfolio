// ================================================
// Gunjan Patil Portfolio - Complete JS
// ================================================

// Animate skill bars when the user scrolls to the skills section
window.addEventListener('scroll', function() {
    const skillsSection = document.getElementById('skills');
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3; // Trigger slightly before section

    if (skillsPosition < screenPosition) {
        const skills = document.querySelectorAll('.progress');
        skills.forEach(skill => {
            skill.style.width = skill.getAttribute('style-width'); 
        });
    }
});

// Optional: Smooth scroll for anchor links (navbar)
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Optional: Contact form submit (demo alert)
const contactForm = document.querySelector('#contact form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting me! I will get back to you soon.');
    contactForm.reset();
});