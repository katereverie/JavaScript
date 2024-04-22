const checkBtn = document.getElementById("check-btn");
const userInput = document.getElementById("user-input");

// const cleanUserInput = () => {
//   const cleanedUserInput = userInput.value;
// }
const checkUserInput = () => {
  console.log(`checking user input: ${userInput.value}`);

  const regex = /\s*/gi;

  const cleanedUserInput = userInput.value.replace(regex, "");

  console.log(`checking cleaned user input: ${cleanedUserInput}`);
  // check empty input
  if (cleanedUserInput === "") {
    alert("Please provide a phone number");
    return;
  }

}

checkBtn.addEventListener("click", checkUserInput);
