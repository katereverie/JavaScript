const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

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
  
  // valid input, now convert it
  convertInput(inputInt);
}

const convertInput = (input) => {
  const fourDigits = []; // 1000 - 3000
  const threeDigits = []; // 100 - 900
  const twoDigits = []; // 10 - 90
  const oneDigit = []; // 1 - 9

  if (input >= 1000) {
    console.log(input);
    let quotient = Math.floor(input / 1000);
    console.log(quotient);
    let remainder = input % 1000;
    console.log(remainder);

    while (quotient > 0) {
      console.log(fourDigits)
      fourDigits.push("M");
      quotient--; 
      console.log(quotient);
    }

    console.log(fourDigits);
    console.log(fourDigits.join(""));
    result.innerText = fourDigits.join("");
    
    return convertInput(remainder);
  } 

  if (999 >= input >= 100) {
    console.log(input);
    let quotient = Math.floor(input / 100);
    console.log(quotient);
    let remainder = input % 100;
    console.log(remainder);    
    
    while (quotient !== 0) {
      
      if (quotient === 9) {
        threeDigits.push["CM"];
        quotient = quotient - 9;
      }
  
      if (9 > quotient >= 5) {
        threeDigits.push["D"];
        quotient -= 5;
      }
  
      if (quotient === 4) {
        threeDigits.push("CD");
        quotient = quotient - 4;
      }
  
      threeDigits.push("C");
      quotient = quotient - 1;
        
    }  

    convertInput(remainder);

  }

  if (99 >= input >= 10) {

    let quotient = Math.floor(input / 10);
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

  if (9 >= input >= 1) {
    
    if (input === 9) {
      threeDigits.push["IX"];
    }

    if (9 > input >= 5) {
      oneDigit.push["V"];
      input -= 5;

      while (input > 0) {
        oneDigit.push["I"];
        input--;
      }
    }

    if (input === 4) {
      oneDigit.push("IV");
    }

    if (4 > input > 0) {

      while (input !== 0) {
        oneDigit.push("I");
      }
    }

  }
  
  
  return result.innerHTMl = fourDigits.join("");
}

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
})