// Typewriter effect
const typeWriter = (element, text, speed = 100, callback = null) => {
    let i = 0;
    const typing = () => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else {
            // Remove cursor after finishing typing
            element.classList.remove('cursor');
            if (callback) callback();
        }
    };
    typing();
};

// Smooth scroll to sections
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

// Back to Top Button
function initBackToTopButton() {
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

window.addEventListener("DOMContentLoaded", () => {
    const intro = document.querySelector(".intro-text");
    const subText = document.querySelector(".sub-text");

    // Add cursor class initially
    intro.classList.add('cursor');

    // Type first line
    typeWriter(intro, "Hi, I'm Aryan Desai!", 100, () => {
        // Add cursor to sub-text while typing
        subText.classList.add('cursor');
        typeWriter(subText, "AI/ML Enthusiast | Full-Stack Developer | Cybersecurity", 50);
    });

    // Observe elements for fade-in
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });

    // Initialize Back to Top button
    initBackToTopButton();

    // Resume Download - Simple direct download
    const resumeBtn = document.getElementById('resume-download');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = 'Resume/Aryan_Desai_Resume.pdf'; // Path to your resume PDF
            link.download = 'Aryan_Desai_Resume.pdf'; // Name of the downloaded file
            
            // Trigger the download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                smoothScroll(href);
            }
        });
    });
});

// Dark mode toggle
function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
    }
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const heroSection = document.getElementById('software-developer');
    if (heroSection) {
        const scrollPosition = window.pageYOffset;
        heroSection.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
});