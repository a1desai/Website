# Resume Files Setup

## What You Need to Do

The website now has a "Download Resume" feature that lets users download your resume in PDF or Word format. To complete this setup:

### 1. Add Resume Files
Place these two files in the root directory of your website (same level as index.html):
- `resume.pdf` - Your resume in PDF format
- `resume.docx` - Your resume in Word format (optional, but recommended)

### 2. Folder Structure
```
/Aryan's Personal Website/
├── index.html
├── resume.pdf          ← Add this file
├── resume.docx         ← Add this file (optional)
├── CSS/
├── JS/
├── Images/
└── ... other files
```

### 3. How It Works
When users click "Download Resume" button:
1. A modal popup appears with download options
2. They can choose PDF or Word format
3. The file downloads to their device

### 4. Create Your Resume Files
You can create these files using:
- **PDF**: Export from Word/Google Docs as PDF
- **Word**: Save your resume as `.docx` format

### ⚠️ Important Notes
- Without these files, the links won't work but the feature is set up
- Make sure file names match exactly: `resume.pdf` and `resume.docx`
- Files should be in the root directory, not in subdirectories

### 5. Alternative: Use External Links
If you prefer to host files elsewhere (Google Drive, etc.), edit the `showResumeModal()` function in `JS/animations.js`:

```javascript
// Change the href to your external links
<a href="YOUR_PDF_LINK_HERE" download class="modal-btn pdf-btn">
```

That's it! Your website will be fully functional once you add the resume files.
