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
- The number of rolls does not change if you roll. 
  - update the text content for both of those values. Create an arrow function `updateStats` to provide the updating functionality. 
  - You want the number of rolls to update when users click "Roll the dice". So, call `updateStats` in the rollDiceBtn event. 
- You want each roll's outcome to match a certain pattern. 
  - Create an arrow function `updateRadioOption` (since these patterns are represented as `button` with the `radio` attribute), which takes `optionNode` and `score` as paramters. `optionNode` will represent a specific pattern, and `score` a matching outcome of each roll. 
  - Inside `updateRadioOption`, you must first set the `disabled` property to `false` on the DOM object that represents the radio buttons, because it is disabled for selection in HTML; and set its `value` to the current `score` (parameter).
  - Display the score by setting the text content of the `span` elements beside the radio `button` to a template literal you'd like.
  - test `updateRadioOption` in the rollBtn event to see whether the functionality is in place. 
- Now you must match each outcome with a predetermined pattern. This is where the *algorithm* comes into play.
  - "Three of a kind", "Four of a kind", etc. they all follow certain *patterns*. These patterns mentioned are clearly looking for *duplicates*, namely numbers that are the same as each other. Start with a duplicate-tracking algorithm. 
  - Create `getHighestDuplicates` arrow function with `arr` as its parameter, which is supposed to be the unique self-repeating number.
  - You need to count how many times a number has been repeated. So, create a const variable `counts`, and assign an empty object to it.
  - Create a `for ... of` loop. For example: `for (const num of arr) { }`. This loop will iterate through the iteratable object `arr`. 
  - For each iteration, you need to check whether `num` already exists in the `counts` object. So, add an `if` statement to check that.  If not, add `num` as a key/property  to the `counts` object, and assign `1` to it. Or else, increment its value by `1`. Remember that if `num` does not exist in `counts`, `counts[num]` should return a falsy value, which evalutes to `false`, and vice versa.
  - Now you have a complete for loop to check whether each number repeats itself and how many times it has been repeated. You want to select a specific number of repetition which matches the pattern you are looking for. Declare a `highestCount` variable to track the number that has been repeated the most times. 

