const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    emailjs.sendForm('service_eh50598', 'template_5pp7qii', this)
        .then(() => {
            alert("Message sent successfully!");
            form.reset();
        }, (error) => {
            alert("Failed to send message. Please try again later.");
            console.error(error);
        });
});
