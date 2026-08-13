import { addDish, getDishes, getRandomDish } from "./types/ts/dishesDB";

export function initSuggestionPage(): void {
  const suggestBtn = document.querySelector<HTMLButtonElement>('[data-action="suggest"]');
  const suggestionResult = document.querySelector<HTMLParagraphElement>('[data-el="suggestion-result"]');

  if (!suggestBtn || !suggestionResult) return;

  suggestBtn.addEventListener("click", () => {
    const dish = getRandomDish();
    suggestionResult.textContent = dish ?? "Bitte zuerst Gerichte hinzufügen.";
  });
}

export function initListPage(): void {
  const addForm = document.querySelector<HTMLFormElement>('[data-el="add-form"]');
  const dishInput = document.querySelector<HTMLInputElement>('[data-el="dish-input"]');
  const dishList = document.querySelector<HTMLUListElement>('[data-el="dish-list"]');

  if (!addForm || !dishInput || !dishList) return;

  function renderDishList(): void {
    const dishes = getDishes();
    dishList!.innerHTML = dishes
      .map((dish) => `<li class="dish-list__item">${escapeHtml(dish)}</li>`)
      .join("");
  }

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addDish(dishInput.value);
    dishInput.value = "";
    renderDishList();
  });

  renderDishList();
}

function escapeHtml(value: string): string {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}
