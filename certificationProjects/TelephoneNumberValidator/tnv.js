const checkBtn = document.getElementById("check-btn");

const checkUserInput = () => {
  // check empty input
  if (checkBtn.value === "") {
    alert("Please provide a phone number");
    return;
  }
}

checkBtn.addEventListener("click", checkUserInput);
