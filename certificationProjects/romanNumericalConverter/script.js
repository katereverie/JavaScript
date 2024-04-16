const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

let r;

const checkUserInput = () => {
  // convert to int
  const inputInt = parseInt(numberInput.value);
  
  // check for invalid input
  if (isNaN(inputInt)) {
    result.innerHTML = "Please enter a valid number";
    return;
  } else if (inputInt <= 0) {
    result.innerHTML = "Please enter a number greather than or equal to 1";
    return;
  } else if (inputInt >= 4000) {
    result.innerHTML = "Please enter a number less than or equal to 3999";
    return;
  }
  
  // valid input, now convert it
  convertInput(inputInt);
}

const convertInput = (input) => {
  const fourDigits = []; // 1000 - 3000
  const threeDigits = []; // 100 - 900
  const twoDigits = []; // 10 - 90
  const oneDigit = []; // 1 - 9

  // const countFourDigitsQuotient = Math.floor(input / 1000);
  // const countThreeDigits = [];
  // const countTwoDigits = [];
  // const countOneDigit = [];

  if (input >= 1000) {
    const quotient = Math.floor(input / 1000);
    const remainder = input % 1000;

    while (quotient > 0) {
      fourDigits.push("M");
      quotient --;  
    }

    convertInput(remainder);
  } 

  if (999 > input >= 100) {

    const quotient = Math.floor(input / 100);
    const remainder = input % 100;
    

    if (quotient === 9) {
      threeDigits.push["CM"];
    }

    if (9 > quotient >= 5) {
      threeDigits.push["D"];
      quotient -= 5;

      while (quotient > 0) {
        threeDigits.push["C"];
        quotient--;
      }
    }

    if (quotient === 4) {
      threeDigits.push("CD");
    }

    if (4 > quotient > 0) {

      while (quotient !== 0) {
        threeDigits.push("C");
      }
    }

    convertInput(remainder);
  }

  if (99 > input >= 10) {

    const quotient = Math.floor(input / 10);
    const remainder = input % 10;
    

    if (quotient === 9) {
      twoDigits.push["XC"];
    }

    if (9 > quotient >= 5) {
      twoDigits.push["L"];
      quotient -= 5;

      while (quotient > 0) {
        twoDigits.push["X"];
        quotient--;
      }
    }

    if (quotient === 4) {
      twoDigits.push("XL");
    }

    if (4 > quotient > 0) {

      while (quotient !== 0) {
        twoDigits.push("X");
      }
    }

    convertInput(remainder);
  }

  if (9 > input >= 1) {
    
    if (quotient === 9) {
      threeDigits.push["IX"];
    }

    if (9 > quotient >= 5) {
      oneDigit.push["V"];
      quotient -= 5;

      while (quotient > 0) {
        oneDigit.push["I"];
        quotient--;
      }
    }

    if (quotient === 4) {
      oneDigit.push("IV");
    }

    if (4 > quotient > 0) {

      while (quotient !== 0) {
        oneDigits.push("I");
      }
    }

    convertInput(remainder);
  }
  

  result.innerText = fourDigits.join("") + threeDigits.join("") + twoDigits.join("") + oneDigit.join("");
}

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
})