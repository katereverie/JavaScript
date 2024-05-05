const userInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const spriteContainer = document.getElementById("pokemon-sprite-container");

const pokedexURL = " https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

let fetchedResults = [];

const processData = (data) => {
  fetchedResults = data["results"];
}

const fetchData = async () => {
  try {
    const res = await fetch(pokedexURL);
    const data = await res.json();
    processData(data);
  } catch (err) {
    console.log("There is an error:", err);
  }
}

fetchData();

const processInput = () => {
  console.log("Step 2");
  if (isNaN(userInput.value)) {
    const nameInput = userInput.value.toLowerCase();
    console.log("user has input a name:", nameInput);
    hasMatch(nameInput);
  } else {
    const idInput = parseInt(userInput.value);
    console.log("user has input an id:", idInput);
    hasMatch(idInput);
  }
}

const hasMatch = (processedInput) => {
  console.log("Step 3");
  let indexCount = 0;
  const foundMatch = fetchedResults.some(obj => {
    const valuesArray = Object.values(obj);
    indexCount++;
    console.log(indexCount, valuesArray);
    return valuesArray.includes(processedInput);
  })

  console.log("This is the ID of the matched Pokemon:", indexCount);

  if (foundMatch) {
    console.log("We found a matching! Displaying ...");
    displaySearchResults(processedInput, indexCount);
  } else {
    alert("Pokémon not found");
  }
}

const displaySearchResults = (matchedInput, id) => {

  if (matchedInput === id) {
    console.log("User has input an id:", id, matchedInput);
    pokemonName.innerHTML += `<span id="${id}">${fetchedResults[id-1]["name"].charAt(0).toUpperCase() }</span>`;
  } else {
    console.log(`user has input ${matchedInput}, its ID is: ${id}`)
  }

}

searchBtn.addEventListener("click", () => {
  console.log("Step 1");
  processInput();
});