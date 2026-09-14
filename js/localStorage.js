const DISHES_STORAGE_KEY = 'dishes';

function loadDishes() {
    const stored = localStorage.getItem(DISHES_STORAGE_KEY);
    if (stored) {
        dishes = JSON.parse(stored);
    } else {
        saveDishes();
    }
}

function saveDishes() {
    localStorage.setItem(DISHES_STORAGE_KEY, JSON.stringify(dishes));
}

function deleteDish(index) {
    dishes.splice(index, 1);
    saveDishes();
    showDishList();
}
