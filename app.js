const readline = require('node:readline');
const {stdin:input , stdout:output} = require('process')

const rl= readline.createInterface({input,output})


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


async function guessNumber(targetNum,attempsLeft){
 
    const attempts=attempsLeft
    while(attempsLeft>0){

        const answer = await askQuestion(`You have ${attempsLeft} attempts left. Enter your guess: `);
        const guess = parseInt(answer);
    
            if(isNaN(guess)){
                console.log("Please enter a valid number.");
                    }
            else if(guess==targetNum){
                console.log(`Congratulations! You guessed the correct number in ${(attempts - attempsLeft)+1} attempts.`);
                return
            }else if(guess>targetNum){
                console.log("tooooo high")
            }else
            console.log('too low')
        
    
      attempsLeft--;
    }
    console.log(`Sorry, you've used all your attempts! The correct number was ${targetNum}.`);
}



async function game() {
  
    let attemps
    const answer = await askQuestion('Enter your choice: ');
       
        switch (answer) {
            case '1':
               attemps=10
               console.log(`Great! You have selected the Easy difficulty level. You have 10 chances to guess the correct number.`);
        
                break;
            case '2':
                attemps=5
                console.log(`Great! You have selected the Meduim difficulty level. You have 5 chances to guess the correct number.`);
             
                 break;
            case '3':
                attemps=3
                console.log(`Great! You have selected the Hard difficulty level. You have 3 chances to guess the correct number.`);
             
                 break;
        
            default:
                console.log('Invalid choice. Please select a valid difficulty level.');
                rl.close()
                break;
        }
        console.log("Let's start the game!");
        const date= Date.now()
        const targetNumber = randomNumber();
        console.log("(For testing purposes, the number is:", targetNumber, ")");
        

         await guessNumber(targetNumber,attemps)
         console.log("you took "+parseInt((Date.now()-date)/1000)+"s")
    const replayAnswer = await askQuestion("Do you want to play another round (y/n): ");

    if (replayAnswer.toLowerCase() === 'y') {
        game(); 
    } else {
        console.log("Thanks for playing! Goodbye!");
        rl.close();
    }

}

game()