const textInput1 = "I love YOU"; // targets user's text input, this is an input el.
const textInput2 = "12321";
let isPalindrome = true;

cleanedTextInput1 = textInput1.toLowerCase().replace(/[\W\s]/g, "");
cleanedTextInput2 = textInput2.toLowerCase().replace(/[\W\s]/g, "");
console.log(cleanedTextInput1);
console.log(cleanedTextInput2);


// const arrayInput = cleanedInput.split("");
// const arrayInputReversed = arrayInput.slice().reverse();
// for (i = 0; i < arrayInput.length; i++) {
//   if (arrayInput[i] !== arrayInputReversed[i]) {
//     isPalindrome = false;
//     break;
//   } 
// }