function copyToClipboard(event) {
    // Get the text to be copied
    var textToCopy = event.target.parentNode.querySelector('.url-text').innerText;
  
    // Create a temporary input element
    var tempInput = document.createElement("input");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
  
    // Select the text in the input element
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the selected text
    document.execCommand("copy");
  
    // Remove the temporary input element
    document.body.removeChild(tempInput);
  
    // Change the button text to indicate success
    event.target.classList.add("copied");
  
    // Reset the button text after a delay
    setTimeout(function() {
      event.target.classList.remove("copied");
    }, 2000);
  }