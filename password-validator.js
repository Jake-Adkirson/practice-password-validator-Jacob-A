const readline = require('readline-sync');
let password;
const minLength = 8;
const hasUppercase = /[A-Z]/;
const hasNumber = /[0-9]/;

do{
    password = readline.question("Enter your password\(Password must contain 8 characters, have at least 1 uppercase letter, and contain a number\):");
    if (password.length < minLength || !hasUppercase.toLocaleString(password) || !hasNumber.toLocaleString(password)) {
        console.log("Please enter a different password");
    }
} while (password.length < minLength || !hasUppercase.toLocaleString(password) || !hasNumber.toLocaleString(password));
console.log("Password accepted")