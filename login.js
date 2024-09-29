document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Validate username and password (basic example)
    if (username === 'admin' && password === 'ammy') {
        // Redirect to another page or show success message
        window.location.href = 'event.html'; // Redirect to the dashboard
    } else {
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});
