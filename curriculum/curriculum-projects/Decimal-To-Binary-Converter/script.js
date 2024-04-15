const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// create converter function
const decimalToBinary = (input) => {
  // the following lines of codes that are commented out are the basic way of writing a DtB converter function
  // const inputs = [];
  // const quotients = [];
  // const remainders = [];

  // if (input === 0) {
  //   result.innerText = "0";
  //   return;
  // }

  // while (input > 0) {
  //   const quotient = Math.floor(input / 2);
  //   const remainder = input % 2;

  //   inputs.push(input);
  //   quotients.push(quotient);
  //   remainders.push(remainder);
  // }

  // result.innerText = remainders.reverse().join("");
  
  // the following block of codes is a more efficient way of writing a DtB converter function
  // let binary = "";

  // if (input === 0) {
  //   binary === "0";
  //   return;
  // }

  // while (input > 0) {
  //   binary = (input % 2) + binary;
  //   input = Math.floor(input / 2);
  // }

  // result.innerText = binary;

  // recursive function
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

// check userinput when convertBtn is clicked
const checkUserInput = () => {
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert("Please provide a decimal number");
    return;
  }
  decimalToBinary(parseInt(numberInput.value));

  result.textContent = decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
}

convertBtn.addEventListener("click", checkUserInput);

// if users press enter or return, check user inputs - alternative to click
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
})