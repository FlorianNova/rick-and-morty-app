import { createCharacterCard } from "./components/card/card.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createButton } from "./components/nav-button/nav-button.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const navigation = document.querySelector('[data-js="navigation"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

async function fetchCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
    );
    const data = await response.json();
    const results = data.results;
    maxPage = data.info.pages;
    cardContainer.innerHTML = "";

    results.forEach((character) => {
      const newCard = createCharacterCard(character);
      cardContainer.append(newCard);
    });
  } catch (error) {
    console.log("Da ist ein Fehler aufgetreten", error);
  }
}

function onPrevButtonClick() {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
}

function onNextButtonClick() {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
}

function onSearchBarSubmit(event) {
  event.preventDefault();
  searchQuery = event.target.elements.query.value;
  fetchCharacters();
}

/* === Create UI Components === */
const prevButton = createButton("prev", onPrevButtonClick);
const nextButton = createButton("next", onNextButtonClick);
const pagination = createPagination(page, maxPage);
const searchBar = createSearchBar(searchBarContainer, onSearchBarSubmit);

/* === Append UI Components to container & navigation === */
console.log(searchBarContainer);
searchBarContainer.append(searchBar);
navigation.append(prevButton, nextButton, pagination);

fetchCharacters();
