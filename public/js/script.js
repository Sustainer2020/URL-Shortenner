


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
      const response = await fetch(`/url/${shortId}`, {
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




