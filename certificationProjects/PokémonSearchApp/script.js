const userInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonTypes = document.getElementById("types");
const pokemonSprite = document.getElementById("pokemon-sprite-container");
const pokemonHP = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const pokemonSpAttack = document.getElementById("special-attack");
const pokemonSpDefense = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed");
const pokemonStatsTotal = document.getElementById("total-stats");

// Use this get id, name, and URL of other data
const pokemonList = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
// concatenate the id or name to this URL to get other data
const pokemonData = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

let fetchedList;
let relevantData = [];
let statsTotal = 0;

const fetchList = async () => {
  try {
    const res = await fetch(pokemonList);
    const data = await res.json();
    fetchedList = data; 
    fetchedList = fetchedList["results"];
  } catch (err) {
    console.log("There is an error:", err);
  }
}

fetchList();

const fetchData = async (id) => {
  try {
    const res = await fetch(`${pokemonData + id}`);
    const data = await res.json();
    const relevantData = data;
    displayRelevantData(relevantData);
  } catch (err) {
    console.log("There is an error fetching relevant data:", err);
  }
}

const processInput = () => {
  if (isNaN(userInput.value)) {
    const nameInput = userInput.value.toLowerCase();
    hasMatch(nameInput);
  } else {
    const idInput = parseInt(userInput.value);
    hasMatch(idInput);
  }
}

const hasMatch = (processedInput) => {
  let indexCount = 0;
  const foundMatch = fetchedList.some(obj => {
    const valuesArray = Object.values(obj);
    indexCount++;
    return valuesArray.includes(processedInput);
  })

  if (!foundMatch) {
    return alert("Pokémon not found");
  }
  
  fetchData(indexCount);
}

const displayRelevantData = (relevantData) => {
  pokemonName.innerHTML = `<span>${relevantData["name"].toUpperCase()}</span>`;
  pokemonId.innerHTML = `<span>${relevantData["id"]}</span>`;
  pokemonWeight.innerHTML = `<span>${relevantData["weight"]}`;
  pokemonHeight.innerHTML = `<span>${relevantData["height"]}`;
  pokemonTypes.innerHTML = "";
  relevantData["types"].forEach((type) => {
    pokemonTypes.innerHTML += `<span>${type["type"]["name"].toUpperCase()} </span>`;
  });
  pokemonSprite.innerHTML = `
  <img id="sprite" src="${relevantData["sprites"]["front_default"]}" alt="pokemon-sprite"/ >
  <img id="shiny-sprite" src="${relevantData["sprites"]["front_shiny"]}" alt="pokemon-shiny-sprite" />
  `;
  pokemonHP.textContent = relevantData["stats"][0]["base_stat"];
  pokemonAttack.textContent = relevantData["stats"][1]["base_stat"];
  pokemonDefense.textContent = relevantData["stats"][2]["base_stat"];
  pokemonSpAttack.textContent = relevantData["stats"][3]["base_stat"];
  pokemonSpDefense.textContent = relevantData["stats"][4]["base_stat"];
  pokemonSpeed.textContent = relevantData["stats"][5]["base_stat"];
  relevantData["stats"].forEach((stat) => {
    statsTotal += stat["base_stat"];
  })
  pokemonStatsTotal.textContent = statsTotal;
  statsTotal = 0;
}

searchBtn.addEventListener("click", () => {
  processInput();
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    processInput();
  }
});