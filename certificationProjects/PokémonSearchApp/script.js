const userInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const spriteContainer = document.getElementById("pokemon-sprite-container");

const pokedexURL = " https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

let fetchedResults;
let relevantData = [];

const fetchData = async () => {
  try {
    const res = await fetch(pokedexURL);
    const data = await res.json();
    fetchedResults = data; 
    console.log("first fetch", fetchedResults); // object 
    fetchedResults = fetchedResults["results"];
    console.log("assign first fetch's second property's value to it:", fetchedResults); // array
    // destructure array
    fetchedResults.forEach((obj) => {
      relevantData.push(({id, name, height, weight}) => ({id, name, height, weight} = obj));
    })
    console.log("success?", relevantData);
  } catch (err) {
    console.log("There is an error:", err);
  }
}

fetchData();

const processData = async (data) => {
  fetchedResults = data;
  console.log(Array.isArray(fetchedResults));
  relevantData = fetchedResults.map(({ id, name, height, weight, sprites, stats}) => ({ id, name, height, weight, sprites, stats}));
  console.log("Success?", relevantData);
}

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
  console.log("step 4");
  // const getUrl = fetchedResults[id-1]["url"];
  console.log("url data:", extractedIdUrl);

  if (matchedInput === id) {
    const toDisplayName = fetchedResults[id-1]["name"].slice();
    console.log("User has input an id:", id, matchedInput);
    pokemonName.innerHTML = `<span>Name: ${toDisplayName.charAt(0).toUpperCase() + toDisplayName.slice(1)}</span>`;
    pokemonId.innerHTML = `<span>Pokédex-ID: ${id}</span>`;

  } else {
    console.log(`user has input ${matchedInput}, its ID is: ${id}`)
    pokemonName.innerHTML = `<span>Name: ${matchedInput.charAt(0).toUpperCase() + matchedInput.slice(1)}</span>`;
    pokemonId.innerHTML = `<span>Pokédex-ID: ${id}</span>`;
  }


}

searchBtn.addEventListener("click", () => {
  console.log("Step 1");
  processInput();
});