const API_URL = "https://pokeapi.co/api/v2";

const searchQuery = document.querySelector("#searchQueryInput");
const pokemon_name = document.querySelector(".pokemon-name");
const pokemon_img = document.querySelector("#pokemon-image");
const type_list = document.querySelector(".type-list");

fetch(`${API_URL}/pokemon/1`)
  .then((response) => response.json())
  .then((pokemon) => {
    pokemon_name.innerHTML = `${pokemon.id} - ${pokemon.name}`;
    pokemon_img.src = `${pokemon.sprites.front_default}`;
    type_list.innerHTML = `<li>${pokemon.types[0].type.name}</li>`;
  });

function printValue() {
  const pokemon = searchQuery.value;
  fetch(`${API_URL}/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((pokemon) => {
      pokemon_name.innerHTML = `${pokemon.id} - ${pokemon.name}`;
      pokemon_img.src = `${pokemon.sprites.front_default}`;
      type_list.innerHTML = `<li>${pokemon.types[0].type.name}</li>`;
      console.log(pokemon.abilities);
    });
}
