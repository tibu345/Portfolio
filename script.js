const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navAnchors = document.querySelectorAll('.nav-links a');

navToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

navAnchors.forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
}));

navAnchors.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Resume download tracking (optional - for analytics)
const downloadResumeBtn = document.getElementById('downloadResumeBtn');
if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', () => {
        // Optional: Track download event for analytics
        console.log('Resume download initiated');
    });
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('reveal');
    });
}, { threshold: 0.2 });

document.querySelectorAll('section, .project-grid article, .project-card, .timeline article, .cap-grid article, .quotes article, .metrics div, .language-card, .skills-category, .interest-category').forEach(el => {
    el.classList.add('reveal-target');
    observer.observe(el);
});

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTop');
if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
        } else {
        scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});
