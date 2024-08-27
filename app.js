const readline = require('node:readline');
const {stdin:input , stdout:output} = require('process')

const rl= readline.createInterface({input,output})


console.log(`Welcome to the Number Guessing Game! \nI'm thinking of a number between 1 and 100. \n`);

console.log(`Please select the difficulty level: \n 1. Easy (10 chances) \n 2. Medium (5 chances) \n 3. Hard (3 chances)`);


function randomNumber(){
    return Math.ceil(Math.random()*100)
}

function guessNumber(targetNum,attempsLeft){

    if(attempsLeft==0){
        console.log(`Sorry, you've used all your attempts! The correct number was ${targetNum}.`);
        rl.close()
        return
    }

    rl.question("Enter your guess: ", (anwser)=>{
         

        if(isNaN(anwser)){
            console.log("Please enter a valid number.");
                }
        else if(anwser==targetNum){
            console.log(`Congratulations! You guessed the correct number in ${(10 - attempsLeft)+1} attempts.`);
            rl.close()
            return
        }else if(anwser>targetNum){
            console.log("tooooo high")
        }else
        console.log('too low')

        guessNumber(targetNum,attempsLeft-1)

    })


}



function game(){
  
    let attemps
     rl.question("Enter your choice: ", (anwser)=>{
       
        switch (anwser) {
            case '1':
               attemps=10
               console.log(`Great! You have selected the Easy difficulty level. You have 10 chances to guess the correct number.`);
        
                break;
            case '2':
                attemps=5
                console.log(`Great! You have selected the Meduim difficulty level. You have 10 chances to guess the correct number.`);
             
                 break;
            case '3':
                attemps=3
                console.log(`Great! You have selected the Hard difficulty level. You have 10 chances to guess the correct number.`);
             
                 break;
        
            default:
                console.log('Invalid choice. Please select a valid difficulty level.');
                rl.close()
                break;
        }
        console.log("Let's start the game!");
        const targetNumber = randomNumber();
        console.log("(For testing purposes, the number is:", targetNumber, ")");
        

        guessNumber(targetNumber,attemps)
     })

}

game()