const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to the password validator tool! Reminder: your password must be at least 10 characters long.');

reader.question("Please enter your password: ", function(input){

    if (input.length >= 10) {
        console.log('Password Success.');
    } else {
        console.log('Password Failure, needs to be at least 10 characters long.');
    }

	reader.close()

});