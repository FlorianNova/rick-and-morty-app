import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
const searchQuery = "";

async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
    );
    const data = await response.json();
    const results = data.results;
    maxPage = data.info.pages;
    console.log(maxPage);

    console.log(results);
    console.log(data);
    console.log(page);
    // create Card
    cardContainer.innerHTML = "";
    //update pagination
    pagination.textContent = `${page} / ${maxPage}`;

    results.forEach((character) => {
      const newCard = createCharacterCard(character);
      cardContainer.append(newCard);
    });
  } catch (error) {
    console.log("Da ist ein Fehler aufgetreten", error);
  }
}

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
});

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});

searchBar.addEventListener("submit"),
  () => {
    searchQuery = searchBar.value;
    fetchCharacters();
  };

fetchCharacters();
