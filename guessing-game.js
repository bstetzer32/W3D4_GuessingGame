let secretNumber; 

function randomInRange(min, max) {
    secretNumber = Math.floor(Math.random() * (max - min) + min);
}

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
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askGuess() {
rl.question('Enter a guess.   ', answer => {
    if (checkGuess(Number(answer))) {
        console.log(`You win!`);
        rl.close();
    } else {
        askGuess();
    }
})}

askGuess();