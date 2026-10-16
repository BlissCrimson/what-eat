import { dishes } from './db-dishes.js';

const DISHES_STORAGE_KEY = 'dishes';

export async function loadDishes() {
    const stored = localStorage.getItem(DISHES_STORAGE_KEY);
    if (stored) {
        dishes.length = 0;
        dishes.push(...JSON.parse(stored));
    } else {
        saveDishes();
    }
}

export async function saveDishes() {
    localStorage.setItem(DISHES_STORAGE_KEY, JSON.stringify(dishes));
}
