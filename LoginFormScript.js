document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const loginDiv = document.querySelector('.login');
    const signupDiv = document.querySelector('.signup');
    const loginButton = document.querySelector('.login-button');
    const signupButton = document.querySelector('.signup-button');

    const toSignUpButton = document.getElementById('to-signup');
    const toLoginButton = document.getElementById('to-login');

    // Show login form
    function showLogin() {
        loginDiv.classList.remove('hidden');
        signupDiv.classList.add('hidden');
    }

    // Show signup form
    function showSignUp() {
        signupDiv.classList.remove('hidden');
        loginDiv.classList.add('hidden');
    }

    // Initially show login form
    showLogin();

    // Event listeners
    toSignUpButton.addEventListener('click', () => {
        showSignUp();
    });

    toLoginButton.addEventListener('click', () => {
        showLogin();
    });

    loginButton.addEventListener('click', () => {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (email === 'admin' && password === 'admin123') {
            window.location.href = 'AdminDashboard.html';
        } else {
            
        }
    });
});
