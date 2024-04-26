## Procedural/Algorithmic Thinking
Assuming HTML and CSS are set and ready
1. set DOM
2. declare variables for tracking numbers

Steps:
- Each time users roll the dice, previous dice values should be reset
  - create a rollDice function
  - inside it, reassign an empty array to the already declared variable for storing dice values 
  - create a `for` loop to iterate 5 times
  - each loop should generate a number in [1, 6]. Use `Math.floor` and `Math.random`.
  - at the end of each loop, push the generated value to the array storing dice values. 
  - Display these values by calling `.forEach()` on listOfAllDice (HTML) element to iterate through all `.die` div elements, and assign the corresponding dice value to its index
  - add a event listener to the corresponding button to check 
  - Since the game only allows three rolls per round, you should check if the current roll is already the third. If true, alert the user. If not, add 1 to rolls and call the `rollDice()` again. 
- 