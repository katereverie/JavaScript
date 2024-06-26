// .getElementById targets directly HTML elements
// query for the whole form of budget tracker (el.form)
const budgetCounter = document.getElementById('budget-tracker');
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

// this function checks if user inputs are valid
function isInvalidInput(str) {
  // look for numbers using scientific notation
  // I doubt this is common; but here we go.
  const regex = /\d+e\d+/i;
  // return matched inputs and null if no match is found. 
  return str.match(regex);
}



function addEntry() {
  // .querySelector targets elements based on CSS selectors and returns the first element that matches the specified CSS selector or null if no match is found
  // more flexible in selecting elements by class, tag, name, attribute, or other CSS selectors
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
  <div class="entry-div">
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Item</label>
    <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Specify The Item Name" />
  </div>
  <div class="entry-div">
    <label for="${entryDropdown.value}-${entryNumber}-sum">Entry ${entryNumber} Sum</label>
    <input
      type="number"
      min="0"
      id="${entryDropdown.value}-${entryNumber}-sum"
      placeholder="Input Sum"
    />
  </div>
  `;
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
budgetCounter.addEventListener("submit", calculateSums);
clearButton.addEventListener("click", clearForm);