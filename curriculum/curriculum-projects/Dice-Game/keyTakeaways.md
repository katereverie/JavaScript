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
  - Start by creating arrow function `updateScore` that has 2 parameters `selectedValue` and `achieved`. `selectedValue` should keep track of the selected score at the end of each round, while `achieved` should keep track of the button's `id`
  - parse `selectedValue` (due to input value being a string by default) and add it to `totalScore`, which we declared in the beginning of the program.
  - display the value by setting `totalScoreText`'s textContent to the value.
  - append `<li>${achieved} : ${selectedValue}</li>` as a HTML element to `scoreHistory.innerHTML`, using `+=`. (*`scoreHistory` is a `ol` - ordered list HTML element, FYI*)
  - Now, we want to make the `keepScoreBtn` dynamic by giving it an event listener, so that when users click on it, something relevant happens.
  - What needs to take place? We need to save the `value` and `id` of the clicked/chosen radio button. To do that, we first declare `let selectedValue;` and `let achieved;`. 
  - But the computer does not know which button has been selected. So, we need to loop through each radio button to check which one has the `checked` attribute. In this way, the computer "knows" which button's value and id to save. We can use a `for ... of` loop.
  - The logic goes as follows: if the current radio button has the `checked` attribute, we need to get its `value` and `id`. If the checked button has been found, we break the loop there. 
  - If users make a selection, the rounds, rolls, and scores should be updated. So, add an `if` statement to check if `selectedValue` is truthy. If so, reassign 0 to `rolls` and increment `round` by 1. 
  - Then call `updateStats` and `resetRadioOption`.
  - Lastly, call `updateScore(selectedValue, achieved)`.
  - If no selection has been made, nothing happens when users click on `keepScoreBtn`. To fix this, alert users about selecting one button. 
  - The rounds go on infinitely. Recall that there are only six rounds per game. After round six, the game ends with a total score. So, add an `if` statement to check if `round` is bigger than 6. If so, set a timeout with a callback will returns an alert message in 500 milliseconds. 
  - Users will see the alert message after 6 rounds. But if users ignore it, they can keep on rolling. To fix this, create an arrow function `resetGame`.
  - `resetGame` function should reset `diceValuesArr` to an array with 5 elements with the value 0, set `score`, `totalScore`, `rolls` to 0, and `round` to 1. 
  - Display the reset `diceValuesArr` by call `.forEach()` on `listOfAllDice`. For the callback, use `dice` and `index` as paramters.
  - set `dice`'s textContent to `diceValuesArr[index]`.
  - Update the text of `scoreHistory`, `totalScoreText`, `currentRoundRollsText`, and `currentRoundText` as well. 
  - Lastly, call `resetRadioOption` to reset all radio buttons.
  - Now that `resetGame` is complete, don't forget to call `resetGame` in `keepScoreBtn`;
- Now that we've coverned "Three of a kind" and "Four of a kind", we need to add "Full house" to the table. A "full house" is when users roll a "three of a kind" and the rest is a pair (two same number).
  - Start by creating an arrow func `detectFullHouse` with `arr` as the parameter name. 
  - Inside `detectFullHouse`, declara a const variable `counts` and assign an empty object to it (for counting occurencens).
  - Call `.forEach()` on `arr` to iterate through each element. For the callback, use a `ternary` to check if `counts[num]` is truthy. If so, incremet by 1; if no, assign 1 to it.
  - If `counts` has a value of 3, that means we have a "Three of a kind". We need to catch that case. We can use `Object.values(counts)`. It returns an array with all the values of the object `counts`. If we want to check if there is the value 3 in the new array, we can chain `.includes(3)` to `Object.values(counts)`. This returns a boolean. Assign the boolean result to a const variable `hasThreeOfAKind`.
  - Similarly, if `counts` has a value of 2, it means that users have rolled a pair. Catch that in a similar way. 
  - Now, if both `hasThreeOfAKind` and `hasPair` are true, then we have a "Full house". By the rule, this should give users a score of 25, using `updateRadioOption(2, 25)`. Include this in an `if` statement. Else, that is, users have rolled neither a "Three of a kind" nor "a pair", we call `updateRadioOption(5, 0)`.
  - Now that `detectionFullHouse` is complete. Include in `rollDiceBtn`'s callback.
- Now, the last algorithm we want is "straights": "Small straight" and "Large straight"
  - A small straight is when 4 of the dice have consecutive values `(Ex.1234)` resulting in a score of 30, while a large straight is when 5 of the dice have consecutive values `(Ex.12345)` resulting in a score of 40.
  - Start by creating an arrow function called `checkForStraights` with `arr` as its paramter.
  - We need to sort the values of each roll. Use `sort` method on `arr`. For the callback, use `a` and `b` as parameters and implicitly return `a-b`. This ensures that the array is sorted in an ascending order. Assign the sorted array to `sortedNumbersArr`.
  - We only want unique (non-duplicate) numbers. Use `[...new Set(sortedNumbersArr)]`, and assign the returned array to `uniqueNumbersArr`.
  - We want to unique numbers array to join into a string, and assign it to `uniqueNumbersStr`. Use `join("")`.
  - There are 3 possibilities for a small straight. 1. "1234"; 2. "2345"; 3. "3456". Create an array `smallStraightsArr` with exactly these 3 string values. 
  - For a large straight: 1. "12345"; 2. "23456". Create another array `largeStraightsArr` with these two string values.
  - Now, if users roll a large straight, we update the corresponding radio button option, and give it a score of 40. 
  - If users roll a small straight, we update the corresponding radio button option, and gvie it a score of 30.
  - If users roll neither a small nor a large straight, call `updateRadioOption(5, 0)` at the end of `checkForStraights`.
  - Lastly, you want to include `checkForStraights(diceValuesArr)` in `rollDiceBtn`'s callback.

## With that, the project is officially complete.





