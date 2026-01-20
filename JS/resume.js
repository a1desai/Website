// Resume Download Functionality
document.getElementById('resume-download').addEventListener('click', function() {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = 'Resume/Aryan_Desai_Resume.pdf'; // Path to your resume PDF
    link.download = 'Aryan_Desai_Resume.pdf'; // Name of the downloaded file
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});