document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');
    var confirmationMessage = document.getElementById('confirmationMessage');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Get form data
      var formData = new FormData(contactForm);
  
      // Send form data to the server using Fetch API
      fetch('process_form.php', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          // Display confirmation message on success
          confirmationMessage.style.display = 'block';
          contactForm.reset(); // Optional: Clear the form fields
        } else {
          // Handle error if needed
          console.error('Form submission failed');
        }
      })
      .catch(error => {
        // Handle network or other errors
        console.error('Error during form submission:', error);
      });
    });
  });