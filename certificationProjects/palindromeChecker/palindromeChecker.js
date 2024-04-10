const textInput = document.getElementById("text-input"); // targets user's text input, this is an input el.
const checkButton = document.getElementById("check-btn"); // targets the check button
const resultInfo = document.getElementById("result"); // div section shows check results

// get the input value and clean it so that factors such as punctuation, case, and spacing become irrelavent
// store the cleaned input value into an array variable and return it as the output of the function
function checkTextInput(input) {
  const cleanedInput = input.toLowerCase().replace(/[\W\s]/g, "");
  const inputArray = cleanedInput.split("");
  let output;
  
  if (cleanedInput === "") {
    alert("Please input a value")
  }
  
  if (inputArray === inputArray.reverse()) {
    output = `${input} is a palindrome`;
  } else {
    output = `${input} is not a palindrome`;
  }
  
  resultInfo.innerText = output;
}  

checkButton.addEventListener("click", checkTextInput(textInput.value));
