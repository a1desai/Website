// Skills Data
const skillsData = [
    {
        title: "Languages",
        items: ["C++", "Java", "Python", "C", "JavaScript", "TypeScript", "SQL", "HTML/CSS", "Bash", "MATLAB", "Kotlin"]
    },
    {
        title: "Frameworks & Libraries",
        items: ["React.js", "Node.js", "Tailwind CSS", "Java Swing", "TensorFlow", "PyTorch", "Pandas", "NumPy"]
    },
    {
        title: "Technologies & Tools",
        items: ["Git", "GitHub", "Linux/Unix", "VS Code", "Postman", "Docker", "Figma", "AWS"]
    }
];

// Experience Data
const experienceData = [
    {
        role: "AI/ML Contributor | Python, Data Visualization, LLM Evaluation",
        organization: "Byte - GitHub - SecureByte",
        github: "https://github.com/your-repo",
        date: "Jan 2024 - Present",
        img: "Images/byte.jpg" // Make sure this matches your file name
    },
    {
        role: "Back-End Developer | Node.js, Express.js, MongoDB, API Integration",
        organization: "Quantum Science & Engineering (QSEC)",
        github: "#",
        date: "Sep 2023 - Dec 2023",
        img: "Images/qsec.jpg" // Make sure this matches your file name
    }
];

const skillsContainer = document.getElementById('skills-container');
const experienceContainer = document.getElementById('experience-container');



// Toggle Skills
function toggleSkills() {
    // Hide Experience if visible
    experienceContainer.style.display = 'none';

    if (skillsContainer.style.display === "none") {
        skillsContainer.innerHTML = ''; // clear previous
        skillsContainer.style.display = 'flex';
        skillsContainer.style.justifyContent = 'space-between';
        skillsContainer.style.flexWrap = 'nowrap';
        skillsContainer.style.marginTop = '20px';

        skillsData.forEach(category => {
            const div = document.createElement('div');
            div.classList.add('skill-category');

            const h3 = document.createElement('h3');
            h3.textContent = category.title;
            div.appendChild(h3);

            const ul = document.createElement('ul');
            category.items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                ul.appendChild(li);
            });
            div.appendChild(ul);

            skillsContainer.appendChild(div);
        });

        skillsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
        skillsContainer.style.display = "none"; // hide if clicked again
    }
}

// Toggle Experience
function toggleExperience() {
    // Hide Skills if visible
    skillsContainer.style.display = 'none';

    if (experienceContainer.style.display === "none") {
        experienceContainer.innerHTML = ''; // clear previous
        experienceContainer.style.display = 'flex';
        experienceContainer.style.justifyContent = 'space-between';
        experienceContainer.style.flexWrap = 'nowrap';
        experienceContainer.style.marginTop = '20px';

        experienceData.forEach(exp => {
            const div = document.createElement('div');
            div.classList.add('experience-card');

            const role = document.createElement('h3');
            role.textContent = exp.role;
            div.appendChild(role);

            const org = document.createElement('p');
            org.innerHTML = `<a href="${exp.github}" target="_blank">${exp.organization}</a>`;
            div.appendChild(org);

            const date = document.createElement('p');
            date.classList.add('exp-date');
            date.textContent = exp.date;
            div.appendChild(date);

            const imgBox = document.createElement('div');
            imgBox.classList.add('exp-img-box');
            const img = document.createElement('img');
            img.src = exp.img;
            img.alt = exp.organization;
            imgBox.appendChild(img);
            div.appendChild(imgBox);

            experienceContainer.appendChild(div);
        });

        experienceContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
        experienceContainer.style.display = "none"; // hide if clicked again
    }
}

experienceData.forEach(exp => {
    const div = document.createElement('div');
    div.classList.add('experience-card');

    // Role / Position
    const role = document.createElement('h3');
    role.textContent = exp.role;
    div.appendChild(role);

    // Organization
    const org = document.createElement('p');
    org.innerHTML = `<a href="${exp.github}" target="_blank">${exp.organization}</a>`;
    div.appendChild(org);

    // Date
    const date = document.createElement('p');
    date.classList.add('exp-date');
    date.textContent = exp.date;
    div.appendChild(date);

    // Image
    const imgBox = document.createElement('div');
    imgBox.classList.add('exp-img-box');
    const img = document.createElement('img');
    img.src = exp.img;
    img.alt = exp.organization;
    imgBox.appendChild(img);
    div.appendChild(imgBox);

    experienceContainer.appendChild(div);
});
// Event listeners
document.getElementById('skills-btn').addEventListener('click', toggleSkills);
document.getElementById('experience-btn').addEventListener('click', toggleExperience);

