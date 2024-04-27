document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signInButton = document.getElementById('sign-in-button');
    const loadingSpinner = document.getElementById('loading-spinner');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Assume the form is valid initially
      let isValid = true;
  
      // Clear previous errors
      usernameError.textContent = '';
      passwordError.textContent = '';
  
      // Basic validation
      if (usernameInput.value.trim() === '') {
        usernameError.textContent = 'Please enter your username.';
        isValid = false;
      }
      
      if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Please enter your password.';
        isValid = false;
      } else if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
      }
  
      // If the form is valid, simulate loading
      if (isValid) {
        signInButton.disabled = true; // Disable the button to prevent multiple clicks
        signInButton.textContent = 'Signing In'; // Change button text
        loadingSpinner.style.display = 'inline-block'; // Show the loading spinner
  
        // Simulate a network request with a timeout
        setTimeout(function() {
          // After 5 seconds, hide the spinner and redirect to a new page
          loadingSpinner.style.display = 'none';
          window.location.href = 'homePage.html'; // Replace with your actual destination URL
        }, 5000);
      }
    });
  
    // Handle Instagram login button if present
    document.getElementById('instagram-login').addEventListener('click', function() {
      // You would handle the Instagram OAuth flow here
    });
  });
  