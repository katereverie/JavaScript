const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// check userinput when convertBtn is clicked
const checkUserInput = () => {
  console.log(numberInput.value);
}
convertBtn.addEventListener("click", checkUserInput);