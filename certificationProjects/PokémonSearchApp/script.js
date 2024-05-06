const userInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const spriteContainer = document.getElementById("pokemon-sprite-container");

// Use this get id, name, and URL of other data
const pokemonList = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
// concatenate the id or name to this URL to get other data
const pokemonData = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

let fetchedList;
let fetchedData;
let relevantData = [];

const testObjInArr = [
  {
    id: 1,
    name: "AsianBoss",
    stringUrl: "Fake"
  },
  {
    id: 2,
    name: "EuropeanBoss",
    stringUrl: "True"
  }
]

console.log("testing get the first element of array:", testObjInArr[0]);

const fetchList = async () => {
  console.log("fetching list");
  try {
    const res = await fetch(pokemonList);
    const data = await res.json();
    fetchedList = data; 
    console.log("first fetch", fetchedList); // object 
    fetchedList = fetchedList["results"];
    console.log("assign first fetch's second property's value to it:", fetchedList); // array
    console.log("Fetched List is an array?", Array.isArray(fetchedList));
    console.log(`Its length is ${fetchedList.length}`);
    console.log("Its first element is an objects:", fetchedList[0]);
  } catch (err) {
    console.log("There is an error:", err);
  }
}

fetchList();

const fetchData = async (id) => {
  console.log("fetching data");
  try {
    const res = await fetch(fetchedList[id - 1]["url"]);
    const data = await res.json();
    const fetchedData = data;
    console.log("checking if found the correct relevant data:", fetchedData);
  } catch (err) {
    console.log("There is an error fetching relevant data:", err);
  }
}

const processInput = () => {
  console.log("processing input");
  if (isNaN(userInput.value)) {
    const nameInput = userInput.value.toLowerCase();
    console.log(`User has input a name: ${nameInput}`);
    hasMatch(nameInput);
  } else {
    const idInput = parseInt(userInput.value);
    console.log(`user has input an id: ${idInput}`);
    hasMatch(idInput);
  }
}

const hasMatch = (processedInput) => {
  console.log("now searching for a match...");
  let indexCount = 0;
  const foundMatch = fetchedList.some(obj => {
    const valuesArray = Object.values(obj);
    indexCount++;
    console.log(indexCount, valuesArray);
    return valuesArray.includes(processedInput);
  })

  if (foundMatch) {
    console.log("Matched found! This is the ID of the matched Pokemon:", indexCount);
    displayIdName(processedInput, indexCount);
  } else {
    alert("Pokémon not found");
  }
}

const displayIdName = (matchedInput, id) => {
  console.log("Displaying data of matched Pokemon...");
  const toDisplayName = fetchedList[id-1]["name"].slice();


  if (matchedInput === id) {
    console.log("User has input an id:", id, matchedInput);
    pokemonName.innerHTML = `<span>Name: ${toDisplayName.charAt(0).toUpperCase() + toDisplayName.slice(1)}</span>`;
    pokemonId.innerHTML = `<span>Pokédex-ID: ${id}</span>`;

  } else {
    console.log(`user has input ${matchedInput}, its ID is: ${id}`)
    pokemonName.innerHTML = `<span>Name: ${matchedInput.charAt(0).toUpperCase() + matchedInput.slice(1)}</span>`;
    pokemonId.innerHTML = `<span>Pokédex-ID: ${id}</span>`;
  }
  
  fetchData(id);
}

searchBtn.addEventListener("click", () => {
  console.log("user clicked search");
  processInput();
});