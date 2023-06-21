export function createPagination(page, maxPage) {
  const pagination = document.createElement("span");
  pagination.classList.add("navigation__pagination");
  pagination.setAttribute("dataset-js", "pagination");
  pagination.textContent = `${page} / ${maxPage}`;

  return pagination;
}
