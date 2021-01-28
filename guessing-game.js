let secretNumber = 7;

function checkGuess(num) {
    if (num > secretNumber) {
        console.log('Too high.');
        return false;
    } else if (num < secretNumber) {
        console.log('Too low.');
        return false;
    } else if (num === secretNumber) {
        console.log('Correct!');
        return true;
    }
}
function askGuess() {
    

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Wanna play a game? Enter a guess.', answer => {
    checkGuess(answer); rl.close();})
}

askGuess();