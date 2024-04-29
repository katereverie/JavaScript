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
3. Regarding `update` and `change`
  3.1. We want a function to calculate changes. 
      3.1.1. Declare `calculateChange` arrow function which takes `price` and `cash` as its parameters.
      3.1.2. Since it is tricky to perform mathematical operations on floats, make sure to multiply both paramters by `100` before calculating. Remember to divive the result by `100` before assigning to `change`. 
      3.1.3. Use `console.log` to test irregularities.
  3.2. Now that we have the `change`. We need to determine whether we have enough total change in the drawer && exact change combination to return.
      3.2.1. 


  