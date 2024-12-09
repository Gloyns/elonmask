document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const data = {};
    const statusDiv = document.getElementById('form-status');
    
    formData.forEach((value, key) => {
        // Ensure all values are strings and properly formatted
        data[key] = String(value).trim();
    });

    // Show loading state
    statusDiv.innerHTML = '<p style="color: #666;">Sending message...</p>';
    
    fetch(form.action, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: data.name,
            email: data.email,
            message: data.message
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.status === 'success') {
            statusDiv.innerHTML = '<p style="color: green;">Message sent successfully!</p>';
            form.reset();
        } else {
            throw new Error(data.message || 'Error sending message');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        statusDiv.innerHTML = '<p style="color: red;">Error sending message. Please try again.</p>';
    });
});
