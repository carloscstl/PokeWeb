const API_URL = "https://pokeapi.co/api/v2";

const searchQuery = document.querySelector("#searchQueryInput");
const pokemon_name = document.querySelector(".pokemon-name");
const pokemon_img = document.querySelector("#pokemon-image");
const type_list = document.querySelector(".type-list");

const putValues = (pokemon) => {
  pokemon_name.innerHTML = `${pokemon.id} - ${pokemon.name}`;
  pokemon_img.src = `${pokemon.sprites.front_default}`;
  const tpl = pokemon.types.map((type) => `<li>${type.type.name}</li>`);
  type_list.innerHTML = `${tpl}`;
};

fetch(`${API_URL}/pokemon/1`)
  .then((response) => response.json())
  .then((pokemon) => putValues(pokemon));

function printValue() {
  let pokemon = searchQuery.value;
  pokemon = pokemon.toLowerCase();
  fetch(`${API_URL}/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((pokemon) => putValues(pokemon));
}
