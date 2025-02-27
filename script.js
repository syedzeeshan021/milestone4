document.addEventListener("DOMContentLoaded", function () {
    // Get the form and output div
    var resumeForm = document.getElementById("resumeForm");
    var resumeOutput = document.getElementById("resumeOutput");
    var profilePictureInput = document.getElementById("profilePicture");
    // Handle form submission
    resumeForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing the page
        // Get form input values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        // Get the uploaded profile picture file
        var profilePictureFile = profilePictureInput.files[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        // Generate the resume output in HTML format with editable code 
        var resumeHTML = "\n        <h2><b> Editable Resume</b></h2>\n        <h3>Personal Information</h3>\n        ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class = \"profilePicture\";>") : "", "\n        <p><b>Name:</b><span contenteditable= \"true\"> ").concat(name, " </span></p>\n        <p><b>Email:</b><span contenteditable= \"true\"> ").concat(email, " </span></p>\n        <p><b>Phone:</b><span contenteditable= \"true\"> ").concat(phone, " </span></p>\n  \n        <h3>Education</h3>\n        <p contenteditable= \"true\">").concat(education, "</p>\n  \n        <h3>Experience</h3>\n        <p contenteditable= \"true\">").concat(experience, "</p>\n  \n        <h3>Skills</h3>\n        <p contenteditable= \"true\">").concat(skills, "</p>\n      ");
        // Insert the generated resume into the output div
        resumeOutput.innerHTML = resumeHTML;
        // Make elements editable
        makeEditable();
    });
    // Function to make elements editable
    function makeEditable() {
        var editableElements = document.querySelectorAll(".editable");
        editableElements.forEach(function (element) {
            element.setAttribute("contenteditable", "true");
        });
    }
});
