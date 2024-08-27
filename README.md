# Number Guessing Game 

Welcome to the Number Guessing Game! This game challenges you to guess a randomly generated number between 1 and 100 within a limited number of attempts. The game offers multiple difficulty levels, a hint system, and tracks high scores to make your experience more exciting.

From [roadmap.sh](https://roadmap.sh/projects/number-guessing-game)

## Features 

- **Three Difficulty Levels:**
  - **Easy:** 10 attempts
  - **Medium:** 5 attempts
  - **Hard:** 3 attempts

- **Hint System:** 
  - Provides clues based on your previous guesses.
  - Keeps track of your lowest high guess and highest low guess.

- **High Scores:** 
  - Tracks and saves your best scores for each difficulty level.

- **Previous Guesses:** 
  - Warns you if you guess a number you've already tried.

## How to Play 

1. **Start the Game:**
   - Run the script and select your difficulty level by entering `1`, `2`, or `3`.

2. **Make Your Guess:**
   - Enter a number between 1 and 100 when prompted. The game will tell you if your guess is too high, too low, or correct.

3. **Hints:**
   - If you're struggling, the game will provide hints based on your previous guesses.

4. **Win or Lose:**
   - If you guess the number correctly, you win! Otherwise, the game ends when you run out of attempts.

5. **High Scores:**
   - After each round, your score is compared against your previous best for that difficulty level. If it's a new high score, it will be saved.

6. **Play Again:**
   - After each game, you can choose to play another round or exit the game.

## Requirements 

- **Node.js**
- **File System (`fs`) Module**

## Installation 

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd number-guessing-game
   ```
## 2. **Run Game**

```bash 
node game.js
```

## High Scores 📈

The high scores are saved in a highscores.json file in the game directory. The file tracks your best scores for each difficulty level and displays them at the end of the game.


## Future Improvements 

- **Timed Rounds**: Introduce a time limit for each guess.
- **Multiplayer Mode**: Allow multiple players to compete for the best score.
- **Daily Challenges**: Offer daily unique challenges to keep the game engaging.