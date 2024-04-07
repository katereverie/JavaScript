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
// this function should rid of user inputs of the characters defined below and replace them with an empty string
function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}

// 



function addEntry() {
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

function calculateSums(e) {
  // prevent event? What does this do?
  e.preventDefault();
  isError = false;
  
  // select all the entry inputs
  const clothingNumberInputs = document.querySelectorAll('#clothing input[type=number]');
  const foodNumberInputs = document.querySelectorAll('#food input[type=number]');
  const livingNumberInputs = document.querySelectorAll('#living input[type=number]');
  const transportNumberInputs = document.querySelectorAll('#transport input[type=number]');
  const entertainmentNumberInputs = document.querySelectorAll('#entertainment input[type=number]');
  const othersNumberInputs = document.querySelectorAll('#others input[type=number]');
  const incomeNumberInputs = document.querySelectorAll('$income input[type=number]');

  // get the entry inputs
  const clothingSums = getSumsFromInputs(clothingNumberInputs);
  const foodSums = getSumsFromInputs(clothingNumberInputs);
  const livingSums = getSumsFromInputs(clothingNumberInputs);
  const transportSums = getSumsFromInputs(clothingNumberInputs);
  const entertainmentSums = getSumsFromInputs(clothingNumberInputs);
  const othersSums = getSumsFromInputs(clothingNumberInputs);
  const incomeSums = getSumsFromInputs(clothingNumberInputs);

}

// write a function to get the sums from user inputs
function getSumsFromInputs(list) {
  let sums= 0;
  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput();
  }
}