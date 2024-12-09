// Import stylesheets
import './style.css';

const url =
  'https://script.google.com/macros/s/AKfycbyqHDmyCSKD1uBRhUh-M_gqTA3JnWYWToSs7ZMqG9Gj3Q3t1GLQFCAQSsMNBnv4jKMLLA/exec';

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const statusDiv = document.getElementById('form-status');
    
    // Convert form data to object
    const data = Object.fromEntries(formData);
    
    // Show loading state
    statusDiv.innerHTML = '<p style="color: #666;">Sending message...</p>';
    
    fetch(form.action, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Response:', data);
        if (data.status === 'success') {
            statusDiv.innerHTML = '<p style="color: green;">Message sent successfully!</p>';
            form.reset();
        } else {
            statusDiv.innerHTML = '<p style="color: red;">Error: ' + (data.message || 'Unknown error') + '</p>';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        statusDiv.innerHTML = '<p style="color: red;">Error sending message. Please try again.</p>';
    });
});
