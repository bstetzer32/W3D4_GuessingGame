

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let secretNumber = randomInRange(1, 100); 

let minMax = [];






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
    rl.question('Enter a guess.', handleGuess)}
const handleGuess = answer => {
        if (checkGuess(Number(answer))) {
            console.log(`You win!`);
            rl.close();
        } else {
            askGuess();
        }};
    




function askRange(){

    rl.question("Enter a max number", answer => {


        minMax.push(answer);
        rl.question("Enter a min number", answer => {
    
            minMax.push(answer); 
            secretNumber = randomInRange(...minMax);
    
            console.log(`I'm thinking of a number between ${minMax[0]} & ${minMax[1]}`)
            askGuess()
    )})
    }



    
    
    
    
    
    
