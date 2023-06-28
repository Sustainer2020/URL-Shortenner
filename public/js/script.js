


const copyButtons = document.querySelectorAll('.copy-button');

copyButtons.forEach((copyButton) => {

  copyButton.addEventListener('click', () => {

    const card = copyButton.closest('.copytar');
    const urlElement = card.querySelector('.shortid.url-text');

    const urlToCopy = urlElement.textContent;
    navigator.clipboard.writeText(urlToCopy);

    copyButton.innerHTML = '<i class="fa fa-check"></i> Copied!!';

    setTimeout(() => {
      copyButton.innerHTML = '<div><i class="fa fa-clone fa-xl mr-1"></i>  Copy</div>';
    }, 1500);
  });
});

const deleteButtons = document.querySelectorAll('.delete-btn');
deleteButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    const shortId = button.getAttribute('data-shortid');
    try {
      const response = await fetch(`/${shortId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // URL deleted successfully, update UI or refresh the page
        location.reload();
      } else {
        const data = await response.json();
        console.log(data.message); // Handle error message
      }
    } catch (error) {
      console.error('Failed to delete URL', error);
    }
  });
});


// Get all QR code buttons
const qrCodeButtons = document.querySelectorAll('.qrCodeDropdown');

// Attach click event listener to each QR code button
qrCodeButtons.forEach((button) => {
  button.addEventListener('click', showQRCodeDropdown);
});

// Function to show the QR code dropdown overlay
function showQRCodeDropdown() {
  // Find the parent element of the clicked button
  const parentElement = this.closest('.qr-code-dropdown');

  // Toggle the 'show' class on the parent element
  parentElement.classList.toggle('show');
}

// Close the QR code dropdown overlay when clicked outside
window.addEventListener('click', (event) => {
  if (!event.target.matches('.btn-qr')) {
    const qrCodeDropdowns = document.querySelectorAll('.qr-code-dropdown');
    qrCodeDropdowns.forEach((dropdown) => {
      dropdown.classList.remove('show');
    });
  }
});



function togglePasswordVisibility(inputId, buttonId) {
  const passwordInput = document.getElementById(inputId);
  const showPasswordBtn = document.getElementById(buttonId);

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordBtn.innerHTML = '<i class="fa fa-eye"></i>';
  } else {
    passwordInput.type = 'password';
    showPasswordBtn.innerHTML = '<i class="fa fa-eye-slash"></i>';
  }
}

const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('password2');
const submitBtn = document.querySelector('button[type="submit"]');
const flashMessage = document.getElementById('flash-message');

function validatePassword() {
  if (passwordInput.value === confirmPasswordInput.value) {
    confirmPasswordInput.setCustomValidity('');
    confirmPasswordInput.classList.remove('password-mismatch');
    submitBtn.disabled = false;
    flashMessage.textContent = '';
  } else {
    confirmPasswordInput.setCustomValidity('Passwords do not match');
    confirmPasswordInput.classList.add('password-mismatch');
    submitBtn.disabled = true;
    flashMessage.textContent = 'Passwords do not match';
  }
}

// Add event listeners
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validatePassword);

