document.addEventListener('DOMContentLoaded', function() {
    // Registrierungsformular
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.querySelector('#registerForm input[name="username"]').value;
            const password = document.querySelector('#registerForm input[name="password"]').value;
            const confirmPassword = document.querySelector('#registerForm input[name="confirm-password"]').value;

            if (password !== confirmPassword) {
                alert('Passwörter stimmen nicht überein.');
                return;
            }

            // Speichern der Daten in Local Storage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            alert('Registrierung erfolgreich!');
            window.location.replace("login.html");
        });
    }

    // Login-Formular
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.querySelector('#loginForm input[name="username"]').value;
            const password = document.querySelector('#loginForm input[name="password"]').value;

            // Abrufen der gespeicherten Daten
            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');

            // Überprüfen der eingegebenen Daten
            if (username === storedUsername && password === storedPassword) {
                alert('Login erfolgreich!');
                window.location.replace("index.html");
            } else {
                alert('Benutzername oder Passwort ist falsch.');
            }
        });
    }
});
