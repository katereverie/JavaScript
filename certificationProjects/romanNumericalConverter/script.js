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
  const numberOfM = []; // 1000
  const numberOfD = []; // 500
  const numberOfC = []; // 100
  const numberOfL = []; // 50
  const numberOfX = []; // 10
  const numberOfV = []; // 5
  const numberOfI = []; // 1

  if (Math.floor(input / 1000) !== 0 && input > 1000) {
    numberOfM.push("M");
    input -= 1000;
    convertInput(input);
  } 

  if (Math.floor(input / 500) !==0 && input > 500) {
    numberOfD.push("D")
  }
}

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
})