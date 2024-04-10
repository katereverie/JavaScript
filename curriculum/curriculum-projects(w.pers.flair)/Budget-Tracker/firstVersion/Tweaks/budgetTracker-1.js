// .getElementById targets directly HTML elements
// query for the whole form of budget tracker (el.form)
const budgetCounter = document.getElementById('budget-tracker');
// query for the set budget number (el.input)
const budgetNumberInput = document.getElementById('budget');
// query for the entry-dropdown menu (el.select)
const entryDropdown = document.getElementById('entry-dropdown');
// query for the add entry button (el.button)
const addEntryButton = document.getElementById('add-entry');
const saveEntryButton = document.getElementById('save-entry');
const editEntryButton = document.getElementById('edit-entry');
const deleteEntryButton = document.getElementById('delete-entry');
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

// this function checks if user inputs are valid
function isInvalidInput(str) {
  // look for numbers using scientific notation
  // I doubt this is common; but here we go.
  const regex = /\d+e\d+/i;
  // return matched inputs and null if no match is found. 
  return str.match(regex);
}



function addClothingEntry() {
  // .querySelector targets elements based on CSS selectors and returns the first element that matches the specified CSS selector or null if no match is found
  // more flexible in selecting elements by class, tag, name, attribute, or other CSS selectors
  const targetInputContainer = document.querySelector(`#clothing .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
  <label id="entry-label" for="clothing-${entryNumber}-name">Entry ${entryNumber}</label>
  <input type="text" id="clothing-${entryNumber}-name" placeholder="Specify The Item Name" />
  <label id="entry-label" for="clothing-${entryNumber}-sum">Sum</label>
  <input
    type="number"
    min="0"
    id="clothing-${entryNumber}-sum"
    placeholder="Input Sum";
  />`;
  targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

function saveClothingEntry() {
  const targetSavedEntryContainer = document.querySelector(`#clothing .input-container`);

  const HTMLString = `
  <div>
    <span>${input}</span>
    <span></span>
  </div>
  `;
}

function editEntry() {

}

function deleteEntry() {

}

function addFoodEntry() {
  // .querySelector targets elements based on CSS selectors and returns the first element that matches the specified CSS selector or null if no match is found
  // more flexible in selecting elements by class, tag, name, attribute, or other CSS selectors
  const targetInputContainer = document.querySelector(`#food .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
  <label id="entry-label" for="food-${entryNumber}-name">Entry ${entryNumber}</label>
  <input type="text" id="food-${entryNumber}-name" placeholder="Specify The Item Name" />
  <label id="entry-label" for="food-${entryNumber}-sum">Sum</label>
  <input
    type="number"
    min="0"
    id="food-${entryNumber}-sum"
    placeholder="Input Sum";
  />`;
  targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

function addLivingAndAccomodationEntry() {
  // .querySelector targets elements based on CSS selectors and returns the first element that matches the specified CSS selector or null if no match is found
  // more flexible in selecting elements by class, tag, name, attribute, or other CSS selectors
  const targetInputContainer = document.querySelector(`#living .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
  <label id="entry-label" for="living-${entryNumber}-name">Entry ${entryNumber}</label>
  <input type="text" id="living-${entryNumber}-name" placeholder="Specify The Item Name" />
  <label id="entry-label" for="living-${entryNumber}-sum">Sum</label>
  <input
    type="number"
    min="0"
    id="living-${entryNumber}-sum"
    placeholder="Input Sum";
  />`;
  targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

function addTransportEntry() {
  // .querySelector targets elements based on CSS selectors and returns the first element that matches the specified CSS selector or null if no match is found
  // more flexible in selecting elements by class, tag, name, attribute, or other CSS selectors
  const targetInputContainer = document.querySelector(`#transport .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
  <label id="entry-label" for="transport-${entryNumber}-name">Entry ${entryNumber}</label>
  <input type="text" id="transport-${entryNumber}-name" placeholder="Specify The Item Name" />
  <label id="entry-label" for="transport-${entryNumber}-sum">Sum</label>
  <input
    type="number"
    min="0"
    id="transport-${entryNumber}-sum"
    placeholder="Input Sum";
  />`;
  targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

function addEntertainmentEntry() {
  // .querySelector targets elements based on CSS selectors and returns the first element that matches the specified CSS selector or null if no match is found
  // more flexible in selecting elements by class, tag, name, attribute, or other CSS selectors
  const targetInputContainer = document.querySelector(`#entertainment .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
  <label id="entry-label" for="entertainment-${entryNumber}-name">Entry ${entryNumber}</label>
  <input type="text" id="entertainment-${entryNumber}-name" placeholder="Specify The Item Name" />
  <label id="entry-label" for="entertainment-${entryNumber}-sum">Sum</label>
  <input
    type="number"
    min="0"
    id="entertainment-${entryNumber}-sum"
    placeholder="Input Sum";
  />`;
  targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

function addOthersEntry() {
  // .querySelector targets elements based on CSS selectors and returns the first element that matches the specified CSS selector or null if no match is found
  // more flexible in selecting elements by class, tag, name, attribute, or other CSS selectors
  const targetInputContainer = document.querySelector(`#others .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
  <label id="entry-label" for="others-${entryNumber}-name">Entry ${entryNumber}</label>
  <input type="text" id="others-${entryNumber}-name" placeholder="Specify The Item Name" />
  <label id="entry-label" for="others-${entryNumber}-sum">Sum</label>
  <input
    type="number"
    min="0"
    id="others-${entryNumber}-sum"
    placeholder="Input Sum";
  />`;
  targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

function addIncomeEntry() {
  // .querySelector targets elements based on CSS selectors and returns the first element that matches the specified CSS selector or null if no match is found
  // more flexible in selecting elements by class, tag, name, attribute, or other CSS selectors
  const targetInputContainer = document.querySelector(`#income .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
  <label id="entry-label" for="income-${entryNumber}-name">Entry ${entryNumber}</label>
  <input type="text" id="income-${entryNumber}-name" placeholder="Specify The Item Name" />
  <label id="entry-label" for="income-${entryNumber}-sum">Sum</label>
  <input
    type="number"
    min="0"
    id="income-${entryNumber}-sum"
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
  const incomeNumberInputs = document.querySelectorAll('#income input[type=number]');

  // get the entry inputs
  const clothingSums = getSumsFromInputs(clothingNumberInputs);
  const foodSums = getSumsFromInputs(foodNumberInputs);
  const livingSums = getSumsFromInputs(livingNumberInputs);
  const transportSums = getSumsFromInputs(transportNumberInputs);
  const entertainmentSums = getSumsFromInputs(entertainmentNumberInputs);
  const othersSums = getSumsFromInputs(othersNumberInputs);
  const incomeSums = getSumsFromInputs(incomeNumberInputs);
  
  const budgetSums = getSumsFromInputs([budgetNumberInput]);
  
  // if there is an error, exit function
  if (isError) {
    return;
  }

  // if there is no error, continue
  const spentSums = clothingSums + foodSums + livingSums + transportSums + entertainmentSums + othersSums;
  const remainingBudget = budgetSums - spentSums + incomeSums;
  const surplusOrDeficit = remainingBudget > 0 ? 'Surplus' : 'Deficit';
  output.innerHTML = `
    <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingBudget)} ${surplusOrDeficit}</span>
    <hr>
    <p>Set Budget: ${budgetSums} €</p>
    <p>Expense Sums: ${spentSums} €</p>
    <p>Income Sums: ${incomeSums} €</p>
  `;
  
  // show output because it is set as hidden in CSS.
  output.classList.remove('hide');
}



// (optional) request from Chris: output a chart or graph that shows the spending structure in percentage



// write a function to get the sums from user inputs
function getSumsFromInputs(list) {
  let sums= 0;

  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);
    
    // if true that there is invalid input, prompt a pop-up message to alert the users
    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    // if no invalid input is found, convert inputs into number and add it to the sums for later calculation
    sums += Number(currVal);
  }
  // return the sums, so that the function terminates
  return sums;
}

// write a function to clear user inputs and outputs
function clearForm() {
  // select all inputs from the class input-container which contains all the user inputs
  const inputContainers = Array.from(document.querySelectorAll('.input-container'));

  // restore user inputs to default: empty string
  for (const container of inputContainers) {
    container.innerHTML = '';
  }
  
  // restore default values and setting
  budgetNumberInput.value = '';
  output.innerText = '';
  output.classList.add('hide');
}

// add events so that the web app is interactive
addEntryButton.addEventListener("click", addEntry);
saveEntryButton.addEventListener("click", saveEntry);
editEntryButton.addEventListener("click", editEntry);
deleteEntryButton.addEventListener("click", deleteEntry);

budgetCounter.addEventListener("submit", calculateSums);
clearButton.addEventListener("click", clearForm);
