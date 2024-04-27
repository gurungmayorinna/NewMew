document.addEventListener('DOMContentLoaded', function() {
  // Your JavaScript code here for interaction, such as form submission event handling
  document.querySelector('.signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // You can handle the sign up logic here
    alert('Form submitted!');
  });
});
