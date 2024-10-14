# Snake Game Module

This module controls the behavior of the snake in a classic Snake Game. It handles snake movement, growth, and collision detection. The module interacts with an external `input.js` file to retrieve the direction of movement.

## Features
- **Snake Movement**: Moves the snake in the direction provided by user input.
- **Snake Growth**: Increases the length of the snake when it "eats."
- **Collision Detection**: Checks if the snake collides with itself or specific positions on the game board.
- **Rendering**: Dynamically renders the snake on the game board.

## Constants
- `SNAKE_SPEED`: Controls how fast the snake moves. Default is set to `5`.

## Functions

### `update()`
Updates the snake's position based on user input. Moves each segment of the snake and adds new segments if required.

### `draw(gameBoard)`
Renders the snake on the game board. Each snake segment is drawn as a `div` element, positioned using grid rows and columns.

- **Parameters**:
    - `gameBoard`: The HTML element where the snake is drawn.

### `expandSnake(amount)`
Increases the length of the snake by the specified `amount`.

- **Parameters**:
    - `amount`: Number of segments to add to the snake.

### `onSnake(position, { ignoreHead = false } = {})`
Checks if a given position on the board is occupied by the snake. Can ignore the snake's head if required.

- **Parameters**:
    - `position`: The position to check (an object with `x` and `y` properties).
    - `ignoreHead` (optional): If set to `true`, the snake's head is not considered in the check.

- **Returns**: `true` if the position is occupied by the snake, `false` otherwise.

### `getSnakeHead()`
Returns the current position of the snake's head.

- **Returns**: The `x` and `y` coordinates of the head as an object.

### `snakeIntersection()`
Checks if the snake has collided with itself (i.e., the head intersects with any other segment).

- **Returns**: `true` if the snake intersects with itself, `false` otherwise.

### Helper Functions

#### `equalPositions(pos1, pos2)`
Compares two positions and returns `true` if they are the same.

- **Parameters**:
    - `pos1`: First position (an object with `x` and `y` properties).
    - `pos2`: Second position (an object with `x` and `y` properties).

- **Returns**: `true` if both positions are identical, `false` otherwise.

#### `addSegments()`
Adds new segments to the snake. This function is called internally during the `update` function when the snake grows.

## External Dependencies
- **`getInputDirection()`**: Imported from `input.js`, this function retrieves the direction (as `x` and `y` values) in which the snake should move, based on user input.

## How to Use
1. Import the module in your game file.
2. Call `update()` to update the snake's position.
3. Call `draw(gameBoard)` to render the snake on the board.
4. Use `expandSnake(amount)` to grow the snake when it eats food.
5. Use `snakeIntersection()` to check if the game should end when the snake collides with itself.

## Example Usage
```js
import { update, draw, expandSnake, snakeIntersection } from './snake.js';

// Update snake position and render on the game board
update();
draw(gameBoard);

// Grow the snake by 1 segment
expandSnake(1);

// Check for self-collision
if (snakeIntersection()) {
    // End the game
}
