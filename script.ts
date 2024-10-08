document.addEventListener("DOMContentLoaded", () => {
    // Get the form and output div
    const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
    const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;
    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
  
    // Handle form submission
    resumeForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form from refreshing the page
  
      // Get form input values
      const name = (document.getElementById("name") as HTMLInputElement).value;
      const email = (document.getElementById("email") as HTMLInputElement).value;
      const phone = (document.getElementById("phone") as HTMLInputElement).value;
      const education = (document.getElementById("education") as HTMLTextAreaElement).value;
      const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
      const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // Get the uploaded profile picture file
    const profilePictureFile = profilePictureInput.files![0];
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile):"";
  
      // Generate the resume output in HTML format with editable code 
      const resumeHTML = `
        <h2><b> Editable Resume</b></h2>
        <h3>Personal Information</h3>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class = "profilePicture";>` : ""}
        <p><b>Name:</b><span contenteditable= "true"> ${name} </span></p>
        <p><b>Email:</b><span contenteditable= "true"> ${email} </span></p>
        <p><b>Phone:</b><span contenteditable= "true"> ${phone} </span></p>
  
        <h3>Education</h3>
        <p contenteditable= "true">${education}</p>
  
        <h3>Experience</h3>
        <p contenteditable= "true">${experience}</p>
  
        <h3>Skills</h3>
        <p contenteditable= "true">${skills}</p>
      `;
  
      // Insert the generated resume into the output div
      resumeOutput.innerHTML = resumeHTML;
      
      // Make elements editable
      makeEditable();
    });
  
    // Function to make elements editable
    function makeEditable() {
      const editableElements = document.querySelectorAll(".editable");
      editableElements.forEach((element) => {
        element.setAttribute("contenteditable", "true");
      });
    }
  });
  