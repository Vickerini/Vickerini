document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the entered name
    var name = document.querySelector('#name').value;
  
    // Get the message element
    var messageElement = document.querySelector('#message');
  
    // Update the message and display it
    messageElement.textContent = 'Hello, ' + name + '! Thank you for submitting the form.';
    messageElement.style.display = 'block';
  });