//form validation
let usernamealert = document.getElementById('usernamealert');
usernamealert.style.color = 'red';
let passwordalert = document.getElementById('passwordalert');
passwordalert.style.color = 'red';
let userName = document.getElementById('userName');
let password = document.getElementById('password');

// let regex = /^admin$/
// let regexpass = /^12345$/

function validate(callback) {
    if (userName.value === 'admin') {
        if (password.value == 12345) {
            passwordalert.style.color = 'green';
            passwordalert.innerText = 'Login successfull';
            callback();
            return true;
        }
        else {
            passwordalert.innerText = 'Invalid password';
        }
    } else {
            usernamealert.innerText = 'Username is invalid';
            return false;
        }
}

function redirectToMainPage() {
    window.location.href = "main.html"; 
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    validate(redirectToMainPage);
});