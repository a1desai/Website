// Skills Data
const skillsData = [
    {
        title: "Languages",
        items: ["JavaScript", "TypeScript", "Python", "C++", "Java", "SQL", "HTML/CSS", "C", "Bash"]
    },
    {
        title: "Web Technologies",
        items: ["React.js", "Node.js", "Express.js", "Next.js", "PostgreSQL", "REST APIs", "TailwindCSS"]
    },
    {
        title: "Tools & Frameworks",
        items: ["Docker", "AWS", "Git/GitHub", "PyTorch", "Jest", "TensorFlow", "Linux/Unix"]
    }
];

// Experience Data - Updated from resume
const experienceData = [
    {
        role: "Technology Director",
        organization: "Google Developer Groups on Campus",
        date: "November 2025 - Present",
        description: "Lead development team using Agile methodologies, conducting peer code reviews and mentoring 50+ students on web development"
    },
    {
        role: "AI/ML Contributor",
        organization: "Byte - SecureByte",
        date: "September 2025 - Present",
        description: "Optimized codebase processing workflows using Python, implementing automated testing reducing failures by 35%"
    },
    {
        role: "Back End Developer",
        organization: "Quantum Science and Engineering Club",
        date: "November 2025 - Present",
        description: "Developed backend architecture for quantum visualization platform, implementing scalable code and database operations"
    }
];

const skillsContainer = document.getElementById('skills-container');
const experienceContainer = document.getElementById('experience-container');

// Toggle Skills
function toggleSkills() {
    experienceContainer.style.display = 'none';

    if (skillsContainer.style.display === "none") {
        skillsContainer.innerHTML = '';
        skillsContainer.style.display = 'flex';
        skillsContainer.style.justifyContent = 'space-between';
        skillsContainer.style.flexWrap = 'wrap';
        skillsContainer.style.marginTop = '20px';
        skillsContainer.style.gap = '20px';

        skillsData.forEach(category => {
            const div = document.createElement('div');
            div.classList.add('skill-category');

            const h3 = document.createElement('h3');
            h3.textContent = category.title;
            h3.style.color = '#00c0ff';
            h3.style.marginBottom = '12px';
            h3.style.fontSize = '18px';
            h3.style.fontWeight = '600';
            div.appendChild(h3);

            const ul = document.createElement('ul');
            ul.style.listStyle = 'none';
            ul.style.padding = '0';
            category.items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = '✓ ' + item;
                li.style.padding = '6px 0';
                li.style.color = '#e0f7ff';
                ul.appendChild(li);
            });
            div.appendChild(ul);
            div.style.flex = '1';
            div.style.minWidth = '200px';

            skillsContainer.appendChild(div);
        });

        skillsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
        skillsContainer.style.display = "none";
    }
}

// Toggle Experience
function toggleExperience() {
    skillsContainer.style.display = 'none';

    if (experienceContainer.style.display === "none") {
        experienceContainer.innerHTML = '';
        experienceContainer.style.display = 'flex';
        experienceContainer.style.justifyContent = 'space-between';
        experienceContainer.style.flexWrap = 'wrap';
        experienceContainer.style.marginTop = '20px';
        experienceContainer.style.gap = '20px';

        experienceData.forEach(exp => {
            const div = document.createElement('div');
            div.classList.add('experience-card');
            div.style.flex = '1';
            div.style.minWidth = '250px';
            div.style.padding = '16px';
            div.style.borderLeft = '3px solid #00c0ff';
            div.style.backgroundColor = 'rgba(0, 192, 255, 0.05)';
            div.style.borderRadius = '8px';

            const role = document.createElement('h3');
            role.textContent = exp.role;
            role.style.color = '#00c0ff';
            role.style.marginBottom = '8px';
            div.appendChild(role);

            const org = document.createElement('p');
            org.textContent = exp.organization;
            org.style.color = '#e0f7ff';
            org.style.fontWeight = '600';
            org.style.marginBottom = '6px';
            div.appendChild(org);

            const date = document.createElement('p');
            date.classList.add('exp-date');
            date.textContent = exp.date;
            date.style.color = '#a0d0ff';
            date.style.fontSize = '14px';
            date.style.marginBottom = '10px';
            div.appendChild(date);

            const description = document.createElement('p');
            description.textContent = exp.description;
            description.style.color = '#d0e8ff';
            description.style.lineHeight = '1.5';
            description.style.fontSize = '14px';
            div.appendChild(description);

            experienceContainer.appendChild(div);
        });

        experienceContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
        experienceContainer.style.display = "none";
    }
}

// Event listeners
document.getElementById('skills-btn').addEventListener('click', toggleSkills);
document.getElementById('experience-btn').addEventListener('click', toggleExperience);

