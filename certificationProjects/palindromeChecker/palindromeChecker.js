const textInput = document.getElementById("text-input"); // targets user's text input, this is an input el.
const checkButton = document.getElementById("check-btn"); // targets the check button
const resultInfo = document.getElementById("result"); // div section shows check results

// get the input value and clean it so that factors such as punctuation, case, and spacing become irrelavent
// store the cleaned input value into an array variable and return it as the output of the function
function cleanTextInput(input) {
  const cleanedInput = input.toLowerCase().replace(/[\W\s]/g, "");
  const inputArray = cleanedInput.split("");
  
  const emptyInputAlert = (cleanedInput === "") => alert("Please input a value");
  if (inputArray === inputArray.reverse()) {
    return `${input} is a palindrome`;
  } else {
    return `${input} is not a palindrome`;
  }
}  

function showResult() {
   
}

// regardless of forwards/backwards, punctuation, case, and spacing
// textInput is a string. To process it, store it in a variable. the document

checkButton.addEventListener("click", showResultFunction);
