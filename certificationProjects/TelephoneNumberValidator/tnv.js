const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const result = document.getElementById("results-div");

const checkUserInput = () => {

  // valid symbols include: "-", "(", ")", " ". 
  const regex = /\-*\(*\)*\s*/gi;
  const leftParenthesisRegex = /\(/g;
  const rightParenthesisRegex = /\)/g;
  const numberOfDigitsWithinParentheses = /\(+\d*\)+/g;
  const hyphenRegex = /-(?=\S)/g;

  const numberOfLeftParenthesisMatched = leftParenthesisRegex.exec(userInput.value);
  const numberOfRightParenthesisMatched = rightParenthesisRegex.exec(userInput.value);
  const numberOfDigitsWithinParenthesesMatched = numberOfDigitsWithinParentheses.exec(userInput.value);
  const hyphenMatched = userInput.value.match(hyphenRegex);
  const numberOfHyphens = hyphenMatched ? hyphenMatched.length : 0;
  // console.log(numberOfLeftParenthesisMatched, numberOfRightParenthesisMatched);
  // console.log(numberOfDigitsWithinParenthesesMatched);

  const cleanedUserInput = userInput.value.replace(regex, "");
  // console.log(`${cleanedUserInput} is considered numeric: ${isNumeric}`);
  
  // check empty input
  if (cleanedUserInput === "") {
    alert("Please provide a phone number");
    return;
  }

  // check whether input contains only one parenthesis

  // after cleaning the input, check whether the input is numeric
  if (isNaN(cleanedUserInput)) {
    console.log("error1")
    return result.textContent += `Invalid US number: ${userInput.value} \n`;
  }
  // check the number of digits of the input number
  // only allow 10 or 11. Below or above is invalid
  if (cleanedUserInput.length < 10 || cleanedUserInput.length > 11 ) {
    console.log("error2")
    return result.textContent += `Invalid US number: ${userInput.value} \n`;
  }

  // the input has 10 or 11 digits and is numeric
  // if the input has 11 digits, check if the first digit is 1, if it is not 1, it is invalid
  // if the input has 10 digits, check if the first digit is within 2-9 including 2 and 9, if it is not, it is invalid
  if (cleanedUserInput.length === 11 && (parseInt(cleanedUserInput[0]) !== 1 || userInput.value.startsWith("-"))) {
    console.log("error3")
    return result.textContent += `Invalid US number: ${userInput.value} \n`;
  } else if (parseInt(cleanedUserInput[1]) === 1) {
    console.log("error4")
    return result.textContent += `Invalid US number: ${userInput.value} \n`;
  } 
  
  if (cleanedUserInput.length === 10 && parseInt(cleanedUserInput[0]) < 2) {
    console.log("error5")
    result.appendChild(document.createElement("br"));
    return result.textContent += `Invalid US number: ${userInput.value}`;
  }

  // check the use of parentheses
  // 1. either no parentheses or only one pair of parentheses
  // 2. only 3 digits are allowed in the pair of parentheses
  // 3. only the 3 digits of area code can use parentheses
  if (numberOfLeftParenthesisMatched !== null && numberOfRightParenthesisMatched !== null ) {
    if (numberOfLeftParenthesisMatched.length > 1 || numberOfRightParenthesisMatched.length > 1 || numberOfLeftParenthesisMatched.length !== numberOfRightParenthesisMatched.length) {
      console.log("error6")
      return result.textContent += `Invalid US number: ${userInput.value} \n`;
    } else if (numberOfDigitsWithinParenthesesMatched && numberOfDigitsWithinParenthesesMatched[0].length !== 5) {
      console.log("error7")
      return result.textContent += `Invalid US number: ${userInput.value} \n`;
    }
  } else if (numberOfLeftParenthesisMatched === null && numberOfRightParenthesisMatched !== null) {
    return result.textContent += `Invalid US number: ${userInput.value} \n`;
  } else if (numberOfLeftParenthesisMatched !== null && numberOfRightParenthesisMatched === null) {
    return result.textContent += `Invalid US number: ${userInput.value} \n`;
  }

  if (hyphenMatched !== null) {
    if (numberOfHyphens >= 3) {
      console.log("error8")
      return result.textContent += `Invalid US number: ${userInput.value} \n`;
    }
  }
  
  return result.textContent += `Valid US number: ${userInput.value} \n`;

}

const clear = () => {
  result.textContent = "";
  userInput.value = "";
}

checkBtn.addEventListener("click", checkUserInput);
clearBtn.addEventListener("click", clear);
