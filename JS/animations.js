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
        typeWriter(subText, "Technology Director | Full-Stack Developer | AI/ML Enthusiast", 50);
    });

    // Observe elements for fade-in
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });

    // Resume download button
    const resumeBtn = document.getElementById('resume-download');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            showResumeModal();
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

// Resume Modal
function showResumeModal() {
    const modal = document.getElementById('resume-modal');
    if (!modal) {
        createResumeModal();
        return;
    }
    modal.style.display = 'flex';
}

function createResumeModal() {
    const modal = document.createElement('div');
    modal.id = 'resume-modal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Download Resume</h2>
            <p>Choose your preferred format:</p>
            <div class="modal-buttons">
                <a href="resume.pdf" download class="modal-btn pdf-btn">
                    <i class="fas fa-file-pdf"></i> PDF
                </a>
                <a href="resume.docx" download class="modal-btn docx-btn">
                    <i class="fas fa-file-word"></i> Word
                </a>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
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

