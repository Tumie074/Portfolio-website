document.addEventListener('DOMContentLoaded', function() {
    // Initialize with home section active
    toggleSection('home');

    const navLinks = document.querySelector('.nav-links');
    const navToggle = document.querySelector('.nav-toggle');

    // Set up navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            toggleSection(sectionId);
            closeMobileNav();
        });
    });

    // Mobile nav toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            const isOpen = navLinks.classList.toggle('open');
            this.setAttribute('aria-expanded', isOpen);
        });
    }

    function closeMobileNav() {
        if (navLinks) {
            navLinks.classList.remove('open');
        }
        if (navToggle) {
            navToggle.setAttribute('aria-expanded', 'false');
        }
    }
});

// Toggle between sections
function toggleSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });

    // Scroll to top of the section
    if (activeSection) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Make the function available globally if needed
window.toggleSection = toggleSection;
