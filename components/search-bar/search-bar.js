export function createSearchBar(text, onSubmit) {
  const searchBar = document.createElement("form");
  searchBar.classList.add("search-bar");
  searchBar.addEventListener("submit", onSubmit);

  const input = document.createElement("input");
  input.name = "query";
  input.type = "text";
  input.placeholder = text;
  input.setAttribute("aria-label", "character name");

  const button = document.createElement("button");
  button.classList.add("search-bar__button");
  button.setAttribute("aria-label", "search for character");

  const icon = document.createElement("img");
  icon.classList.add("search-bar__icon");
  icon.src = "assets/magnifying-glass.png";
  icon.alt = "searchicon";

  //searchBarContainer.append(form);
  searchBar.append(input);
  searchBar.append(button);
  button.append(icon);

  return searchBar;
}

/* <div class="search-bar-container" data-js="search-bar-container">
        <form action="" class="search-bar" data-js="search-bar">
          <input
            name="query"
            class="search-bar__input"
            type="text"
            placeholder="search characters"
            aria-label="character name"
          />
          <button class="search-bar__button" aria-label="search for character">
            <img
              class="search-bar__icon"
              src="assets/magnifying-glass.png"
              alt=""
            />
          </button>
        </form>
      </div>*/
