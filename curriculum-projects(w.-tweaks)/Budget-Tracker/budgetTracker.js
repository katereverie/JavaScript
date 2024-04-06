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
function cleanInputString