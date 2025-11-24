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

window.addEventListener("DOMContentLoaded", () => {
    const intro = document.querySelector(".intro-text");
    const subText = document.querySelector(".sub-text");

    // Add cursor class initially
    intro.classList.add('cursor');

    // Type first line
    typeWriter(intro, "Hi, I'm Aryan!", 100, () => {
        // Add cursor to sub-text while typing
        subText.classList.add('cursor');
        typeWriter(subText, "Computer Science student & aspiring Software Developer", 50);
    });
});
