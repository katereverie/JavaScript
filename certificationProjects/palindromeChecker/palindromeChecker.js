const textInput = document.getElementById("text-input"); // targets user's text input, this is an input el.
const checkButton = document.getElementById("check-btn"); // targets the check button
const resultInfo = document.getElementById("result"); // div section shows check results
let isPalindrome = true;

// get the input value and clean it so that factors such as punctuation, case, and spacing become irrelavent
// store the cleaned input value into an array variable and return it as the output of the function

const showResult = () => {
  // clean the value of textInput element
  const cleanedInput = textInput.value.toLocaleLowerCase().replace(/[\W\s]/g, "");
  // check if the cleaned input is empty
  if (cleanedInput === "") {
    alert("Please input a value");
    clearInput();
    return;
  }

  // turn cleaned input into an array, reverse it and compare whether each element is equal to each other
  const arrayInput = cleanedInput.split("");
  const arrayInputReversed = arrayInput.slice().reverse();
  for (i = 0; i < arrayInput.length; i++) {
    if (arrayInput[i] !== arrayInputReversed[i]) {
      isPalindrome = false;
      break;
    } 
  }

  if (isPalindrome) {
    resultInfo.innerText = `${textInput.value} is a palindrome`;
  } else {
    resultInfo.innerText = `${textInput.value} is not a palindrome`;
  }
  
  clearInput();
}

const clearInput = () => {
  textInput.value = "";
}

checkButton.addEventListener("click", showResult);


