# Pokémon Search App

Use case & Third Party API
This application will search for Pokémon by name or ID, and displays the results to the user.
This application utilizes freeCodeCamp's PokéAPI Proxy for retrieving Pokémon data and images.

## Get DOM & URLs

1. Prepare DOM.
2. Prepare URLs.

## Request & Parse Data

Analysis of Source Data

- The source data consists of one object with two pairs: `count: 1302` and `results: [...]`.
- The value of `results` is an array with 1302 elements.
- Log `results.[0]` in the console, we see that each array element is an object.
- Each object consists of three pairs of property/value.
- 1st pair: `id: 1`; 2nd pair: `name: "bulbasaur"`; 3rd pair: `url: "..."`
- Get this *id*, *name*, and *url* because I need to display it later.
- Click on the `url`, we see the data we need to display on the Pokédex.
  - Specifically: 
Functions

- Create `const showSearchResults = (data) => {}`
- Inside the body, deconstruct `id`, `name`, and `url`.
