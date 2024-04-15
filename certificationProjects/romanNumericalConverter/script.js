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
}

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
})