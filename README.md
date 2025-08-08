This is a simple Hangman game built using Angular. The game offers the player to choose from various categories (Food, Animal, Country) and guess a randomly selected word by selecting letters. The goal is to guess the word before the hangman reaches the maximum allowed attempts.

## Features

### 1. **Category Selection**
   - Players can choose a category (Food, Animal, or Country) from a dropdown list.
   - The game will pick a random word from the selected category.

### 2. **Letter Selection**
   - Players can select a letter to guess, and the game will check if that letter exists in the word.
   - Incorrect guesses will increment the hangman count.
   - Correct guesses will reveal the corresponding letters in the word.

### 3. **Word Construction**
   - Upon selecting a category, a random word is selected, and its letters are hidden as underscores ("_").
   - As the player guesses correctly, the underscores are replaced by the corresponding letters.

### 4. **Game Progress**
   - The player has 6 incorrect guesses before the game ends.
   - If the player guesses the word correctly, they win. If they run out of guesses, they lose.

### 5. **Hangman Images**
   - The game shows an image of the hangman progressing with each incorrect guess.
   - Once the game ends, the final image shows either a game over state or a "congratulations" screen.

### 6. **End Game Options**
   - After the game ends (either win or lose), players are given the option to either:
     - Play again.
     - Return to the home page.

## Technologies Used

- **Angular:** Front-end framework used to build the game.
- **ngModel:** Two-way data binding for user input (e.g., category and letter selection).
- **ngIf, ngFor:** Angular directives used for conditionally rendering elements and looping over data.
- **FormsModule:** Used for handling form inputs such as the category and letter selection.

## How to Run

1. Clone the repository or download the source code.
2. Ensure that you have **Node.js** and **Angular CLI** installed.
3. Navigate to the project directory in your terminal and run:
   ```bash
   npm install
