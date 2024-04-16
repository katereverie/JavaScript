const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

let fourDigits = []; // 1000 - 3000
let threeDigits = []; // 100 - 900
let twoDigits = []; // 10 - 90
let oneDigit = []; // 1 - 9

const checkUserInput = () => {
  // convert to int
  const inputInt = parseInt(numberInput.value);
  
  // check for invalid input
  if (isNaN(inputInt)) {
    result.innerHTML = "Please enter a valid number";
    return;
  } else if (inputInt <= 0) {
    result.innerHTML = "Please enter a number greater than or equal to 1";
    return;
  } else if (inputInt >= 4000) {
    result.innerHTML = "Please enter a number less than or equal to 3999";
    return;
  }
  
  console.log(inputInt);
  // valid input, now convert it
  result.innerText = convertInput(inputInt);
  fourDigits = [];
  threeDigits = [];
  twoDigits = [];
  oneDigit = [];
}

const convertInput = (input) => {
  
  if (input === 0) {
    return fourDigits.join("") + threeDigits.join("") + twoDigits.join("") + oneDigit.join("");
  } else if (input >= 1000) {
    let quotient = Math.floor(input / 1000);
    let remainder = input % 1000;
    while (quotient !== 0) {
      fourDigits.push("M");
      quotient--;
    }
    return convertInput(remainder);
  } else if (input >= 100 && input <= 999) {
    let quotient = Math.floor(input / 100);
    let remainder = input % 100;
    while (quotient > 0) {
      if (quotient === 9) {
        threeDigits.push("CM");
        quotient -= 9;
      } else if (quotient >= 5 && quotient < 9  ) {
        threeDigits.push("D");
        quotient -= 5;
      } else if (quotient === 4) {
        threeDigits.push("CX");
        quotient -= 4;
      } else if (quotient >= 1 && quotient < 4) {
        threeDigits.push("C");
        quotient--;
      }
    }
    return convertInput(remainder);
  } else if (input >= 10 && input <= 99) {
    let quotient = Math.floor(input / 10);
    let remainder = input % 10;
    while (quotient !== 0) {
      if (quotient === 9) {
        twoDigits.push("XC");
        quotient -= 9;
      } else if (quotient >= 5 && quotient < 9  ) {
        twoDigits.push("L");
        quotient -= 5;
      } else if (quotient === 4) {
        twoDigits.push("XL");
        quotient -= 4;
      } else if (quotient > 0 && quotient < 4) {
        twoDigits.push("X");
        quotient--;
      }
    }
    return convertInput(remainder);
  } else if (input >= 1 && input <= 9) {
    let quotient = Math.floor(input / 1);
    let remainder = input % 1;
    while (quotient !== 0) {
      if (quotient === 9) {
        oneDigit.push("IX");
        quotient -= 9;
      } else if (quotient >= 5 && quotient < 9  ) {
        oneDigit.push("V");
        quotient -= 5;
      } else if (quotient === 4) {
        oneDigit.push("IV");
        quotient -= 4;
      } else if (quotient > 0 && quotient < 4) {
        oneDigit.push("I");
        quotient--;
      }
    }
    return convertInput(remainder);
  }
}

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
})