import { addDish, getDishes, getRandomDish } from "./types/ts/dishesDB";

type View = "suggestion" | "list";

export function initUi(): void {
  let currentView: View = "suggestion";

  const toggleBtn = document.querySelector<HTMLButtonElement>('[data-action="toggle-view"]');
  const suggestBtn = document.querySelector<HTMLButtonElement>('[data-action="suggest"]');
  const suggestionResult = document.querySelector<HTMLParagraphElement>('[data-el="suggestion-result"]');
  const addForm = document.querySelector<HTMLFormElement>('[data-el="add-form"]');
  const dishInput = document.querySelector<HTMLInputElement>('[data-el="dish-input"]');
  const dishList = document.querySelector<HTMLUListElement>('[data-el="dish-list"]');
  const views = document.querySelectorAll<HTMLElement>("[data-view]");

  if (!toggleBtn || !suggestBtn || !suggestionResult || !addForm || !dishInput || !dishList) return;

  function render(): void {
    views.forEach((view) => {
      view.hidden = view.dataset.view !== currentView;
    });
    toggleBtn!.textContent = currentView === "suggestion" ? "Meine Liste" : "Zurück";
    renderDishList();
  }

  function renderDishList(): void {
    const dishes = getDishes();
    dishList!.innerHTML = dishes
      .map((dish) => `<li class="dish-list__item">${escapeHtml(dish)}</li>`)
      .join("");
  }

  toggleBtn.addEventListener("click", () => {
    currentView = currentView === "suggestion" ? "list" : "suggestion";
    render();
  });

  suggestBtn.addEventListener("click", () => {
    const dish = getRandomDish();
    suggestionResult.textContent = dish ?? "Bitte zuerst Gerichte hinzufügen.";
  });

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addDish(dishInput.value);
    dishInput.value = "";
    renderDishList();
  });

  render();
}

function escapeHtml(value: string): string {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}
