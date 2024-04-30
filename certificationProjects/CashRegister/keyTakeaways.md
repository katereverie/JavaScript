## Structure 

## Procedural Process
1. Prepare DOM
  1.1. get span element `#price` and the input element `#cash`.
  1.2. get `#purchase-btn` so that when `confirmBtn` is clicked on, we have compare the `cashInput` with `price`.
  1.3. get `#change-due` div element to display due changes.
  1.4. get `#cash-register-drawer` and store as `drawer`.
  1.3. Display `price` to `priceSpan.innerText`. We can change `price` inside our `script.js` file so that the changed `price` always displays on screen.
  1.4. 

2. Regaring user inputs and locally stored change data
  2.1. If `cashInput.value` is less than `price`, alert customers with `"Customer does not have enough money to purchase the item"`.
     2.1.1. Add event listener to `confirmBtn`.
     2.1.2. For the callback, we want to get the value from `cashInput`. Remember it is a string input.
     2.1.3. Parse `cashInput.value` and assign it to `cashInputFloat` so that we can compare them as floats. 
     2.1.4. Add ``console.log()` to test if both values are correctly parsed into float, and test `if` the alert message pops up, when `cashInputFloat` is less than `price`.
  2.2. If `cashInputFloat` is equal to `price`, display `"No change due - customer paid with exact cash"` in `dueChange`.
    2.2.1. Add `else if` statement to the previous `if` statement.
    2.2.2. Assign "No change due - customer paid with exact cash" to `dueChange.textContent`.
    2.2.3. Toggle `.hidden` class of `dueChange` and `return`;
  2.3. Display `cid` (cash in drawer) to `drawer`.
    2.3.1. Call `.forEach()` on `cid`. 
    2.3.2. For the callback, assign a `div` element with `class="changeType"` to `drawer.innerHTML`, using addition assignment. 
    2.3.3. Inside each `div`, use template literals to display the type of change and the amount of change. 

3. Regarding `update` and `changeDue`
  3.1. We want a function to calculate changes. 
      3.1.1. Declare `calculateChange` arrow function which takes `price` and `cash` as its parameters.
      3.1.2. Since it is tricky to perform mathematical operations on floats, make sure to multiply both paramters by `100` before calculating. Remember to divive the result by `100` before assigning to `changeDue`. 
      3.1.3. Use `console.log` to test irregularities.
  3.2. Now that we have the `changeDue`. We need to know the current amount of change in the drawer so that we can determine whether we have enough total change in the drawer && exact change combination to return.
      3.2.1. We need to have a function to update the change total. 
      3.2.2. Declare an arrow function named `updateCurrentChangeTotal`. Set `currentChangeTotal` to `0` since every time change is returned, the current total change might be different, because we need to update `cid` and its value as well. (Implement updating `cid` later)
      3.2.3. Use a `for` loop to caculate `currentTotalChange`. Remember we are dealing with floats now.
      3.2.4. Return `currentTotalChange`. 
      3.2.5. Call `updateCurrentChangeTotal` inside `calculateChange`, and assign its return value to `currentChangeInDrawer` for determining which appropriate status to display. 
  3.3. Now that we have `currentChangeInDrawer` and `changeDue`. We can introduce several `if` statements to determine which status message to display. 
      3.3.1. If `currentChangeInDrawer` is less than `changeDue`, set `dueChangeDisplay` to "Status: INSUFFICIENT_FUNDS". 
      3.3.2. If we cannot return exact change, display the same as 3.3.1. But How we do know whether we have *exact* change to return? add `!hasExactChange` as the second condition.
      3.3.3. We need an algorithm to dissect `dueChange` into a number of `changeType` for determining that whether there is *exact* to return. 
      3.3.3.1. declare `determineExactChange` arrow function, which takes `changeDue` as its paramter, and returns `true` or `false`.
  3.4. Now think about the design of algorithm. 
      3.4.1. We can try a `for` loop to iterate through `changeDue` until it is equal to `0`. 
           3.4.1.1. Maybe `changeDue` cannot be exactly returned. In that case, `changeDue` will be bigger than `0`. In that case, `for` loop stops, `changeDue` is not equal to `0`. If `changeDue` is not equal to `0` at the end of the loop. We know there is no exact change. In that case, we assign `false` to `hasExactChange`. If `changeDue` is equal to `0`, we assign `true` to `hasExactChange`. Either way, at the end of the `for` loop, we will know it is possible to return exact change. 
      3.4.2. During the loop, we must count how many mony has been returned so that we can update `cid` for the cashier person to see. We can update while looping, using mathematical operations.
      3.4.3. During the loop, we must also count how much money comes from which category of money so that we can update the `div` element `change-due` (`dueChangeDisplay`). Create an array variable `ctr` (short for "change to return") to store this information while looping. When the loop ends, if `hasExactChange` is `false`, we clear the stored values from `ctr` and display "Insufficent funds". If `hasExactChange` is `true`, we display `ctr` to `dueChangeDisplay.innerHTML`, using a `forEach` loop. 
      3.4.4. So, how should the loop look like? 
          3.4.5. The loop should start with hundreds. 


  