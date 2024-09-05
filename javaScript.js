
//form validation
let usernamealert = document.getElementById('usernamealert');
let passwordalert = document.getElementById('passwordalert');

let userName = document.getElementById('userName');
let password = document.getElementById('password');

// let regex = /^admin$/
// let regexpass = /^12345$/

function validate() {
    if (userName.value === 'admin') {
        if (password.value == 12345) {
            passwordalert.style.color = 'green';
            passwordalert.innerText = 'Login successfull';
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