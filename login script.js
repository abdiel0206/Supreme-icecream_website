// Store user data (in real application, this would be in a database)
let users = [];

function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}

function register(event) {
    event.preventDefault();
    
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return false;
    }

    // Check if user already exists
    if (users.find(user => user.email === email)) {
        alert('User already exists!');
        return false;
    }

    // Add new user
    users.push({
        username,
        email,
        password
    });

    alert('Registration successful! Please login.');
    toggleForms();
    return false;
}

function login(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Find user
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials!  username or password is wrong');
    }
    return false;
}
