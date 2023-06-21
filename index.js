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
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    const results = data.results;
    console.log(results);
    console.log(data);
    // create Card
    cardContainer.innerHTML = "";
    // teilschritte 1. append 2. create Character Card 3. was kommt in die Funktion rein
    // 4. wie werden mehrere Karten erstellt? 5.
    results.forEach((character) => {
      const newCard = createCharacterCard(character);
      cardContainer.append(newCard);
    });
  } catch (error) {
    console.log("Da ist ein Fehler aufgetreten", error);
  }
}
fetchCharacters();
