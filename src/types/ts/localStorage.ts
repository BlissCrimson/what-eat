const DISHES_KEY = "what-eat:dishes";

export function saveDishes(dishes: string[]): void {
  localStorage.setItem(DISHES_KEY, JSON.stringify(dishes));
}

export function loadDishes(): string[] {
  const raw = localStorage.getItem(DISHES_KEY);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
