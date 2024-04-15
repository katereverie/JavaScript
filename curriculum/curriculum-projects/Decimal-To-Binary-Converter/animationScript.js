const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// create converter function
const decimalToBinary = (input) => {

  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
}

// add animation
const animationData = [
  
  {
    inputVal: 5,
    marginTop: 300,
    addElDelay: 1000
  },
  {
    inputVal: 2,
    marginTop: -200,
    addElDelay: 1500
  },
  {
    inputVal: 1,
    marginTop: -200,
    addElDelay: 2000
  }
];
const showAnimation = () => {
  result.innerText = "Call Stack Animation";

  

}

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