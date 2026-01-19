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
                <button id="pdf-download" class="modal-btn pdf-btn">
                    <i class="fas fa-file-pdf"></i> PDF
                </button>
                <button id="docx-download" class="modal-btn docx-btn">
                    <i class="fas fa-file-word"></i> Word
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // PDF Download
    const pdfBtn = modal.querySelector('#pdf-download');
    pdfBtn.addEventListener('click', () => {
        downloadResume('pdf');
        modal.style.display = 'none';
    });

    // DOCX Download
    const docxBtn = modal.querySelector('#docx-download');
    docxBtn.addEventListener('click', () => {
        downloadResume('docx');
        modal.style.display = 'none';
    });

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

// Download Resume function
function downloadResume(format) {
    const resumeContent = `ARYAN DESAI
AI/ML Enthusiast | Full-Stack Developer | Cybersecurity

CONTACT
Email: aryan@example.com
LinkedIn: linkedin.com/in/aryan
GitHub: github.com/aryan

EXPERIENCE

Technology Director
Google Developer Groups on Campus
November 2025 - Present
Lead development team using Agile methodologies, conducting peer code reviews and mentoring 50+ students on web development

AI/ML Contributor
Byte - SecureByte
September 2025 - November 2025
Optimized codebase processing workflows using Python, implementing automated testing reducing failures by 35%

Back End Developer
Quantum Science and Engineering Club
November 2025 - Present
Developed backend architecture for quantum visualization platform, implementing scalable code and database operations

SKILLS

Languages: JavaScript, TypeScript, Python, C++, Java, SQL, HTML/CSS, C, Bash
Web Technologies: React.js, Node.js, Express.js, Next.js, PostgreSQL, REST APIs, TailwindCSS
Tools & Frameworks: Docker, AWS, Git/GitHub, PyTorch, Jest, TensorFlow, Linux/Unix

PROJECTS

BeaverBuddy - Full-stack mental health web application with React, TypeScript, Node.js, PostgreSQL
FlashFocus - AI-powered learning platform with Machine Learning and Web Technologies
AI Racer - AI racing game built with Python and game development technologies
Quantum Platform - Quantum visualization and computation platform with Backend technologies`;

    if (format === 'pdf') {
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(resumeContent));
        element.setAttribute('download', 'Aryan_Desai_Resume.pdf');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    } else if (format === 'docx') {
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(resumeContent));
        element.setAttribute('download', 'Aryan_Desai_Resume.docx');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
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

