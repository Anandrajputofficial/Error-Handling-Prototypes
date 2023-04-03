fetch('https://jsonplaceholder.typicode.com/posts/123456789')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => {
    console.error('Error:', error);
    // Display an error message on the webpage
    document.body.innerHTML = `<p>Error: ${error.message}</p>`;
  });
