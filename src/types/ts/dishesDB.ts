import { loadDishes, saveDishes } from "./localStorage";

let dishes: string[] = loadDishes();

export function getDishes(): string[] {
  return dishes;
}

export function addDish(name: string): void {
  const trimmedName = name.trim();
  if (!trimmedName || dishes.includes(trimmedName)) return;

  dishes.push(trimmedName);
  saveDishes(dishes);
}

export function getRandomDish(): string | null {
  if (dishes.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
}
