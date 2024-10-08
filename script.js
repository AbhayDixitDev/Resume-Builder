let countEdu = 1;
let countPro = 1;
let countCert = 1;
let countLang = 1;
let countExp = 1;
function addEducation() {
  countEdu++;
  let education = document.getElementById("education").innerHTML;
  education += `
<label for="education-degree${countEdu}" class="form-label">Education ${countEdu}:<span style="color:red;">*</span></label>
<input type="text" id="education-degree${countEdu}" class="form-control" name="education-degree${countEdu} " required placeholder="Enter your qualification"  >
<label for="education-university${countEdu}" class="form-label">University/School :<span style="color:red;">*</span></label>
<input type="text" id="education-university${countEdu}" class="form-control" name="education-university${countEdu}" required placeholder="Enter your university/school name"  >
<label for="education-duration${countEdu}" class="form-label">Duration :<span style="color:red;">*</span></label>
<input type="text" id="education-duration${countEdu}" class="form-control" name="education-duration${countEdu}" required placeholder="Enter your education duration"  >

`;
  document.getElementById("education").innerHTML = education;
  return false;
}

function addProject() {
  countPro++;
  let project = document.getElementById("projects").innerHTML;
  project += `

<label for="project-name${countPro}" class="form-label">Project ${countPro}:<span style="color:red;">*</span></label>
<input type="text" id="project-name${countPro}" class="form-control" name="project-name" required placeholder="Enter your project name" >
<label for="project-technologies${countPro}" class="form-label">Technologies :<span style="color:red;">*</span></label>
<input type="text" id="project-technologies${countPro}" class="form-control" name="project-technologies" required placeholder="Enter the technologies used"  >
<label for="project-purpose${countPro}" class="form-label">Purpose :<span style="color:red;">*</span></label>
<textarea id="project-purpose${countPro}" class="form-control" name="project-purpose${countPro}" required placeholder="Enter the purpose of the project"> </textarea>
<label for="project-responsibilities${countPro}" class="form-label">Responsibilities :<span style="color:red;">*</span></label>
<textarea id="project-responsibilities${countPro}" class="form-control" name="project-responsibilities${countPro}" required placeholder="Enter your responsibilities"> </textarea>
`;
  document.getElementById("projects").innerHTML = project;
  return false;
}

function addCertification() {
  countCert++;
  let certification = document.getElementById("certifications").innerHTML;
  certification += `

<label for="certification-name${countCert}" class="form-label">Certification Name ${countCert}:<span style="color:red;">*</span></label>
<input type="text" id="certification-name${countCert}" class="form-control" name="certification-name" required placeholder="Enter your certification name"  >
<label for="certification-organization${countCert}" class="form-label">Issuing Organization:<span style="color:red;">*</span></label>
<input type="text" id="certification-organization${countCert}" class="form-control" name="certification-organization" required placeholder="Enter the issuing organization"  >
<label for="certification-duration${countCert}" class="form-label">Duration:<span style="color:red;">*</span></label>
<input type="text" id="certification-duration${countCert}" class="form-control" name="certification-duration" required placeholder="Enter the certification duration"  >
`;
  document.getElementById("certifications").innerHTML = certification;
  return false;
}

function addLanguage() {
  countLang++;
  let language = document.getElementById("languages").innerHTML;
  language += `
<label for="language${countLang}" class="form-label">Language ${countLang}:<span style="color:red;">*</span></label>
<input type="text" id="language${countLang}" class="form-control" name="language${countLang}" required placeholder="Enter your language"  >
`;
  document.getElementById("languages").innerHTML = language;
  return false;
}

function addExperience() {
  countExp++;
  let experience = document.getElementById("experience").innerHTML;
  experience += `
<label for="experience-company${countExp}" class="form-label">Experience ${countExp}:<span style="color:red;">*</span></label>
<input type="text" id="experience-company${countExp}" class="form-control" name="experience-company${countExp}" required placeholder="Enter your company name" >
<label for="experience-duration${countExp}" class="form-label">Duration :<span style="color:red;">*</span></label>
<input type="text" id="experience-duration${countExp}" class="form-control" name="experience-duration" required placeholder="Enter your experience duration"  >
<label for="experience-responsibilities${countExp}" class="form-label">Responsibilities :<span style="color:red;">*</span></label>
<textarea id="experience-responsibilities${countExp}" class="form-control" name="experience-responsibilities" required placeholder="Enter your responsibilities"> </textarea>
`;
  document.getElementById("experience").innerHTML = experience;
  return false;
}

function showSection(sectionId) {
  let sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}

function submitData() {
  let data = {
    name: document.getElementById("name").value,
    title: document.getElementById("title").value,
    contact: {
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
    },
    location: document.getElementById("address").value,
    socialMedia: {
      linkedin: document.getElementById("linkedin").value,
      github: document.getElementById("github").value,
    },
    summary: document.getElementById("summary").value,
    projects: [
      {
        title: document.getElementById("project-name1").value,
        technologies: document.getElementById("project-technologies1").value,
        purpose: document.getElementById("project-purpose1").value,
        responsibilities: document.getElementById("project-responsibilities1")
          .value,
      },
    ],
    certifications: [
      {
        title: document.getElementById("certification-name1").value,
        organization: document.getElementById("certification-organization1")
          .value,
        duration: document.getElementById("certification-duration1").value,
      },
    ],
    technicalSkills: document.getElementById("technical-skills").value,
    softSkills: document.getElementById("soft-skills").value,    
    education: [
      {
        title: document.getElementById("education-name1").value,
        organization: document.getElementById("education-organization1").value,
        duration: document.getElementById("education-duration1").value,
      },
    ],
    experience: [
      {
        title: document.getElementById("experience-name1").value,
        organization: document.getElementById("experience-organization1").value,
        duration: document.getElementById("experience-duration1").value,
      },
    ],
    languages: document.getElementById("languages").value    
  };


   fetch('http://localhost:4000/Resumes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => alert(data))
  .catch(error => alert('Error:', error));  

  return false;
}
