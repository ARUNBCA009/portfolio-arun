// Smooth Scroll for Navbar Links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
          top: targetElement.offsetTop - 60, 
          behavior: 'smooth'
      });
  });
});


(function(){
    emailjs.init("arunarunbcayear@gmail.com"); // Replace with your EmailJS User ID
})();

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(() => {
            alert('Message sent successfully!');
        }, (error) => {
            alert('Failed to send message. Please try again later.');
        });
}





window.addEventListener('scroll', function() {
  const skillsSection = document.getElementById('skills');
  const progressBars = document.querySelectorAll('.progress-bar');
  
  if (window.scrollY + window.innerHeight > skillsSection.offsetTop + skillsSection.offsetHeight / 2) {
      progressBars.forEach(bar => {
          const percentage = bar.innerText;
          bar.style.width = percentage;
      });
  }
});


document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault(); 

  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  let formValid = true;

  if (username.value.trim() === '') {
      showError(username, 'Username is required');
      formValid = false;
  } else {
      clearError(username);
  }

    if (!validateEmail(email.value)) {
      showError(email, 'Invalid email address');
      formValid = false;
  } else {
      clearError(email);
  }

  
  if (!validatePhone(phone.value)) {
      showError(phone, 'Invalid phone number');
      formValid = false;
  } else {
      clearError(phone);
  }

    if (subject.value.trim() === '') {
      showError(subject, 'Subject is required');
      formValid = false;
  } else {
      clearError(subject);
  }

  
  if (message.value.trim() === '') {
      showError(message, 'Message cannot be empty');
      formValid = false;
  } else {
      clearError(message);
  }

  if (formValid) {
      alert('Form successfully submitted!');
      this.reset();
  }
});


function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  if (!small) {
      const errorMsg = document.createElement('small');
      errorMsg.style.color = 'red';
      errorMsg.innerText = message;
      formControl.appendChild(errorMsg);
  }
}

function clearError(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  if (small) {
      formControl.removeChild(small);
  }
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const re = /^[0-9]{10,15}$/; 
  return re.test(String(phone));
}




// Resume Download Functionality
document.getElementById('downloadResume').addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = 'resume.pdf'; // Path to your resume PDF
  link.download = 'Arun_Ramesh_Resume.pdf'; // Set the name of the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


// Smooth Scroll for Navbar Links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Progress Bars Animation
window.addEventListener('scroll', function() {
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress-bar');

    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if (sectionPos < screenPos) {
        progressBars.forEach(bar => {
            const percentage = bar.getAttribute('style');
            bar.style.width = percentage;
        });
    }
});

// Contact Form Validation (Optional)
// You can implement form validation here if needed
