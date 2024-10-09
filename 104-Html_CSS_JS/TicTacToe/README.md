# Tic-Tac-Toe Game

A simple, interactive Tic-Tac-Toe game implemented using HTML, CSS, and JavaScript. The game allows two players to take turns, marking either 'X' or 'O' in the cells of a 3x3 grid. The game detects a win or draw and displays a message accordingly.

## Features

- Two-player game: Players alternate between 'X' and 'O'.
- Real-time win detection based on predefined winning combinations.
- Draw detection if all cells are filled without any player winning.
- Reset button to restart the game after a win or draw.

## How to Play

1. Open the `index.html` file in your browser.
2. Player 1 starts by clicking any cell to place an 'X'.
3. Player 2 clicks a cell to place an 'O'.
4. Players continue alternating turns.
5. The game will automatically detect and announce a winner or declare a draw.
6. Click the "Restart" button to reset the game board.

## File Structure

- **index.html**: Contains the structure of the game board and user interface elements.
- **styles.css**: Provides basic styling for the game board and winning/draw message display.
- **script.js**: The main logic of the game, including player turns, win/draw detection, and game reset functionality.

## JavaScript Overview

The core functionality is managed by the `script.js` file. Key components include:

- **Constants**:
    - `X_CLASS` and `CIRCLE_CLASS`: Represents the two player types (X and O).
    - `WINNING_COMBINATIONS`: An array of possible winning combinations on the 3x3 grid.

- **DOM Elements**:
    - `cellElements`: Selects all the grid cells for interaction.
    - `board`: Represents the game board to show hover effects for the current
