// Navbar Scroll Event
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Form Submission Event
const shortenForm = document.getElementById('shorten-form');
shortenForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Show loading animation
  const shortenButton = document.querySelector('.form-button');
  shortenButton.innerHTML = '<span class="spinner"></span> Shortening...';
  shortenButton.disabled = true;

  // Simulate URL shortening process
  setTimeout(() => {
    // Generate a dummy shortened URL
    const shortenedURL = 'https://short.url/abcd123';

    // Display the shortened URL
    const shortenedURLContainer = document.getElementById('shortened-url-container');
    const shortenedURLDisplay = document.getElementById('shortened-url');
    shortenedURLDisplay.textContent = shortenedURL;
    shortenedURLContainer.style.display = 'block';

    // Reset the form
    shortenForm.reset();
    shortenButton.innerHTML = 'Shorten';
    shortenButton.disabled = false;
  }, 2000);
});

// Copy to Clipboard Event
const copyButton = document.getElementById('copy-button');
copyButton.addEventListener('click', () => {
  const shortenedURL = document.getElementById('shortened-url');
  navigator.clipboard.writeText(shortenedURL.textContent)
    .then(() => {
      copyButton.textContent = 'Copied!';
      setTimeout(() => {
        copyButton.textContent = 'Copy';
      }, 2000);
    })
    .catch((error) => {
      console.error('Failed to copy:', error);
    });
});

// Tooltip Initialization
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});


const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach((element) => {
  element.classList.add('fade-in');
});

// Slide-in Animation for Elements
const slideElements = document.querySelectorAll('.slide-in');
slideElements.forEach((element) => {
  element.classList.add('slide-in');
});

// Add your custom JavaScript code here

// Example code for toggling password visibility
const togglePasswordButton = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');

togglePasswordButton.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
});
