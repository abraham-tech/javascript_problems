# Quiz Game - README

## Overview
This project is a simple quiz game implemented using HTML, CSS, and JavaScript. The game presents a series of multiple-choice questions to the user, and the user can select answers. The game shows feedback for correct and incorrect answers and moves to the next question until all questions are completed. The user can restart the quiz after completing it.

## Features
- Start the quiz by pressing the **Start** button.
- Multiple-choice questions are displayed with clickable answer buttons.
- Feedback for correct and incorrect answers is provided by changing the background color of the selected answer.
- A **Next** button is displayed after selecting an answer, allowing the user to proceed to the next question.
- The game shuffles the questions each time it is played.
- Once all questions are answered, a **Restart** button is displayed to allow the user to play again.

## Files
- **index.html**: Contains the HTML structure for the quiz interface.
- **style.css**: Adds basic styling to the quiz, buttons, and feedback (correct/wrong).
- **script.js**: Contains the JavaScript logic for handling the game flow.

## Code Structure
### HTML Elements
- **startButton**: The "Start" button that initiates the quiz.
- **nextButton**: The "Next" button that appears after answering a question.
- **questionContainerElement**: The container where the question and answers are displayed.
- **questionElement**: Displays the current question text.
- **answerButtonsElement**: A container for holding the dynamically generated answer buttons.

### Main Functions
1. **startGame()**:
    - Hides the start button.
    - Shuffles the questions.
    - Displays the first question.

2. **setNextQuestion()**:
    - Clears previous answers.
    - Shows the next question in the shuffled list.

3. **showQuestion(question)**:
    - Populates the question container with the current question and its associated answers.

4. **resetState()**:
    - Clears out previous answers and hides the next button.

5. **selectAnswer()**:
    - Handles the logic when an answer is selected, marking it as correct or wrong.

6. **setStatusClass()**:
    - Adds a visual cue (correct/wrong) to an element based on whether the answer is right or wrong.

7. **clearStatusClass()**:
    - Removes any status classes from elements.

## How to Run
1. Clone or download the repository.
2. Open the `index.html` file in your web browser.
3. Click the **Start** button to begin the quiz.

## License
This project is open-source and free to use.
