export function createSearchBar(searchBarContainer, onSubmit) {
  const form = document.createElement("form");
  form.classList.add("search-bar");
  form.addEventListener("submit", onSubmit);

  const input = document.createElement("input");
  input.name = "query";
  input.type = "text";
  input.placeholder = "search characters";
  input.setAttribute("aria-label", "character name");

  const button = document.createElement("button");
  button.classList.add("search-bar__button");
  button.setAttribute("aria-label", "search for character");

  const icon = document.createElement("img");
  icon.classList.add("search-bar__icon");
  icon.src = "assets/magnifying-glass.png";
  icon.alt = "searchicon";

  searchBarContainer.append(form);
  form.append(input);
  form.append(button);
  button.append(icon);

  return searchBarContainer;
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
