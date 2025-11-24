document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_xxxxx", "template_xxxxx", params)
        .then(() => {
            document.getElementById("statusMessage").innerHTML = "Message sent successfully!";
            document.getElementById("statusMessage").style.color = "#00ff88";
        })
        .catch(() => {
            document.getElementById("statusMessage").innerHTML = "Failed to send message.";
            document.getElementById("statusMessage").style.color = "red";
        });
});