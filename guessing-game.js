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


const handlefirstGuess = answer => {
  
    checkGuess (Number(answer));
if((Number(answer)) === secretNumber){
    console.log(`You win!`);
    rl.close();
} else {
    rl.question("Guess Again", askGuess)
}
}


rl.question('Enter a guess.', handlefirstGuess)
    
    // rl.close();
}

askGuess();