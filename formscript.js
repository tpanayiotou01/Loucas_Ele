document.addEventListener('DOMContentLoaded', function() {
  var contactForm = document.getElementById('contactForm');
  var confirmationMessage = document.getElementById('confirmationMessage');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Display confirmation message
    confirmationMessage.style.display = 'block';

    // Optional: Clear the form fields
    contactForm.reset();
  });
});
