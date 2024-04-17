const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

// regex bundle
const helpRegex = /please help/i;
const helpOrAssistRegex = /please help|assist me/i;
const denyList = [helpRegex];

// match method 
// const isSpam = (msg) => msg.match(helpRegex);
// test method returns a boolean
// const isSpam = (msg) => helpRegex.test(msg);

const isSpam = (msg) => denyList.some((regex) => regex.test(msg));


checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  result.textContent = isSpam(messageInput.value)
  ? "Oh no! This looks like a spam message."
  : "This message does not seem to contain any spam.";
  messageInput.value = "";
})