const readline = require('node:readline');
const {stdin:input , stdout:output} = require('process')

const rl= readline.createInterface({input,output})

const fs = require('fs');  

const HIGHSCORES_FILE = 'highscores.json';

const x= new Date()
console.log(`Welcome to the Number Guessing Game! \nI'm thinking of a number between 1 and 100. \n`);

console.log(`Please select the difficulty level: \n 1. Easy (10 chances) \n 2. Medium (5 chances) \n 3. Hard (3 chances)`);


function randomNumber(){
    return Math.ceil(Math.random()*100)
}

function askQuestion(query) {
    return new Promise((resolve) => {
        rl.question(query, resolve);
    });
}


function provideHint(guess, targetNum, previousGuesses) {
    const highGuesses = previousGuesses.filter(g => g > targetNum);
    const lowGuesses = previousGuesses.filter(g => g < targetNum);

    if (guess > targetNum) {
        console.log(`Too high!`);
    } else {
        console.log('Too low!');
    }

    if (highGuesses.length > 0 && lowGuesses.length > 0) {
        console.log(`Your lowest high guess was: ${Math.min(...highGuesses)}`);
        console.log(`Your highest low guess was: ${Math.max(...lowGuesses)}`);
    } else if (highGuesses.length > 2) {
        console.log("You keep guessing too high, try something lower.");
    } else if (lowGuesses.length > 2) {
        console.log("You keep guessing too low, try something higher.");
    }
}


async function guessNumber(targetNum,attempsLeft,previousGuesses){

 
    const attemps=attempsLeft
    while(attempsLeft>0){

        const answer = await askQuestion(`You have ${attempsLeft} attemps left. Enter your guess: `);
        const guess = parseInt(answer);
    
            if(isNaN(guess)){
                console.log("Please enter a valid number.");
                    }
                    else if (previousGuesses.includes(guess)) {
                        console.log("You’ve already guessed that number! Try something different.");
                    } else {
                        previousGuesses.push(guess);
            
                        if (guess === targetNum) {
                            console.log(`🎉 Congratulations! You guessed the correct number in ${attemps - attempsLeft + 1} attemps.`);
                            return attemps - attempsLeft + 1;
                        } else {
                            provideHint(guess, targetNum, previousGuesses);
                        }
            
                        attempsLeft--;
                    }
                }

                console.log(`😢 Sorry, you've used all your attemps! The correct number was ${targetNum}.`);
                return null;
            }


            function loadHighScores() {
                if (fs.existsSync(HIGHSCORES_FILE)) {
                    return JSON.parse(fs.readFileSync(HIGHSCORES_FILE));
                }
                return { easy: null, medium: null, hard: null };
            }
            
            function saveHighScores(highScores) {
                fs.writeFileSync(HIGHSCORES_FILE, JSON.stringify(highScores));
            }
            
            function updateHighScore(difficulty, attemps, highScores) {
                if (highScores[difficulty] === null || attemps < highScores[difficulty]) {
                    highScores[difficulty] = attemps;
                    console.log(`🎉 New high score for ${difficulty} mode: ${attemps} attemps!`);
                }
            }

            
async function game() {
  
    const difficultyChoice = await askQuestion('Enter your choice: ');
    let attemps;
    let difficulty;
       
        switch (difficultyChoice) {
            case '1':
               attemps=10
               difficulty = 'easy';
               console.log(`Great! You have selected the Easy difficulty level. You have 10 chances to guess the correct number.`);
        
                break;
            case '2':
                attemps=5
                difficulty = 'medium';
                console.log(`Great! You have selected the Meduim difficulty level. You have 5 chances to guess the correct number.`);
             
                 break;
            case '3':
                attemps=3
                difficulty = 'hard';
                console.log(`Great! You have selected the Hard difficulty level. You have 3 chances to guess the correct number.`);
             
                 break;
        
            default:
                console.log('Invalid choice. Please select a valid difficulty level.');
                rl.close()
                return;
        }
        console.log("Let's start the game!");
        const date= Date.now()
        const targetNumber = randomNumber();
        console.log("(For testing purposes, the number is:", targetNumber, ")");
        const previousGuesses = [];        

        const score = await guessNumber(targetNumber, attemps, previousGuesses);

         console.log("you took "+parseInt((Date.now()-date)/1000)+"s")

         if (score !== null) {
            const highScores = loadHighScores();
            updateHighScore(difficulty, score, highScores);
            saveHighScores(highScores);
        }
    
    const replayAnswer = await askQuestion("Do you want to play another round (y/n): ");

    if (replayAnswer.toLowerCase() === 'y') {
        return game(); 
    } else {
        console.log("Thanks for playing! Goodbye!");
        const highScores = loadHighScores();
        console.log(highScores);
        rl.close();
    }

}

game()