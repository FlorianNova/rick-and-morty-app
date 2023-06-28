export function createButton(text, onClick) {
  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = text;
  button.addEventListener("click", onClick);

  return button;
}

/* <nav class="navigation" data-js="navigation">
      <button class="button button--prev" data-js="button-prev">
        previous
      </button>
      <span class="navigation__pagination" data-js="pagination">1 / 1</span>
      <button class="button button--next" data-js="button-next">next</button>
    </nav> */
