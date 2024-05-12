const textInput = document.getElementById("text-input"); 
const checkButton = document.getElementById("check-btn");
const resultInfo = document.getElementById("result"); 
let isPalindrome = true;

const showResult = () => {
  // clear the value of textInput element of non-word characters, underscores, and whitespace
  const cleanedInput = textInput.value.toLocaleLowerCase().replace(/[\W\_\s]/g, "");
  // check if the cleaned input is empty
  if (cleanedInput === "") {
    alert("Please input a value");
    clearInput();
    return;
  }

  // turn cleaned input into an array, reverse it and compare whether each element is equal to each other
  const arrayInput = cleanedInput.split("");
  const arrayInputReversed = arrayInput.slice().reverse();
  
  // don't for get "let"!!!
  for (let i = 0; i < arrayInput.length; i++) {
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
  isPalindrome = true;
}

checkButton.addEventListener("click", showResult);



