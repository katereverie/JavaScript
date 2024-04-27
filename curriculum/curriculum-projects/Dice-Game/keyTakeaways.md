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
  - Now you have a complete `for` loop to check whether each number repeats itself and how many times it has been repeated. You want to select a specific number of repetition which matches the pattern you are looking for. Declare a `highestCount` variable to track the number that has been repeated the most times. 
  - Create another `for ... of` loop to iterate through `arr`. For each iteration, you need to get the current duplicate count for each number in the `arr`. So, create a const variable `count` and assign the value of `counts[num]` to it.
  - Now you need to check if `count` is the highest compared to `highestCount`. If so, assign its value to `highestCount` to track the current highest number of repetition. For "Three of a kind", the highest count should be bigger or equal to 3.
  - Similarly, for "Four of a kind", the highest count should be bigger or equal to 4. 
  - Now, if users rolls a "three of a kind" or "four of a kind", you need to count total the scores. That is a totalling sum of all five dice values. You can use call `.reduce()` on `diceValuesArr` to add up all the values in `diceValuesArr`, and assign its return value to `sumOfAllDice`. 
  - Now, if the `highestCount` is bigger or equal to 4, call `updateRadioOption(1, sumOfAllDice)` in an `if` statement whose condition is met.  
  - If `highestCount` is bigger or equal to 3, call `updateRadioOption(0, sumOfAllDice)` in a similar way. 
  - If a roll matches neither "four of a kind" nor "three of a kind", users get no score for that roll. So, call `updateRadioOption(5, 0)` at the end of `getHighestDuplicates`.
  - Update your rollBtn event, so that you can see the pattern matching result displayed. Call `getHighestDuplicates(diceValuesArr)` inside the body of `else` statement in `rollDiceBtn`. 
- Before each roll, you need to reset the values for the score `inputs` and `spans` so that a new value can be displayed. Because each roll is unique and users can only choose a score within that roll instead of choosing one score from three rolls. (This is a rule not set by me)
  - Start by creating an arrow function `resetRadioOption`.
  - Call `.forEach(input => { })` on `scoreInputs` to assign `true` to `input.disabled`, and `false` to `input.checked`. *if there is no `checked` attribute in the `input` element, by default the checkbox or the radio button will be unchecked or unselected when the page reloads*. Remember, `checked` attribute is not dynamic. If you want to manipulate it, use JavaScript to achieve that. 
  - For the text content, call `.forEach(span => { })` on `scoreSpans`, and in the callback set `span.textContent` to an empty string.
  - To actually see the reset, you need to call this function `resetRadioOption` inside `rollDiceBtn`'s callback.
- When users roll the dice and make a selection, users are not able to keep the selected score, and move onto the next round. So, we need to build an algorithm that keeps track of and displays each score for all six rounds of the game. (*3 rolls per round, 6 rounds in total. So, 18 rolls per game*)

