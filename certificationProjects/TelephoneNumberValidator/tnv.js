const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");

const checkUserInput = () => {

  // valid symbols include: "-", "(", ")", " ". 
  const regex = /\-*\(*\)*\s*/gi;


  const cleanedUserInput = userInput.value.replace(regex, "");
  const isNumeric = !isNaN(cleanedUserInput);
  console.log(`${cleanedUserInput} is considered numeric: ${isNumeric}`);
  
  // check empty input
  if (cleanedUserInput === "") {
    alert("Please provide a phone number");
    return;
  }
  // after cleaning the input, check whether the input is numeric
  if (isNaN(cleanedUserInput)) {
    return result.textContent = `Invalid US ! number: ${userInput.value}`;
  }
  // check the number of digits of the input number
  // only allow 10 or 11. Below or above is invalid
  console.log(cleanedUserInput.length);
  if (cleanedUserInput.length < 10 || cleanedUserInput.length > 11 ) {
    return result.textContent = `Invalid US !! number: ${userInput.value}`;
  }

  // the input has 10 or 11 digits and is numeric
  // if the input has 11 digits, check if the first digit is 1, if it is not 1, it is invalid
  // if the input has 10 digits, check if the first digit is within 2-9 including 2 and 9, if it is not, it is invalid
  if (cleanedUserInput.length === 11 && parseInt(cleanedUserInput[0]) !== 1) {
    return result.textContent = `Invalid US !!! number: ${userInput.value}`;
  } else if (parseInt(cleanedUserInput[1]) === 1) {
    return result.textContent = `Invalid US !!!! number: ${userInput.value}`;
  }
  
  if (cleanedUserInput.length === 10 && parseInt(cleanedUserInput[0]) < 2) {
    return result.textContent = `Invalid US !!!!! number: ${userInput.value}`;
  }
  
  return result.textContent = `Valid US number: ${userInput.value}`;

}

const clear = () => {
  result.textContent = "";
  userInput.value = "";
}

checkBtn.addEventListener("click", checkUserInput);
clearBtn.addEventListener("click", clear);
