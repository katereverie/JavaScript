// .getElementById targets directly HTML elements
// query for the whole form of budget tracker (el.form)
const budgetCounter = document.getElementById('budgetTracker');
// query for the set budget number (el.input)
const budgetNumberInput = document.getElementById('budget');
// query for the entry-dropdown menu (el.select)
const entryDropdown = document.getElementById('entry-dropdown');
// query for the add entry button (el.button)
const addEntryButton = document.getElementById('add-entry');
// query for the clear button (el.button)
const clearButton = document.getElementById('clear');
// query for the output (el.div)
const output = document.getElementById('output');
// declare a reassignable variable with the boolean value false
let isError = false;

// since user input can be unformatted and unfit for processing data, it needs 'cleaning'
// all user inputs are taken as strings.
function cleanInputString() {
  // .querySelector targets elements based on CSS selectors and returns the first element that matches the specified CSS selector or null if no match is found
  // more flexible in selecting elements by class, tag, name, attribute, or other CSS selectors
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Item</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Specify The Item Name" />
  <label for="${entryDropdown.value}-${entryNumber}-sum">Entry ${entryNumber} Sum</label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-sum"
    placeholder="Input Sum";
  />`;
  targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}